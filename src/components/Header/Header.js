import React from 'react';
import './Header.scss';
import Nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button/Button';


function Header({ additionalClassName, openPopup, currentUser, deleteCurrentUser }) {
  return (
    <header className={`header app__section ${additionalClassName}`}>
      <NavLink className="header__logo" to="/">Портал новостей</NavLink>
      <div className="header__nav">
        <Nav />
        <Button
          text={currentUser ? "Выйти" : "Войти"}
          type="button"
          onClick={currentUser ? deleteCurrentUser : openPopup} />
      </div>
    </header>
  );
}

export default Header;
