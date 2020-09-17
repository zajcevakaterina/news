import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.scss';

function Card({ date, title, text, approved, currentUser, id, approveCard, deleteCard }) {

  const history = useHistory();

  const openNewsArticle = (e) => {
    if (!e.target.classList.contains('card__handler')) {
      history.push(`/news/${id}`);
    } 
    return;
  }

  const checkAdminRights = () => {
    if (currentUser)
      return currentUser.isAdmin
  }

  const approveCardHandler = () => {
    approveCard(id);
  }

  const deleteCardHandler = () => {
    deleteCard(id);
  }

  return (
    <div onClick={openNewsArticle} className="card">
      <div className="card__info">
        <p className="card__date">{date}</p>
        <div className="card__handlers">
          {!approved && checkAdminRights()
            && <button
              className="card__handler card__handler_approve"
              onClick={approveCardHandler}
            ></button>
          }
          {checkAdminRights() 
            && <button 
              className="card__handler card__handler_delete" 
              onClick={deleteCardHandler}
              ></button>}
        </div>
      </div>
      <h2 className="card__title">{title}</h2>
      <p className="card__text"> {text} </p>
    </div>
  );
}

export default Card;
