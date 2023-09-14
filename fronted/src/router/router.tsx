import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { AddOficialVehiclespage } from '../pages/add-oficial-vehicles/AddOficialVehiclespage';
import { ChangeVehicleTypesPage } from '../pages/change-vehicle-types/change-vehicle-types';
import { HomePage } from '../pages/home/HomePage';
import { NotFoundPage } from '../pages/not-found';
import { AddResidentialVehiclesPage } from '../pages/residential/AddResidentialVehiclesPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<HomePage />} />
      <Route path='oficial' element={<AddOficialVehiclespage />} />
      <Route path='residential' element={<AddResidentialVehiclesPage />} />
      <Route path='change-vehicle-types' element={<ChangeVehicleTypesPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);
