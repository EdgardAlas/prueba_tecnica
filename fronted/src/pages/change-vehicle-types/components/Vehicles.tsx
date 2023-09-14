import { Pagination, Table, Text } from '@mantine/core';
import { useGetAllVehicles } from '../hooks/useGetAllVehicles';
import { useEffect } from 'react';

export const Vehicles = () => {
  const { getVehicles, loading, vehicles } = useGetAllVehicles();
  useEffect(() => {
    getVehicles('', 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Table striped highlightOnHover withBorder captionSide='top'>
        <caption>Vehiculos</caption>
        <thead>
          <tr>
            <th>No. Placa</th>
            <th>Tipo de vehiculo</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.data?.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.plate_number}</td>
              <td>{entry.vehicle_type}</td>
            </tr>
          ))}
          {vehicles.data?.length === 0 ? (
            <tr>
              <td colSpan={3}>
                <Text align='center'>No hay vehiculos estacionados</Text>
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>

      <Pagination
        total={vehicles.last_page}
        onChange={(page) => getVehicles('', page)}
        disabled={loading}
      />
    </>
  );
};
