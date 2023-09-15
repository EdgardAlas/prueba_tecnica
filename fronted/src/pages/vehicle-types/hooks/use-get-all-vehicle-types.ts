import React from 'react';
import { api } from '../../../config/api';
import { useVehicleTypesContext } from './use-vehicle-types-context';

export const useGetAllVehicleTypes = () => {
  const [loading, setLoading] = React.useState(false);
  const { setVehiclesTypes, vehiclesTypes } = useVehicleTypesContext();

  const getAllVehicleTypes = (page = 1) => {
    setLoading(true);
    api
      .get('/vehicle-types', {
        params: {
          page,
        },
      })
      .then((response) => {
        setVehiclesTypes(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    vehiclesTypes,
    getAllVehicleTypes,
  };
};
