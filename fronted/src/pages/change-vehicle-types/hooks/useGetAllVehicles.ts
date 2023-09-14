import React from 'react';
import { useChangeVehicleTypesContext } from './useChangeVehicleTypesContext';
import { api } from '../../../config/api';

export const useGetAllVehicles = () => {
  const { setVehicles, vehicles } = useChangeVehicleTypesContext();
  const [loading, setLoading] = React.useState(false);

  const getVehicles = (vehicleType: string, page = 1) => {
    setLoading(true);
    api
      .get('/vehicles', {
        params: {
          vehicle_type: vehicleType,
          page,
        },
      })
      .then((response) => {
        setVehicles(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    getVehicles,
    loading,
    vehicles,
  };
};
