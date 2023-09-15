import { GenericChangeVehicleType } from '../../components/generic-change-vehicle-type';
import { config } from '../../config/config';

export const AddOficialVehiclespage = () => {
  return (
    <GenericChangeVehicleType
      vehicleType={config.oficialId}
      vehicleTypeId={config.oficial}
    />
  );
};
