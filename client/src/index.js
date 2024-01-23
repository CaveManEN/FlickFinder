import React from 'react';
import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import './App.css';
import App from './App';
import Error from './pages/Error';
import Results from './components/Results';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';

// store routes in router const
const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'results',
        element: <Results />
      },
      // {
      //   path: '/movie:movieId',
      //   element: <Movie />
      // }
    ]
  }
])

// create root element using RouterProvider and our routes defined in router const
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();