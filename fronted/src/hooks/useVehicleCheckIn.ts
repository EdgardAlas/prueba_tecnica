import { useCallback, useState } from 'react';
import { api } from '../config/api';
import { notifications } from '@mantine/notifications';

export const useVehicleCheckIn = () => {
  const [loading, setLoading] = useState(false);

  const vehicleCheckIn = useCallback(async (plate_number: string) => {
    try {
      setLoading(true);
      await api.post('/vehicle-entry/check-in', {
        plate_number,
      });
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
  }, []);

  const vehicleCheckOut = useCallback(async (plate_number: string) => {
    try {
      setLoading(true);
      await api.patch(`/vehicle-entry/check-out/${plate_number}`);
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
  }, []);

  return { loading, vehicleCheckIn, vehicleCheckOut };
};
