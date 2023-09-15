import { useContext } from 'react';
import { GetPaymentsContext } from '../context/get-payments-context-context';

export const useGetPaymentContext = () => {
  return useContext(GetPaymentsContext);
};
