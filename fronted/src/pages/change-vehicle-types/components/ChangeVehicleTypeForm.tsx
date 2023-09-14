import { Button, Flex, Grid, Select, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useEffect, useState } from 'react';
import { api } from '../../../config/api';
import { useChangeVehicleType } from '../hooks/useChangeVehicleType';
import { z } from 'zod';

export const ChangeVehicleTypeForm = () => {
  const [vehicleTypes, setVehicleTypes] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);

  const { changeVehicleType, loading } = useChangeVehicleType();

  const form = useForm({
    initialValues: {
      plate: '',
      vehicleType: '',
    },
    validate: zodResolver(
      z.object({
        plate: z.string().min(1, { message: 'La placa es requerida' }),
        vehicleType: z
          .number()
          .positive({ message: 'El tipo de vehiculo es requerido' }),
      })
    ),
  });

  useEffect(() => {
    api.get('/vehicle-entry/to-select').then((response) => {
      setVehicleTypes(response.data);
    });
  }, []);

  return (
    <form onSubmit={form.onSubmit(changeVehicleType)}>
      <Grid m={0}>
        <Grid.Col md={4} m={0}>
          <TextInput
            label='Placa'
            placeholder='Placa'
            size='xl'
            {...form.getInputProps('plate')}
          />
        </Grid.Col>

        <Grid.Col md={4} m={0}>
          <Select
            size='xl'
            data={vehicleTypes}
            label='Tipo de vehiculo'
            searchable
            nothingFound={'No se encontraron resultados'}
            {...form.getInputProps('vehicleType')}
          />
        </Grid.Col>
        <Grid.Col md={4} m={0}>
          <Flex align='flex-end' h={'100%'}>
            <Button type='submit' loading={loading} size='xl'>
              Cambiar tipo de vehiculo
            </Button>
          </Flex>
        </Grid.Col>
      </Grid>
    </form>
  );
};
