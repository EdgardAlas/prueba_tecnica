import { AppShell, Box, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar';
import { Header } from './header';

export const Layout = () => {
  const [opened, setOpened] = useState(false);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications position='top-right' />
      <Box component='main' p={'xl'} maw={1920} mx={'auto'}>
        <AppShell
          navbarOffsetBreakpoint='sm'
          asideOffsetBreakpoint='sm'
          navbar={<Navbar opened={opened} />}
          header={<Header opened={opened} setOpened={setOpened} />}
        >
          <Outlet />
        </AppShell>
      </Box>
    </MantineProvider>
  );
};
