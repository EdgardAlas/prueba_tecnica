import { useContext } from 'react';
import { VehicleTypesContext } from '../context/vehicle-types.context';

export const useVehicleTypesContext = () => {
  return useContext(VehicleTypesContext);
};
