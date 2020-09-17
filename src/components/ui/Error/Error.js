import React from 'react';
import './Error.scss';

function Error({text}) {

  return (
  <p className="error">{text}</p>
  );
}

export default Error;