import { create } from 'zustand';

export const useNotificationStore = create((set) => ({
  notifications: [],
  addNotification: (message, type = 'info') => set((state) => ({
    notifications: [{ id: Date.now(), message, type, read: false }, ...state.notifications]
  })),
  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map(n => n.id === id ? { ...n, read: true } : n)
  })),
  clearAll: () => set({ notifications: [] })
}));
