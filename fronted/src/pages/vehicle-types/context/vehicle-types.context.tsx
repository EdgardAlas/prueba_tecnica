import { createContext, useState } from 'react';
import { EmptyPagination } from '../../../types/pagination.types';
import {
  VehicleTypes,
  VehicleTypesPagination,
} from '../../../types/vehicles-types.types';

interface HomePageContextProps {
  vehiclesTypes: VehicleTypesPagination;
  setVehiclesTypes: React.Dispatch<
    React.SetStateAction<VehicleTypesPagination>
  >;
  vehiclesType: VehicleTypes | undefined;
  setVehiclesType: React.Dispatch<
    React.SetStateAction<VehicleTypes | undefined>
  >;
}

export const VehicleTypesContext = createContext<HomePageContextProps>({
  vehiclesTypes: EmptyPagination,
  setVehiclesTypes: () => {},
  vehiclesType: undefined,
  setVehiclesType: () => {},
});

export const VehicleTypesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [vehiclesTypes, setVehiclesTypes] =
    useState<VehicleTypesPagination>(EmptyPagination);
  const [vehiclesType, setVehiclesType] = useState<VehicleTypes | undefined>();

  return (
    <VehicleTypesContext.Provider
      value={{
        vehiclesTypes,
        setVehiclesTypes,
        vehiclesType,
        setVehiclesType,
      }}
    >
      {children}
    </VehicleTypesContext.Provider>
  );
};
