import { Flex } from '@mantine/core';
import { GetPaymentForm } from './components/get-payment-form';
import { PaymentsTabel } from './components/payments-table';
import { GetPaymentsProvider } from './context/get-payments-context-context';

export const GetPaymentsPage = () => {
  return (
    <GetPaymentsProvider>
      <Flex gap={'2rem'} direction={'column'}>
        <GetPaymentForm />
        <PaymentsTabel />
      </Flex>
    </GetPaymentsProvider>
  );
};
