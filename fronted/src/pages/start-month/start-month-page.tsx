import { Button, Flex } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { api } from '../../config/api';
import { OficialVehicleEntries } from './components/oficial-vehicles-entries';

export const StartMonthPage = () => {
  const navigate = useNavigate();

  const handleStartMonth = () => {
    api
      .post('/vehicle-entry/start-month')
      .then(() => {
        notifications.show({
          title: 'Exito',
          message: 'Se inicio el mes correctamente',
          color: 'green',
        });

        navigate('/');
      })
      .catch(() => {
        notifications.show({
          title: 'Error',
          message: 'No se pudo iniciar el mes',
          color: 'red',
        });
      });
  };

  return (
    <Flex gap={'2rem'} direction={'column'}>
      <div>
        <Button onClick={handleStartMonth} size='xl'>
          Iniciar mes
        </Button>
      </div>

      <OficialVehicleEntries />
    </Flex>
  );
};
