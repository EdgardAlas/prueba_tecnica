import { useContext } from 'react';
import { HomePageContext } from '../context/home-page.context';

export const useHomePageContext = () => {
  return useContext(HomePageContext);
};
