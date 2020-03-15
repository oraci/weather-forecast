import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoLinx from '../../assets/logo.png';
import HomeImage from '../../assets/home.png';

import { Container, Content, Logo, Home, DateTime } from './styles';

export default function sidenav() {
  return (
    <Container>
      <Content>
        <Logo src={LogoLinx} alt="Logo Linx" />
        <NavLink exact to={"/weather"}>
          <Home src={HomeImage} alt="Home Button" />
        </NavLink>
        <DateTime>
          <label>08/12</label>
          <label className='label-date'>12:40PM</label>
        </DateTime> 
      </Content>
    </Container>
  );
}