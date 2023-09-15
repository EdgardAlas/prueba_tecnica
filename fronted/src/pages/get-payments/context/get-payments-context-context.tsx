import { createContext, useState } from 'react';
import { EmptyPagination } from '../../../types/pagination.types';
import { PaymentResponse } from '../../../types/payments.types';
import { UseFormReturnType, useForm } from '@mantine/form';

interface GetPaymentsProps {
  payments: PaymentResponse;
  setPayments: React.Dispatch<React.SetStateAction<PaymentResponse>>;
  vehicleTypes: {
    label: string;
    value: string;
  }[];
  setVehicleTypes: React.Dispatch<
    React.SetStateAction<
      {
        label: string;
        value: string;
      }[]
    >
  >;
  form: UseFormReturnType<{
    vehicleType: string;
    filename: string;
  }>;
}

export const GetPaymentsContext = createContext<GetPaymentsProps>({
  payments: EmptyPagination,
  setPayments: () => {},
  vehicleTypes: [],
  setVehicleTypes: () => {},
} as unknown as GetPaymentsProps);

export const GetPaymentsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [payments, setPayments] = useState<PaymentResponse>(EmptyPagination);
  const [vehicleTypes, setVehicleTypes] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);

  const form = useForm({
    initialValues: {
      vehicleType: '',
      filename: '',
    },
  });

  return (
    <GetPaymentsContext.Provider
      value={{
        payments,
        setPayments,
        vehicleTypes,
        setVehicleTypes,
        form,
      }}
    >
      {children}
    </GetPaymentsContext.Provider>
  );
};
