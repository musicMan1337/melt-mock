import React from 'react';

import './shared.scss';

const Textarea = ({
  name,
  variant,
  rows = 10,
  cols = 50,
  required = false,
}) => {
  return (
    <textarea
      name={name}
      className={['input', variant].join(' ')}
      rows={rows}
      cols={cols}
      required={required}
    />
  );
};

export default Textarea;
