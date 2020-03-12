import React from 'react';
import { LayoutWrapper, PageWrapper } from './styles';
import Menu from '../Menu/Menu';
import Dashboard from '../Dashboard/Dashboard';
import Detail from '../Detail/Detail';

export const Layout = () => (
    <LayoutWrapper>
      <Menu />
      <Dashboard />
      <Detail />
    </LayoutWrapper>
  );