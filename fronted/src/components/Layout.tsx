import { MantineProvider } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Outlet />
    </MantineProvider>
  );
};
