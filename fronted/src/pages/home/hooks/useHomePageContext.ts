import { useContext } from 'react';
import { HomePageContext } from '../context/HomePageContext.context';

export const useHomePageContext = () => {
  return useContext(HomePageContext);
};
