import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import { App } from './App';

import AuthPage from './AuthPage/AuthPage.js';
import DashboardPage from './DashboardPage/DashboardPage.js';

const router = createBrowserRouter([
  { path: '/auth', element: <AuthPage /> },
  { path: '/', element: <DashboardPage /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);