import { Flex } from '@mantine/core';
import { ChangeVehicleTypeForm } from './components/change-vehicle-type-form';
import { Vehicles } from './components/vehicles-table';
import { ChangeVehicleTypeProvider } from './context/change-vehicle-type.context';

export const ChangeVehicleTypesPage = () => {
  return (
    <ChangeVehicleTypeProvider>
      <Flex gap={'2rem'} direction={'column'}>
        <ChangeVehicleTypeForm />

        <Vehicles />
      </Flex>
    </ChangeVehicleTypeProvider>
  );
};
