import { MantineProvider, Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Box component='main' p={'xl'}>
        <Outlet />
      </Box>
    </MantineProvider>
  );
};
