import React from 'react';

import './navBar.scss';
import { Button } from '../shared';

const NavBar = () => {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector('.nav-bar').className = 'nav-bar active';
    } else {
      document.querySelector('.nav-bar').className = 'nav-bar';
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="nav-bar">
      <img
        className="nav-logo"
        src="https://images.squarespace-cdn.com/content/v1/544816bbe4b039987021a843/1415047982653-1931ZPBJEI1H2YE7CZ5R/ke17ZwdGBToddI8pDm48kODEHMGUBRgRRplOmqRomK1Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Rb66VC8y5UmDKESC3gpGyXuuE80dFkeX9PanWgM3V4qRJePadRz66WmX0L5eMAEew/melt_logo.png?format=300w"
        alt="logo"
      />
      <div className="nav-buttons">
        <Button variant="btn-nav headline">HOME</Button>
        <Button variant="btn-nav headline">CULTURE</Button>
        <Button variant="btn-nav headline">LABS</Button>
        <Button variant="btn-nav headline">THOUGHTS</Button>
        <Button variant="btn-nav headline">CONTACT</Button>
        <Button variant="btn-nav headline">WORK</Button>
      </div>
    </div>
  );
};

export default NavBar;
