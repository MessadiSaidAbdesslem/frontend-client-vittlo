import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import Tracking from './pages/Tracking.tsx';
import { ThemeProvider } from '@material-tailwind/react';
import NotFound from './pages/NotFound.tsx';
import Contact from './pages/Contact.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/tracking',
        element: <Tracking />,
      },
      {
        path: '/contact-us',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
