import React from 'react';
import { LayoutWrapper, PageWrapper } from './styles';
import Menu from '../Menu/Menu';

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Menu />
    <PageWrapper>{children}</PageWrapper>
  </LayoutWrapper>
);

export default Layout;
