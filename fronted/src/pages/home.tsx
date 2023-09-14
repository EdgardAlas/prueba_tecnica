import { useVehicleEntries } from '../hooks/useVehicleEntries';
import { useEffect } from 'react';
import { Table } from '@mantine/core';
import { formatDate } from '../helpers/format-date';

export const HomePage = () => {
  const { data, getAllEntries } = useVehicleEntries();

  useEffect(() => {
    getAllEntries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Table striped highlightOnHover withBorder>
        <thead>
          <tr>
            <th>No. Placa</th>
            <th>Tipo de vehiculo</th>
            <th>Fecha de entrada</th>
            <th>Fecha de salida</th>
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
              <td>
                {formatDate(entry.check_in_time).format('MMMM D, YYYY h:mm A')}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
