import React from 'react';
import './PageHeading.scss';

function PageHeading({ text }) {
  return (
    <h1 className="page-heading">{text}</h1>
  )
}

export default PageHeading;