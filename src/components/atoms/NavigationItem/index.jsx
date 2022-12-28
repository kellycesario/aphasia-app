import React from 'react';
//import './styles.scss';

const NavigationItem = ({ title, to }) => {
  return (
    <a href={to} className="mainHeader__item">
      <li>{title}</li>
    </a>
  );
};

export default NavigationItem;
