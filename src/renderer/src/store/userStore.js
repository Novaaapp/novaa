import { create } from 'zustand';
import api from '../lib/axios'; // ← import de l'axios configuré

export const useUserStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async (userId) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/users/${1}`);
      set({ user: response.data, loading: false });
    } catch (err) {
      set({ error: err.response?.data?.message || 'Erreur inconnue', loading: false });
    }
  },

  clearUser: () => set({ user: null }),
}));
