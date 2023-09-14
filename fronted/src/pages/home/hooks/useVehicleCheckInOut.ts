import { useCallback, useState } from 'react';
import { api } from '../../../config/api';
import { notifications } from '@mantine/notifications';
import { useVehicleEntries } from './useVehicleEntries';

export const useVehicleCheckInOut = () => {
  const [loading, setLoading] = useState(false);
  const { getAllEntries } = useVehicleEntries();

  const vehicleCheckIn = useCallback((plate_number: string) => {
    return async () => {
      try {
        setLoading(true);
        await api.post('/vehicle-entry/check-in', {
          plate_number,
        });
        notifications.show({
          title: 'Registro de entrada',
          message: 'Se ha registrado la entrada del vehiculo',
          color: 'teal',
        });
        getAllEntries();
      } catch (error) {
        notifications.show({
          title: 'Error',
          message: 'No se pudo registrar la entrada del vehículo',
          color: 'red',
        });
        throw error;
      } finally {
        setLoading(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const vehicleCheckOut = useCallback((plate_number: string) => {
    return async () => {
      try {
        setLoading(true);
        await api.patch(`/vehicle-entry/check-out/${plate_number}`);
        notifications.show({
          title: 'Registro de entrada',
          message: 'Se ha registrado la salida del vehiculo',
          color: 'teal',
        });
        getAllEntries();
      } catch (error) {
        notifications.show({
          title: 'Error',
          message: 'No se pudo registrar la salida del vehículo',
          color: 'red',
        });
        throw error;
      } finally {
        setLoading(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, vehicleCheckIn, vehicleCheckOut };
};
