import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__menu-item">
          <NavLink to="/" exact className="nav__link" activeClassName="nav__link_active">Главная</NavLink>
        </li>
        <li className="nav__menu-item">
          <NavLink to="/news" className="nav__link" activeClassName="nav__link_active">Новости</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
