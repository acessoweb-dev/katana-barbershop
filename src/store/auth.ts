import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  token?: string;
  signed: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    set => ({
      token: undefined,
      signed: false,
      setToken: (token: string) => {
        return set(() => ({
          token,
          signed: true,
        }));
      },
      logout: () => {
        return set(() => ({
          token: undefined,
          signed: false,
        }));
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
