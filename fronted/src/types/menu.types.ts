import { IconType } from 'react-icons';

export interface MenuItem {
  label: string;
  icon: IconType;
  to: string;
}

export type MenuItems = MenuItem[];
