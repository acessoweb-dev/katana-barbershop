'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import api from 'services/api';

// ===================================================================

import { DataContextData } from '/types/providers';

export const DataContext = createContext<DataContextData>(
  {} as DataContextData
);

const mockUserId = 20;

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // =================================================================

  const [servicesData, setServicesData] = useState(null);
  const [servicesLoading, setServicesLoading] = useState<boolean>(false);

  const [aboutusData, setAboutusData] = useState(null);
  const [aboutusLoading, setAboutusLoading] = useState<boolean>(false);

  const handleGetAboutUs = async () => {
    try {
      setAboutusLoading(true);

      const { data: response } = await api.get('/lista_sobre.php', {
        params: {
          usuario_id: mockUserId,
        },
      });

      setAboutusData(response[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setAboutusLoading(false);
    }
  };

  const handleGetServices = async () => {
    try {
      setServicesLoading(true);

      const query: any = {
        page: 1,
        perPage: 500,
      };

      query.usuario_id = mockUserId;

      const { data: response } = await api.get('/lista_servicos.php', {
        params: query,
      });

      setServicesData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setServicesLoading(false);
    }
  };

  useEffect(() => {
    handleGetServices();
    handleGetAboutUs();
  }, []);

  // useEffect(() => {
  //   console.log(servicesData);
  // }, [servicesData]);

  // useEffect(() => {
  //   console.log(aboutusData);
  // }, [aboutusData]);

  // =================================================================

  const DataContextValues = useMemo(() => {
    return {
      servicesData,
      servicesLoading,
      aboutusData,
      aboutusLoading,
    };
  }, [servicesData, servicesLoading, aboutusData, aboutusLoading]);

  return (
    <DataContext.Provider value={DataContextValues}>
      {children}
    </DataContext.Provider>
  );
};

function useData(): DataContextData {
  const context = useContext(DataContext);

  if (!context) throw new Error('useData must be used within a UserProvider');

  return context;
}

export { DataProvider, useData };
