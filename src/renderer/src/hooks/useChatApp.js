import { useEffect } from 'react';
import { useChatStore, useConversationStore, useMessageStore } from '../store';

export const useChatApp = (userId) => {
  const {
    conversations,
    currentConversation,
    fetchConversations,
    setCurrentConversation,
    createConversation,
    deleteConversation,
  } = useConversationStore();

  const {
    messages,
    fetchMessages,
    createMessage,
    addMessage,
    clearMessages,
  } = useMessageStore();

  const {
    handleChatMessage,
    isProcessing,
    chatConfig,
    updateChatConfig,
  } = useChatStore();

  // Fetch conversations on mount
  useEffect(() => {
    if (userId) {
      fetchConversations(userId);
    }
  }, [userId, fetchConversations]);

  // Fetch messages when conversation changes
  useEffect(() => {
    if (currentConversation?.id) {
      fetchMessages(currentConversation.id);
    } else {
      clearMessages();
    }
  }, [currentConversation?.id, fetchMessages, clearMessages]);

  // Send message function that combines user message creation and AI response
  const sendMessage = async (messageContent, attachments = null) => {
    if (!currentConversation?.id) return;

    try {
      // Add user message optimistically
      const userMessage = {
        id: Date.now(), // Temporary ID
        conversationId: currentConversation.id,
        role: 'user',
        content: messageContent,
        attachments: attachments || [],
        createdAt: new Date().toISOString(),
      };
      
      addMessage(userMessage);

      // Create user message in database
      const savedUserMessage = await createMessage({
        conversationId: currentConversation.id,
        role: 'user',
        content: messageContent,
        attachments,
      });

      // Handle AI response
      const aiReply = await handleChatMessage(
        currentConversation.id,
        messageContent,
        chatConfig
      );

      // Create AI message in database
      await createMessage({
        conversationId: currentConversation.id,
        role: 'assistant',
        content: aiReply,
      });

      // Refresh messages to get the latest state
      await fetchMessages(currentConversation.id);
      
    } catch (error) {
      console.error('Error sending message:', error);
      // Remove optimistic message on error
      await fetchMessages(currentConversation.id);
      throw error;
    }
  };

  return {
    // Conversation state
    conversations,
    currentConversation,
    setCurrentConversation,
    createConversation,
    deleteConversation,
    
    // Message state
    messages,
    sendMessage,
    
    // Chat state
    isProcessing,
    chatConfig,
    updateChatConfig,
  };
};