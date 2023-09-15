import { createContext, useState } from 'react';
import { VehicleEnties } from '../../../types/vehicle-entries.types';
import { EmptyPagination } from '../../../types/pagination.types';

interface HomePageContextProps {
  vehicleEntries: VehicleEnties;
  setVehicleEntries: React.Dispatch<React.SetStateAction<VehicleEnties>>;
}

export const HomePageContext = createContext<HomePageContextProps>({
  vehicleEntries: EmptyPagination,
  setVehicleEntries: () => {},
});

export const HomeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [vehicleEntries, setVehicleEntries] =
    useState<VehicleEnties>(EmptyPagination);

  return (
    <HomePageContext.Provider value={{ vehicleEntries, setVehicleEntries }}>
      {children}
    </HomePageContext.Provider>
  );
};
