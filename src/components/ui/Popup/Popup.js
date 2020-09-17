import React, { Children } from 'react';
import './Popup.scss';

function Popup( {children, onClose, title, isOpened} ) {

  const onOverlayClick = (e) => {
    if (e.target.classList.contains('popup_opened')) {
      onClose();
      return;
    }
    return;
  }
  return (
    <div className={`popup ` + (isOpened ? 'popup_opened' : '')} onClick={onOverlayClick}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button type="button" className="popup__close-button" onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
