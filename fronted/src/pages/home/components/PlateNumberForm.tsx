import { Button, Flex, TextInput } from '@mantine/core';
import { useState } from 'react';
import { useVehicleCheckInOut } from '../hooks/use-vehicle-check-in-out';

export const PlateNumberForm = () => {
  const { vehicleCheckIn, vehicleCheckOut } = useVehicleCheckInOut();
  const [plateNumber, setPlateNumber] = useState('');

  const handlePlateNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlateNumber(event.currentTarget.value);
  };

  return (
    <>
      <TextInput
        label={'Placa'}
        placeholder={'Ingrese la placa del vehiculo'}
        size='xl'
        value={plateNumber}
        onChange={handlePlateNumberChange}
      />

      <Flex
        gap={'lg'}
        justify={'center'}
        direction={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Button
          size='xl'
          onClick={vehicleCheckIn(plateNumber, () => {
            setPlateNumber('');
          })}
        >
          Registra entrada
        </Button>
        <Button
          size='xl'
          onClick={vehicleCheckOut(plateNumber, () => {
            setPlateNumber('');
          })}
        >
          Registra salida
        </Button>
      </Flex>
    </>
  );
};
