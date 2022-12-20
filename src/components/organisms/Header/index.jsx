import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <header className="mainHeader">
      <div className="mainHeader__container">
        <h2 className="mainHeader__logo">Aphasia App</h2>
        <nav className="mainHeader__nav">
          <ul
            className="mainHeader__list mainHeader__list--active"
            aria-expanded="false"
          >
            <li className="mainHeader__item">Home</li>
            <li className="mainHeader__item">About Us</li>
            <li className="mainHeader__item">Contact</li>
            <li className="mainHeader__item">Settings</li>
          </ul>
          <button className="mainHeader__toggle">
            <img src="/assets/img/Toggle.svg" alt="toggle menu" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
