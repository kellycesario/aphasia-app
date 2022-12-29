import React from 'react';
import Link from 'next/link';

const NavigationItem = ({ title, to }) => {
  return (
    <Link href={to} className="mainHeader__item">
      <li>{title}</li>
    </Link>
  );
};

export default NavigationItem;
