import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { AddOficialVehiclespage } from '../pages/add-oficial-vehicles/add-oficial-vehicles-page';
import { ChangeVehicleTypesPage } from '../pages/change-vehicle-types/change-vehicle-types';
import { HomePage } from '../pages/home/home-page';
import { NotFoundPage } from '../pages/not-found';
import { AddResidentialVehiclesPage } from '../pages/residential/add-residential-vehicles-page';
import { GetPaymentsPage } from '../pages/get-payments/get-payments-page';
import { StartMonthPage } from '../pages/start-month/start-month-page';
import { VehicleTypesPage } from '../pages/vehicle-types/vehicle-types-page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<HomePage />} />
      <Route path='oficial' element={<AddOficialVehiclespage />} />
      <Route path='residential' element={<AddResidentialVehiclesPage />} />
      <Route path='change-vehicle-types' element={<ChangeVehicleTypesPage />} />
      <Route path='residential-payments' element={<GetPaymentsPage />} />
      <Route path='start-month' element={<StartMonthPage />} />
      <Route path='vehicle-types' element={<VehicleTypesPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);
