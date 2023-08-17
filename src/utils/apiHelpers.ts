import { useAuthStore } from 'store/auth';

export const getToken = () => {
  return useAuthStore.getState().token;
};
