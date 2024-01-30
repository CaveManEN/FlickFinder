import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App';
import Error from './pages/Error';
import Results from './components/Results';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import CurrentMovie from './components/CurrentMovie';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile'; 
import reportWebVitals from './reportWebVitals';

// store routes in router const
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/results',
        element: <Results />
      },
      {
        path: '/results/:id',
        element: <CurrentMovie />
      },
      {
        path: '/profile',
        element: <Profile /> 
      }
    ]
  }
]);

// create root element using RouterProvider and our routes defined in router const
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

reportWebVitals();
