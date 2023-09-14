import { useVehicleEntries } from '../hooks/useVehicleEntries';
import { useEffect } from 'react';
import { Table } from '@mantine/core';

export const HomePage = () => {
  const { data, getAllEntries } = useVehicleEntries();

  useEffect(() => {
    getAllEntries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>No. Placa</th>
            <th>Fecha de entrada</th>
            <th>Fecha de salida</th>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.plate_number}</td>
              <td>{entry.check_in_time}</td>
              <td>{entry.check_out_time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
