import { Button, Flex, TextInput } from '@mantine/core';
import { useState } from 'react';
import { config } from '../../config/config';

export const GetPaymentsPage = () => {
  const [fileName, setFileName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  return (
    <div>
      <Flex align={'end'} gap={'xl'}>
        <TextInput
          label='Nombre del archivo'
          placeholder='Nombre del archivo'
          size='xl'
          sx={{
            flex: 1,
          }}
          onChange={handleInputChange}
        />
        <Button
          component='a'
          download
          href={
            config.apiUrl + '/vehicle-entry/payments/1/?filename=' + fileName
          }
          size='xl'
        >
          Descargar pagos
        </Button>
      </Flex>
    </div>
  );
};
