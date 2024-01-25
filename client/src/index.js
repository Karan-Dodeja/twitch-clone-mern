import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import { App } from './App';

import AuthPage from './AuthPage/AuthPage.js';
import DashboardPage from './DashboardPage/DashboardPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/' element={<DashboardPage />} />
      </Routes>
    </App>
  </BrowserRouter>
);