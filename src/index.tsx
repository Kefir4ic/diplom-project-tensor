import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Search from './Search';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


/**
 * создание routing для навигации по сайту
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);


/**
 * рендер страниц
 */
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
