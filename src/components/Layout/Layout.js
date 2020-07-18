import React from 'react';
import { LayoutWrapper } from './styles';
import Menu from '../Menu/Menu';
import Dashboard from '../Dashboard/Dashboard';

export const Layout = () => (
    <LayoutWrapper>
      <Menu />
      <Dashboard />
    </LayoutWrapper>
  );