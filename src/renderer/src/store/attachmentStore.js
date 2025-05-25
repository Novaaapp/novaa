import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useAttachmentStore = create(
  devtools(
    (set, get) => ({
      // State
      attachments: [],
      loading: false,
      error: null,

      // Actions
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
      clearError: () => set({ error: null }),

      // Fetch attachment by ID
      fetchAttachment: async (id) => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(`/api/attachments/${id}`);
          if (!response.ok) throw new Error('Failed to fetch attachment');
          const attachment = await response.json();
          set({ loading: false });
          return attachment;
        } catch (error) {
          set({ error: error.message, loading: false });
          throw error;
        }
      },

      // Delete attachment
      deleteAttachment: async (id) => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(`/api/attachments/${id}`, {
            method: 'DELETE',
          });
          if (!response.ok) throw new Error('Failed to delete attachment');
          
          set((state) => ({
            attachments: state.attachments.filter((att) => att.id !== id),
            loading: false,
          }));
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },

      // Add attachment to store
      addAttachment: (attachment) => set((state) => ({
        attachments: [...state.attachments, attachment],
      })),

      // Remove attachment from store
      removeAttachment: (id) => set((state) => ({
        attachments: state.attachments.filter((att) => att.id !== id),
      })),

      // Clear attachments
      clearAttachments: () => set({ attachments: [] }),
    }),
    { name: 'attachment-store' }
  )
);

export default useAttachmentStore;