import { Flex } from '@mantine/core';
import { ParkedVehicles } from './components/ParkedVehicles';
import { PlateNumberForm } from './components/PlateNumberForm';
import { HomeContextProvider } from './context/HomePageContext.context';

export const HomePage = () => {
  return (
    <HomeContextProvider>
      <Flex direction={'column'} gap={'2rem'}>
        <PlateNumberForm />
        <ParkedVehicles />
      </Flex>
    </HomeContextProvider>
  );
};
