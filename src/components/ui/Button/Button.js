import React from 'react';
import './Button.scss';

function Button({text, type, view, disabled = false, onClick}) {
  return (
    <button 
      className={`button ` + (view ? `button_${view}` : '')} 
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;