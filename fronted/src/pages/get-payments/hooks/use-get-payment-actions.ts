import { api } from '../../../config/api';
import { useGetPaymentContext } from './use-get-payments-context';

export const useGetPaymentActions = () => {
  const { payments, setPayments, setVehicleTypes, vehicleTypes } =
    useGetPaymentContext();

  const getVehicleTypes = () => {
    api
      .get('/vehicle-entry/payment/to-select')
      .then((response) => {
        setVehicleTypes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPaymentsByVehicleType = (vehicleType: string, page = 1) => {
    api
      .get(`/vehicle-entry/payments/list/${vehicleType}`, {
        params: {
          page,
        },
      })
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    payments,
    setPayments,
    vehicleTypes,
    setVehicleTypes,
    getVehicleTypes,
    getPaymentsByVehicleType,
  };
};
