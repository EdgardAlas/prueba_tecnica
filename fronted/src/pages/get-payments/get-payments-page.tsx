import { Button, Flex, Select, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { config } from '../../config/config';
import { api } from '../../config/api';
import { useForm } from '@mantine/form';

export const GetPaymentsPage = () => {
  const [vehicleTypes, setVehicleTypes] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);

  useEffect(() => {
    api.get('/vehicle-entry/payment/to-select').then((response) => {
      setVehicleTypes(response.data);
    });
  }, []);

  const form = useForm({
    initialValues: {
      vehicleType: '',
      filename: '',
    },
  });

  return (
    <div>
      <Flex align={'end'} gap={'xl'}>
        <Select
          size='xl'
          data={vehicleTypes}
          label='Tipo de vehiculo'
          searchable
          nothingFound={'No se encontraron resultados'}
          defaultValue={config.residental as unknown as string}
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
      </Flex>
    </div>
  );
};
