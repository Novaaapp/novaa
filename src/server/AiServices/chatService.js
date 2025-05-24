const prisma = require('../models/prismaClient.js');
const openaiClient = require('./openaiClient');
const tools = require('./tools');
const availableTools= require('../tools/chatTools.js')
// Définition des outils disponibles


// Map des fonctions réelles
const toolFunctions = {
  calculator: tools.calculatorTool,
  get_weather: tools.weatherTool,
};

async function handleChatMessage(conversationId, userMessage, options = {}) {
  try {
    // 1. Récupérer l'historique des messages
    const messagesHistory = await prisma.message.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' },
    });

    // 2. Préparer les messages pour OpenAI
    const messagesForOpenAI = messagesHistory.map(m => ({
      role: m.role,
      content: m.content,
      ...(m.toolCalls && { tool_calls: JSON.parse(m.toolCalls) }),
      ...(m.toolCallId && { tool_call_id: m.toolCallId })
    }));

    messagesForOpenAI.push({ role: 'user', content: userMessage });

    // 3. Configuration OpenAI avec outils
    if (options.model) openaiClient.setModel(options.model, options.baseURL);
    
    const completion = await openaiClient.createChatCompletion(messagesForOpenAI, {
      temperature: options.temperature ?? 0.7,
      max_tokens: options.max_tokens ?? 1000,
      tools: availableTools,
      tool_choice: "auto" // L'IA décide si elle a besoin d'outils
    });

    const assistantMessage = completion.data.choices[0].message;

    // 4. Sauvegarder le message utilisateur
    await prisma.message.create({
      data: { 
        conversationId, 
        role: 'user', 
        content: userMessage 
      },
    });

    // 5. Traiter les appels d'outils si nécessaire
    if (assistantMessage.tool_calls) {
      // Sauvegarder le message assistant avec tool_calls
      await prisma.message.create({
        data: {
          conversationId,
          role: 'assistant',
          content: assistantMessage.content || '',
          toolCalls: JSON.stringify(assistantMessage.tool_calls)
        },
      });

      // Exécuter chaque outil appelé
      const toolResults = [];
      for (const toolCall of assistantMessage.tool_calls) {
        try {
          const functionName = toolCall.function.name;
          const functionArgs = JSON.parse(toolCall.function.arguments);
          
          if (toolFunctions[functionName]) {
            const result = await toolFunctions[functionName](functionArgs);
            
            toolResults.push({
              role: 'tool',
              content: JSON.stringify(result),
              tool_call_id: toolCall.id
            });

            // Sauvegarder le résultat de l'outil
            await prisma.message.create({
              data: {
                conversationId,
                role: 'tool',
                content: JSON.stringify(result),
                toolCallId: toolCall.id,
                toolName: functionName
              },
            });
          }
        } catch (error) {
          console.error(`Erreur lors de l'exécution de l'outil ${toolCall.function.name}:`, error);
          toolResults.push({
            role: 'tool',
            content: JSON.stringify({ error: "Erreur lors de l'exécution de l'outil" }),
            tool_call_id: toolCall.id
          });
        }
      }

      // Si des outils ont été exécutés, faire un nouvel appel à OpenAI avec les résultats
      if (toolResults.length > 0) {
        const finalMessages = [...messagesForOpenAI, assistantMessage, ...toolResults];
        
        const finalCompletion = await openaiClient.createChatCompletion(finalMessages, {
          temperature: options.temperature ?? 0.7,
          max_tokens: options.max_tokens ?? 1000,
        });

        const finalAssistantMessage = finalCompletion.data.choices[0].message.content;

        // Sauvegarder la réponse finale
        await prisma.message.create({
          data: {
            conversationId,
            role: 'assistant',
            content: finalAssistantMessage
          },
        });

        return finalAssistantMessage;
      }
    }

    // 6. Pas d'outils nécessaires, sauvegarder la réponse directe
    await prisma.message.create({
      data: {
        conversationId,
        role: 'assistant',
        content: assistantMessage.content
      },
    });

    return assistantMessage.content;

  } catch (error) {
    console.error('Erreur dans handleChatMessage:', error);
    throw new Error('Erreur lors du traitement du message');
  }
}

// Fonction pour ajouter dynamiquement de nouveaux outils
function addTool(toolDefinition, toolFunction) {
  availableTools.push(toolDefinition);
  toolFunctions[toolDefinition.function.name] = toolFunction;
}

// Fonction pour lister les outils disponibles
function listAvailableTools() {
  return availableTools.map(tool => ({
    name: tool.function.name,
    description: tool.function.description
  }));
}

module.exports = { 
  handleChatMessage, 
  addTool, 
  listAvailableTools 
};