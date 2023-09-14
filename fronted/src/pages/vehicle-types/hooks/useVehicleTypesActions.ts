import { notifications } from '@mantine/notifications';
import { api } from '../../../config/api';
import { VehicleTypes } from '../../../types/vehicles-types.types';
import { useGetAllVehicleTypes } from './useGetAllVehicleTypes';
import { useVehicleTypesContext } from './useVehicleTypesContext';

export const useVehicleTypesActions = () => {
  const { getAllVehicleTypes } = useGetAllVehicleTypes();
  const { setVehiclesType } = useVehicleTypesContext();

  const deleteVehicleType = (id: number) => {
    return () => {
      api
        .delete(`/vehicle-types/${id}`)
        .then(() => {
          getAllVehicleTypes();
          notifications.show({
            title: 'Exito',
            message: 'Tipo de vehiculo eliminado correctamente',
          });
        })
        .catch(() => {
          notifications.show({
            title: 'Error',
            message: 'No se pudo eliminar el tipo de vehiculo',
            color: 'red',
          });
        });
    };
  };

  const update = async (id: number, data: VehicleTypes) => {
    try {
      await api.put(`/vehicle-types/${id}`, data);

      getAllVehicleTypes();
      setVehiclesType(undefined);
      notifications.show({
        title: 'Exito',
        message: 'Tipo de vehiculo actualizado correctamente',
      });
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'No se pudo actualizar el tipo de vehiculo',
        color: 'red',
      });
    }
  };

  const create = async (data: VehicleTypes) => {
    try {
      await api.post(`/vehicle-types`, data);

      getAllVehicleTypes();
      setVehiclesType(undefined);
      notifications.show({
        title: 'Exito',
        message: 'Tipo de vehiculo creado correctamente',
      });
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'No se pudo crear el tipo de vehiculo',
        color: 'red',
      });
    }
  };

  return {
    deleteVehicleType,
    update,
    create,
  };
};
