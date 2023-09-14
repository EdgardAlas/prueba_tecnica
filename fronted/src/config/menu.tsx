import { BsArrowBarUp } from 'react-icons/bs';
import { MenuItems } from '../types/menu.types';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';

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
  {
    icon: BsArrowBarUp,
    label: 'Dar de alta vehiclos (general)',
    to: '/change-vehicle-types',
  },
  {
    icon: BiMoneyWithdraw,
    label: 'Pago de residentes',
    to: '/residential-payments',
  },
  {
    icon: AiFillCar,
    label: 'Tipo de vehiculos',
    to: '/vehicle-types',
  },
  {
    icon: MdOutlineCalendarMonth,
    label: 'Iniciar mes',
    to: '/start-month',
  },
];
