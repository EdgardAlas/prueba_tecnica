import { Button, Flex, Pagination, Table, TextInput } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { formatDate } from '../helpers/format-date';
import { useVehicleCheckIn as useVehicleChekInOut } from '../hooks/useVehicleCheckIn';
import { useVehicleEntries } from '../hooks/useVehicleEntries';

export const HomePage = () => {
  const { data, getAllEntries, loading } = useVehicleEntries();
  const { vehicleCheckIn, vehicleCheckOut } = useVehicleChekInOut();
  const [plateNumber, setPlateNumber] = useState('');

  useEffect(() => {
    getAllEntries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex direction={'column'} gap={'2rem'}>
      <TextInput
        label={'Placa'}
        placeholder={'Ingrese la placa del vehiculo'}
        size='xl'
        defaultValue={plateNumber}
        onChange={(event) => setPlateNumber(event.currentTarget.value)}
      />

      <Flex gap={'lg'} justify={'center'}>
        <Button
          size='xl'
          onClick={async () => {
            try {
              await vehicleCheckIn(plateNumber);
              notifications.show({
                title: 'Registro de entrada',
                message: 'Se ha registrado la entrada del vehiculo',
                color: 'teal',
              });
              getAllEntries();
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Registra entrada
        </Button>
        <Button
          size='xl'
          onClick={async () => {
            try {
              await vehicleCheckOut(plateNumber);
              notifications.show({
                title: 'Registro de entrada',
                message: 'Se ha registrado la salida del vehiculo',
                color: 'teal',
              });
              getAllEntries();
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Registra salida
        </Button>
      </Flex>
      <Table striped highlightOnHover withBorder captionSide='top'>
        <caption>Vehiculos estacionados</caption>
        <thead>
          <tr>
            <th>No. Placa</th>
            <th>Tipo de vehiculo</th>
            <th>Fecha de entrada</th>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.plate_number}</td>
              <td>{entry.vehicle_type}</td>
              <td>
                {formatDate(entry.check_in_time).format('MMMM D, YYYY h:mm A')}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination
        total={data.last_page}
        onChange={(page) => getAllEntries(page)}
        disabled={loading}
      />
    </Flex>
  );
};
