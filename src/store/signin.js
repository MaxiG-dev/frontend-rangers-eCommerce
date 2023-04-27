import { create } from 'zustand';

export const useSigninStore = create((set) => ({
  signin: false,
  defaultTab: 'login',
  toggleSignin: () => set((state) => ({ signin: !state.signin })),
  setDefaultTab: (tab) => set(() => ({ defaultTab: tab })),
}));
