import React from 'react';

import './shared.scss';

const Label = ({ htmlFor, variant, children }) => {
  return (
    <label htmlFor={htmlFor} className={['label', variant].join(' ')}>
      {children}
    </label>
  );
};

export default Label;
