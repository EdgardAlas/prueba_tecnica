import { useContext } from 'react';
import { ChangeVehicleTypeContext } from '../context/change-vehicle-type.context';

export const useChangeVehicleTypesContext = () => {
  return useContext(ChangeVehicleTypeContext);
};
