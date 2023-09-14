import { GenericChangeVehicleType } from '../../components/GenericChangeVehicleType';
import { config } from '../../config/config';

export const AddResidentialVehiclesPage = () => {
  return (
    <GenericChangeVehicleType
      vehicleType={config.residentalId}
      vehicleTypeId={config.residental}
    />
  );
};
