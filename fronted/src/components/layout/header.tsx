import {
  Burger,
  Header as MantineHeader,
  MediaQuery,
  Text,
} from '@mantine/core';

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ opened, setOpened }: Props) => {
  return (
    <MantineHeader height={{ base: 50, md: 70 }} p='md'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size='sm'
            mr='xl'
          />
        </MediaQuery>

        <Text fw={'bold'}>Prueba técnica - Desarrollador Fullstack</Text>
      </div>
    </MantineHeader>
  );
};
