import {
  Button,
  Flex,
  Pagination,
  ScrollArea,
  Table,
  Text,
} from '@mantine/core';
import { useEffect } from 'react';
import { moneyFormat } from '../../../helpers/money-format';
import { useGetAllVehicleTypes } from '../hooks/use-get-all-vehicle-types';
import { useVehicleTypesActions } from '../hooks/use-vehicle-types-actions';
import { useVehicleTypesContext } from '../hooks/use-vehicle-types-context';

export const VehicleTypesTable = () => {
  const { getAllVehicleTypes, loading, vehiclesTypes } =
    useGetAllVehicleTypes();
  const { setVehiclesType } = useVehicleTypesContext();

  const { deleteVehicleType } = useVehicleTypesActions();

  useEffect(() => {
    getAllVehicleTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollArea
        w={{
          base: '75vw',
          xs: '100%',
          sm: '100%',
        }}
      >
        <Table striped highlightOnHover withBorder captionSide='top'>
          <caption>Tipos de vehiculos</caption>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cobro por minuto</th>
              <th>Se cobra al salir</th>
              <th>Tipo por defecto de nuevos vehiculos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {vehiclesTypes.data?.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.vehicle_type}</td>
                <td>{moneyFormat(entry.fee)}</td>
                <td>{entry.pay_on_departure ? 'Si' : 'No'}</td>
                <td>{entry.is_default_type ? 'Si' : 'No'}</td>
                <td>
                  <Flex gap={'sm'}>
                    <Button
                      size='xs'
                      variant='outline'
                      onClick={() => {
                        setVehiclesType({
                          ...entry,
                          is_default_type: entry.is_default_type === 1,
                          pay_on_departure: entry.pay_on_departure === 1,
                        });
                      }}
                    >
                      Editar
                    </Button>

                    <Button
                      size='xs'
                      variant='outline'
                      color='red'
                      onClick={deleteVehicleType(entry.id as number)}
                    >
                      Eliminar
                    </Button>
                  </Flex>
                </td>
              </tr>
            ))}
            {vehiclesTypes.data?.length === 0 ? (
              <tr>
                <td colSpan={3}>
                  <Text align='center'>No hay vehiculos estacionados</Text>
                </td>
              </tr>
            ) : null}
          </tbody>
        </Table>
      </ScrollArea>
      <Pagination
        total={vehiclesTypes.last_page}
        onChange={(page) => getAllVehicleTypes(page)}
        disabled={loading}
      />
    </>
  );
};
