import { createContext, useState } from 'react';
import { EmptyPagination } from '../../../types/pagination.types';
import { VehiclePagination } from '../../../types/vehicles.types';

interface HomePageContextProps {
  vehicles: VehiclePagination;
  setVehicles: React.Dispatch<React.SetStateAction<VehiclePagination>>;
}

export const ChangeVehicleTypeContext = createContext<HomePageContextProps>({
  vehicles: EmptyPagination,
  setVehicles: () => {},
});

export const ChangeVehicleTypeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [vehicles, setVehicles] = useState<VehiclePagination>(EmptyPagination);

  return (
    <ChangeVehicleTypeContext.Provider value={{ vehicles, setVehicles }}>
      {children}
    </ChangeVehicleTypeContext.Provider>
  );
};
