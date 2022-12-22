import React, { useState } from 'react';
import './styles.scss';
import { NavigationItem } from '@atoms';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mainHeader__nav">
      <ul
        className={`mainHeader__list ${
          isMenuOpen && 'mainHeader__list--active'
        }`}
        aria-expanded={isMenuOpen}
      >
        <NavigationItem title="Home" />
        <NavigationItem title="About Us" />
        <NavigationItem title="Contact" />
        <NavigationItem title="Settings" />
      </ul>
      <button className="mainHeader__toggle" onClick={onToggleHandler}>
        <img src="/assets/img/Toggle.svg" alt="toggle menu" />
      </button>
    </nav>
  );
};

export default Navigation;
