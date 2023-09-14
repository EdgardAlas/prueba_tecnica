import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '../components/Layout';
import { HomePage } from '../pages/home';
import { NotFoundPage } from '../pages/not-found';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);
