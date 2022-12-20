import React from 'react';
import './styles.scss';
import Navigation from '../../molecules/Navigation';

const Header = () => {
  return (
    <header className="mainHeader">
      <div className="mainHeader__container">
        <h2 className="mainHeader__logo">Aphasia App</h2>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
