import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const NavigationItem = ({ title, to }) => {
  return (
    <Link to={to} className="mainHeader__item">
      <li>{title}</li>
    </Link>
  );
};

export default NavigationItem;
