import React, { useState } from 'react';
import './styles.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mainHeader">
      <div className="mainHeader__container">
        <h2 className="mainHeader__logo">Aphasia App</h2>
        <nav className="mainHeader__nav">
          <ul
            className={`mainHeader__list ${
              isMenuOpen && 'mainHeader__list--active'
            }`}
            aria-expanded={isMenuOpen}
          >
            <li className="mainHeader__item">Home</li>
            <li className="mainHeader__item">About Us</li>
            <li className="mainHeader__item">Contact</li>
            <li className="mainHeader__item">Settings</li>
          </ul>
          <button className="mainHeader__toggle" onClick={onToggleHandler}>
            <img src="/assets/img/Toggle.svg" alt="toggle menu" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
