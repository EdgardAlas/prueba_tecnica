import { useContext } from 'react';
import { ChangeVehicleTypeContext } from '../context/ChangeVehicleTypes.context';

export const useChangeVehicleTypesContext = () => {
  return useContext(ChangeVehicleTypeContext);
};
