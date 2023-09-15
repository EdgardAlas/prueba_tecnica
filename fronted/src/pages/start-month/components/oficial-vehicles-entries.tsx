import { Pagination, Table, Text } from '@mantine/core';
import { useEffect } from 'react';
import { formatDate } from '../../../helpers/format-date';
import { useGetOficialEntries } from '../hooks/use-get-oficial-entries-tsx';

export const OficialVehicleEntries = () => {
  const { data, getAllOficialEntries, loading } = useGetOficialEntries();

  useEffect(() => {
    getAllOficialEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Table striped highlightOnHover withBorder captionSide='top'>
        <caption>Vehiculos oficiales que entraron en el mes</caption>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Tipo de vehiculo</th>
            <th>Hora de entrada</th>
            <th>Hora de salida</th>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.vehicle_type}</td>
              <td>{entry.vehicle_type}</td>
              <td>
                {formatDate(entry.check_in_time).format('MMMM D, YYYY h:mm A')}
              </td>
              <td>
                {entry.check_out_time
                  ? formatDate(entry.check_out_time).format(
                      'MMMM D, YYYY h:mm A'
                    )
                  : 'No ha salido'}
              </td>
            </tr>
          ))}
          {data.data?.length === 0 ? (
            <tr>
              <td colSpan={4}>
                <Text align='center'>No hay vehiculos estacionados</Text>
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>

      <Pagination
        total={data.last_page}
        onChange={(page) => getAllOficialEntries(page)}
        disabled={loading}
      />
    </>
  );
};
