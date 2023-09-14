import { Flex } from '@mantine/core';
import { VehicleTypeForm } from './components/vehicle-type-form';
import { VehicleTypesTable } from './components/vehicle-type-table';
import { VehicleTypesProvider } from './context/vehicle-types.context';

export const VehicleTypesPage = () => {
  return (
    <VehicleTypesProvider>
      <Flex gap={'2rem'} direction={'column'}>
        <VehicleTypeForm />

        <VehicleTypesTable />
      </Flex>
    </VehicleTypesProvider>
  );
};
