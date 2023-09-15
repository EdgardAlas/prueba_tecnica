import { Pagination, Table, Text } from '@mantine/core';
import { useEffect } from 'react';
import { formatDate } from '../../../helpers/format-date';
import { useVehicleEntries } from '../hooks/use-vehicle-entries';

export const ParkedVehicles = () => {
  const { vehicleEntries, getAllEntries, loading } = useVehicleEntries();

  useEffect(() => {
    getAllEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
          {vehicleEntries.data?.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.plate_number}</td>
              <td>{entry.vehicle_type}</td>
              <td>
                {formatDate(entry.check_in_time).format('MMMM D, YYYY h:mm A')}
              </td>
            </tr>
          ))}
          {vehicleEntries.data?.length === 0 ? (
            <tr>
              <td colSpan={3}>
                <Text align='center'>No hay vehiculos estacionados</Text>
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>

      <Pagination
        total={vehicleEntries.last_page}
        onChange={(page) => getAllEntries(page)}
        disabled={loading}
      />
    </>
  );
};
