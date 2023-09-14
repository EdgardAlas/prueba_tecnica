import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { AddOficialVehiclespage } from '../pages/add-oficial-vehicles/AddOficialVehiclespage';
import { HomePage } from '../pages/home/HomePage';
import { NotFoundPage } from '../pages/not-found';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<HomePage />} />
      <Route path='oficial' element={<AddOficialVehiclespage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);
