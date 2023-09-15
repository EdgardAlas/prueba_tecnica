import { notifications } from '@mantine/notifications';
import { api } from '../../../config/api';
import { useGetAllVehicles } from './use-get-all-vehicles';
import { useState } from 'react';

export const useChangeVehicleType = () => {
  const { getVehicles } = useGetAllVehicles();
  const [loading, setLoading] = useState(false);

  const changeVehicleType = (values: {
    plate: string;
    vehicleType: string;
  }) => {
    setLoading(true);
    api
      .patch(`/vehicles/change-vehicle-type/${values.plate}`, {
        vehicle_type: values.vehicleType,
      })
      .then(() => {
        notifications.show({
          title: 'Vehiculo actualizado',
          message: `El vehiculo con placa ${values.plate} ha sido agregado`,
          color: 'teal',
        });
        getVehicles('', 1);
      })
      .catch(() => {
        notifications.show({
          title: `Error`,
          message: `El vehiculo con placa ${values.plate} no ha sido agregado`,
          color: 'red',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    changeVehicleType,
    loading,
  };
};
