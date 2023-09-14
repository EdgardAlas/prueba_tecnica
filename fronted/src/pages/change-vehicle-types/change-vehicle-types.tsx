import { Flex } from '@mantine/core';
import { ChangeVehicleTypeForm } from './components/ChangeVehicleTypeForm';
import { Vehicles } from './components/Vehicles';
import { ChangeVehicleTypeProvider } from './context/ChangeVehicleTypes.context';

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
