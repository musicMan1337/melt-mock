import React from 'react';

import './shared.scss';

const Button = ({ type = 'button', variant, children }) => {
  return (
    <button type={type} className={['button', variant].join(' ')}>
      {children}
    </button>
  );
};

export default Button;
