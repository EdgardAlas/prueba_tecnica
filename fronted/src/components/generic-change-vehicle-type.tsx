import {
  Button,
  Flex,
  Pagination,
  Table,
  Text,
  TextInput,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { api } from '../config/api';
import { EmptyPagination, PaginationResponse } from '../types/pagination.types';

interface Props {
  vehicleType: string;
  vehicleTypeId: number;
}

export const GenericChangeVehicleType = ({
  vehicleType,
  vehicleTypeId,
}: Props) => {
  const [plateNumber, setPlateNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<
    PaginationResponse<{
      id: number;
      plate_number: string;
    }>
  >(EmptyPagination);

  const getVehicles = (page = 1) => {
    setLoading(true);
    api
      .get('/vehicles', {
        params: {
          vehicle_type: vehicleType,
          page,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateVehicle = (plateNumber: string) => {
    api
      .patch(`/vehicles/change-vehicle-type/${plateNumber}`, {
        vehicle_type: vehicleTypeId,
      })
      .then(() => {
        notifications.show({
          title: `Vehiculo ${vehicleType} agregado`,
          message: `El vehiculo con placa ${plateNumber} ha sido agregado`,
          color: 'teal',
        });
        getVehicles();
        setPlateNumber('');
      })
      .catch(() => {
        notifications.show({
          title: `Error`,
          message: `El vehiculo con placa ${plateNumber} no ha sido agregado`,
          color: 'red',
        });
      });
  };

  useEffect(() => {
    getVehicles();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setOficialVehicle = () => {
    updateVehicle(plateNumber);
  };

  const handlePlateNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlateNumber(event.currentTarget.value);
  };

  return (
    <Flex direction={'column'} gap={'2rem'}>
      <Flex
        align={{
          base: 'stretch',
          md: 'end',
        }}
        gap={'sm'}
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <TextInput
          label={'Placa'}
          sx={{
            flex: 1,
          }}
          placeholder={'Ingrese la placa del vehiculo'}
          size='xl'
          value={plateNumber}
          onChange={handlePlateNumberChange}
        />

        <Flex gap={'lg'} justify={'center'}>
          <Button size='xl' onClick={setOficialVehicle}>
            Alta vehiculo {vehicleType?.toLocaleLowerCase()}
          </Button>
        </Flex>
      </Flex>

      <Table striped highlightOnHover withBorder captionSide='top'>
        <caption>Vehiculos {vehicleType}</caption>
        <thead>
          <tr>
            <th>No. Placa</th>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.plate_number}</td>
            </tr>
          ))}
          {data.data?.length === 0 ? (
            <tr>
              <td colSpan={3}>
                <Text align='center'>No hay vehiculos estacionados</Text>
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>

      <Pagination
        total={data.last_page}
        onChange={(page) => getVehicles(page)}
        disabled={loading}
      />
    </Flex>
  );
};
