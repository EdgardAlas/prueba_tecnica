import { MenuItems } from '../types/menu.types';
import { BsArrowBarUp, BsArrowBarDown } from 'react-icons/bs';

export const menu: MenuItems = [
  {
    icon: BsArrowBarUp,
    label: 'Registar entrada y salidas',
    to: '/',
  },
  {
    icon: BsArrowBarUp,
    label: 'Dar de alta vehiculos oficiales',
    to: '/oficial',
  },
  {
    icon: BsArrowBarUp,
    label: 'Dar de alta vehiculos residentes',
    to: '/residential',
  },
];
