import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage.jsx';
import './app.css';
import { RouteNotFound } from './components/RouteNotFound.jsx';
import { MoviesPage } from './pages/MoviesPage.jsx';
import { FavoritesPage } from './pages/FavoritesPage.jsx';
import { SignUpPage } from './pages/SingUpPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { Layout } from './components/Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteNotFound />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'movies',
        element: <MoviesPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
