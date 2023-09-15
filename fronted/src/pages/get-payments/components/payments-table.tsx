import { Pagination, Table, Text } from '@mantine/core';
import { useGetPaymentActions } from '../hooks/use-get-payment-actions';
import { useGetPaymentContext } from '../hooks/use-get-payments-context';

export const PaymentsTabel = () => {
  const { payments, getPaymentsByVehicleType } = useGetPaymentActions();
  const { form } = useGetPaymentContext();

  return (
    <>
      <Table striped highlightOnHover withBorder captionSide='top'>
        <caption>Vehiculos</caption>
        <thead>
          <tr>
            <th>No. Placa</th>
            <th>Minutos acumulados</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {payments.data?.map((entry) => (
            <tr key={entry.plate_number}>
              <td>{entry.plate_number}</td>
              <td>{entry.accumulated_minutes}</td>
              <td>{entry.payment}</td>
            </tr>
          ))}
          {payments.data?.length === 0 ? (
            <tr>
              <td colSpan={3}>
                <Text align='center'>No hay vehiculos estacionados</Text>
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>

      <Pagination
        total={payments.last_page}
        onChange={(page) =>
          getPaymentsByVehicleType(form.values.vehicleType, page)
        }
        // disabled={loading}
      />
    </>
  );
};
