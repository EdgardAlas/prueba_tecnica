import { useState, useCallback } from 'react';
import { api } from '../config/api';
import { EmptyPagination } from '../types/pagination.types';
import { type VehicleEnties } from '../types/vehicle-entries.types';

export const useVehicleEntries = () => {
  const [loading, setLoading] = useState(false);
  const [vehicleEntries, setVehicleEntries] =
    useState<VehicleEnties>(EmptyPagination);

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
  }, []);

  return { data: vehicleEntries, loading, getAllEntries };
};
