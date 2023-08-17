import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { User } from 'interfaces/user.interface';
// import { Cidade } from 'screens/Dashboard/Cidades';

type State = {
  user?: User;
  // cidade?: Cidade;
};

type Actions = {
  setUser: (user?: User) => void;
  // setCidade: (cidade?: Cidade) => void;
  logout: () => void;
};

export const useUserStore = create(
  persist<State & Actions>(
    set => ({
      user: undefined,
      cidade: undefined,
      setUser: user => {
        return set(state => ({
          ...state,
          user,
        }));
      },
      // setCidade: cidade => {
      //   return set(state => ({
      //     ...state,
      //     cidade,
      //   }));
      // },
      logout: () => {
        return set(() => ({
          user: undefined,
          cidade: undefined,
        }));
      },
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
