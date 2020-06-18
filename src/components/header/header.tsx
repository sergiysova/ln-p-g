import React from 'react';
import './header.scss';
import logo from '../../images/BAMF Blue to Black Hover.png';

const Header:React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
