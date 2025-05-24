const math = require('mathjs');
const axios = require('axios');

/**
 * Outil calculatrice
 */
async function calculatorTool({ expression }) {
  try {
    const result = math.evaluate(expression);
    return {
      success: true,
      result: result,
      expression: expression
    };
  } catch (error) {
    return {
      success: false,
      error: "Expression mathématique invalide",
      expression: expression
    };
  }
}

/**
 * Outil météo
 */
async function weatherTool({ city, unit = "celsius" }) {
  try {
    // Exemple avec une API météo (remplace par ta clé API)
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
      return {
        success: false,
        error: "Clé API météo non configurée"
      };
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit === 'celsius' ? 'metric' : 'imperial'}`
    );

    return {
      success: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      unit: unit === 'celsius' ? '°C' : '°F'
    };
  } catch (error) {
    return {
      success: false,
      error: "Impossible de récupérer la météo pour cette ville"
    };
  }
}

/**
 * Outil de recherche web (exemple)
 */
async function webSearchTool({ query, limit = 5 }) {
  try {
    // Exemple avec une API de recherche
    // Remplace par ton implémentation préférée
    return {
      success: true,
      query: query,
      results: [
        {
          title: "Résultat exemple",
          url: "https://example.com",
          snippet: "Description du résultat"
        }
      ]
    };
  } catch (error) {
    return {
      success: false,
      error: "Erreur lors de la recherche web"
    };
  }
}

/**
 * Outil de génération d'images (exemple avec DALL-E)
 */
async function imageGenerationTool({ prompt, size = "1024x1024" }) {
  try {
    const openaiClient = require('./openaiClient');
    
    const response = await openaiClient.createImage({
      prompt: prompt,
      n: 1,
      size: size
    });

    return {
      success: true,
      prompt: prompt,
      image_url: response.data.data[0].url
    };
  } catch (error) {
    return {
      success: false,
      error: "Erreur lors de la génération d'image"
    };
  }
}

module.exports = {
  calculatorTool,
  weatherTool,
  webSearchTool,
  imageGenerationTool
};