import { GenericChangeVehicleType } from '../../components/GenericChangeVehicleType';
import { config } from '../../config/config';

export const AddOficialVehiclespage = () => {
  return (
    <GenericChangeVehicleType
      vehicleType={config.oficialId}
      vehicleTypeId={config.oficial}
    />
  );
};
