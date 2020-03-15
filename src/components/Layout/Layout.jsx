import React from 'react';
import { LayoutWrapper, PageWrapper } from './styles';
import Menu from '../Menu/Menu';
import Dashboard from '../Dashboard/Dashboard';

export const Layout = () => (
    <LayoutWrapper>
      <Menu />
      <Dashboard />
    </LayoutWrapper>
  );