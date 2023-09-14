import { Navbar as MantineNavbar, NavLink } from '@mantine/core';
import { Link } from 'react-router-dom';
import { menu } from '../../config/menu';

interface Props {
  opened: boolean;
}

export const Navbar = ({ opened }: Props) => {
  return (
    <MantineNavbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      {menu.map(({ icon: Icon, ...item }) => (
        <NavLink key={item.label} component={Link} icon={<Icon />} {...item} />
      ))}
    </MantineNavbar>
  );
};
