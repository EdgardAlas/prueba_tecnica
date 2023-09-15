import { useCallback, useState } from 'react';
import { api } from '../../../config/api';
import { EmptyPagination } from '../../../types/pagination.types';
import { VehicleEnties } from '../../../types/vehicle-entries.types';
import { useHomePageContext } from './use-home-page-context';

export const useVehicleEntries = () => {
  const [loading, setLoading] = useState(false);

  const { setVehicleEntries, vehicleEntries } = useHomePageContext();

  const getAllEntries = useCallback(async (page = 1) => {
    try {
      setLoading(true);
      const { data } = await api.get<VehicleEnties>('/vehicle-entry', {
        params: {
          page,
        },
      });
      setVehicleEntries(data);
    } catch (error) {
      setVehicleEntries(EmptyPagination);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, getAllEntries, vehicleEntries };
};
