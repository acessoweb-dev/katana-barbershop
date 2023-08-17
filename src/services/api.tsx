import { API_URL } from '@env';
import axios from 'axios';

import { getToken } from 'utils/apiHelpers';
import { logout } from 'utils/functions';

const createApiInstance = () => {
  const api = axios.create({
    baseURL: API_URL,
    headers: {
      Accept: 'application/json',
    },
  });

  api.interceptors.request.use(
    async (config: any) => {
      const token = getToken();

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error: any) => {
      if (error.response.status === 401) {
        logout();
      }
      return Promise.reject(error);
    }
  );

  return api;
};

const api = createApiInstance();

export default api;
