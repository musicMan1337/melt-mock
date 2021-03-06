import React from 'react';

import './shared.scss';

const Input = ({ name, variant, type, required = false }) => {
  return (
    <input
      id={name}
      name={name}
      className={['input', variant].join(' ')}
      type={type}
      required={required}
    />
  );
};

export default Input;
