import { Button, Flex, Select, TextInput } from '@mantine/core';
import { useEffect } from 'react';
import { config } from '../../../config/config';
import { useGetPaymentActions } from '../hooks/use-get-payment-actions';
import { useGetPaymentContext } from '../hooks/use-get-payments-context';

export const GetPaymentForm = () => {
  const { getVehicleTypes, vehicleTypes, getPaymentsByVehicleType } =
    useGetPaymentActions();

  const { form } = useGetPaymentContext();

  useEffect(() => {
    getPaymentsByVehicleType(form.values.vehicleType, 1);
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.values.vehicleType]);

  useEffect(() => {
    getVehicleTypes();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      align={{
        base: 'stretch',
        md: 'end',
      }}
      gap={'xl'}
      direction={{
        base: 'column',
        md: 'row',
      }}
    >
      <Select
        size='xl'
        data={vehicleTypes}
        label='Tipo de vehiculo'
        searchable
        nothingFound={'No se encontraron resultados'}
        {...form.getInputProps('vehicleType')}
      />

      <TextInput
        label='Nombre del archivo'
        placeholder='Nombre del archivo'
        size='xl'
        sx={{
          flex: 1,
        }}
        {...form.getInputProps('filename')}
      />
      {form.values.vehicleType && (
        <Button
          component='a'
          download
          href={
            config.apiUrl +
            `/vehicle-entry/payments/${form.values.vehicleType}/?filename=` +
            form.values.filename
          }
          size='xl'
        >
          Descargar pagos
        </Button>
      )}
    </Flex>
  );
};
