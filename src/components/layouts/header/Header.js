import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './Header.scss';
import HeaderCourosel from './HeaderCourosel';
import NavBar from './NavBar';

const Header = () => (
  <BrowserRouter>
    <div className="header-container">
      <NavBar />
      <HeaderCourosel />
    </div>
  </BrowserRouter>
);

export default Header;
