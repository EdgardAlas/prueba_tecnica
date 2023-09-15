import { GenericChangeVehicleType } from '../../components/generic-change-vehicle-type';
import { config } from '../../config/config';

export const AddResidentialVehiclesPage = () => {
  return (
    <GenericChangeVehicleType
      vehicleType={config.residentalId}
      vehicleTypeId={config.residental}
    />
  );
};
