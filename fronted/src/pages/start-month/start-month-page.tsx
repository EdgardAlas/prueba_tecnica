import { Button } from '@mantine/core';
import { api } from '../../config/api';
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';

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
    <div>
      <Button onClick={handleStartMonth} size='xl'>
        Iniciar mes
      </Button>
    </div>
  );
};
