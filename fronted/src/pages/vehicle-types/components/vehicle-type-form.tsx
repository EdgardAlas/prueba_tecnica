import {
  Button,
  Flex,
  Grid,
  NumberInput,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useEffect } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { z } from 'zod';
import { VehicleTypes } from '../../../types/vehicles-types.types';
import { useVehicleTypesActions } from '../hooks/useVehicleTypesActions';
import { useVehicleTypesContext } from '../hooks/useVehicleTypesContext';

export const VehicleTypeForm = () => {
  const { vehiclesType } = useVehicleTypesContext();

  const { create, update } = useVehicleTypesActions();

  const form = useForm<VehicleTypes>({
    initialValues: {
      vehicle_type: '',
      fee: 0,
      pay_on_departure: 0,
      is_default_type: 0,
    },
    validate: zodResolver(
      z.object({
        vehicle_type: z
          .string()
          .nonempty({ message: 'Este campo es requerido' }),
        fee: z.number().nonnegative({ message: 'Este campo es requerido' }),
        pay_on_departure: z.boolean().or(z.number()),
        is_default_type: z.boolean().or(z.number()),
      })
    ),
  });

  useEffect(() => {
    if (vehiclesType) {
      form.setValues(vehiclesType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehiclesType]);

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        if (form.values.id) {
          await update(form.values.id, values);
          form.reset();
          return;
        }

        await create(values);
        form.reset();
      })}
    >
      <Text>
        {form.values.id ? 'Editar tipo de vehiculo' : 'Nuevo tipo de vehiculo'}
      </Text>
      <Grid>
        <Grid.Col md={6}>
          <TextInput
            label='Nombre'
            placeholder='Nombre'
            required
            {...form.getInputProps('vehicle_type')}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <NumberInput
            icon={<FaDollarSign />}
            precision={2}
            step={0.01}
            label='Cobro por minuto'
            placeholder='Cobro por minuto'
            required
            type='number'
            {...form.getInputProps('fee')}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <Switch
            label='Se cobra al salir'
            {...form.getInputProps('pay_on_departure', {
              type: 'checkbox',
            })}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <Switch
            label='Tipo por defecto de nuevos vehiculos'
            {...form.getInputProps('is_default_type', { type: 'checkbox' })}
          />
        </Grid.Col>
        <Grid.Col md={12}>
          <Flex
            justify={{
              base: 'center',
              md: 'flex-end',
            }}
          >
            <Button type='submit'>{form.values.id ? 'Editar' : 'Crear'}</Button>
          </Flex>
        </Grid.Col>
      </Grid>
    </form>
  );
};
