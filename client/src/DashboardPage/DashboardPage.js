import React from 'react';
import { Nav } from './Nav';
import { Content } from './Content';
import { Sidebar } from './Sidebar';
import './dashboardPage.css';

export const DashboardPage = () => {
  return <div className='dashboard-container'>
    <Nav />
    <Sidebar />
    <Content />
  </div>
}

