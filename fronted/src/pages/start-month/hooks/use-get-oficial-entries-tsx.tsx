import { notifications } from '@mantine/notifications';
import React from 'react';
import { api } from '../../../config/api';
import { EmptyPagination } from '../../../types/pagination.types';
import { VehicleEnties } from '../../../types/vehicle-entries.types';

export const useGetOficialEntries = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<VehicleEnties>(EmptyPagination);

  const getAllOficialEntries = async (page = 1) => {
    try {
      const data = await api.get('/vehicle-entry/oficial', {
        params: {
          page,
        },
      });
      setData(data.data);
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'No se pudo obtener las entradas oficiales',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return { getAllOficialEntries, loading, data };
};
