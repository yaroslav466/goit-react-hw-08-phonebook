import { Suspense, lazy, useEffect } from 'react';
import {  Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { refreshThunk } from '../redux/auth/auth.reducer';
import { useDispatch } from 'react-redux';
import * as ROUTES from 'constants/routes';
import { Loader } from './Loader/Loader';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const LoginPage = lazy(() => import('../pages/FormPages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/FormPages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const appRoutes = [
  { path: ROUTES.HOME_ROUTE, element: <HomePage /> },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};