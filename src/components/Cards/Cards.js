import React from 'react';
import { connect } from 'react-redux';
import './Cards.scss';
import Card from '../Card/Card';
import Error from '../ui/Error/Error';
import { getDate } from '../../utils/dateHelpers';

function Cards({ news, currentUser, query, approveCard, deleteCard }) {

  // const searchNews = () => {
  //   if (query) {
  //     return news.filter((newsItem) => {
  //       return newsItem.title.includes(query) || newsItem.text.includes(query)
  //     })
  //   }
  //   return news.filter((newsItem) => {
  //     return newsItem.approved || newsItem.author._id === currentUser._id
  //   });
  // }

  const getNewsToShow = () => {
    let newsToShow;
    if (!currentUser) {
      newsToShow = news.filter((newsItem) => {
        return newsItem.approved
      });
    } else {
      currentUser.isAdmin 
        ? newsToShow = news 
        : newsToShow = news.filter((newsItem) => {
        return newsItem.approved || newsItem.author._id === currentUser._id
      });
    }

    if (query) {
      return newsToShow.filter((newsItem) => {
        return newsItem.title.includes(query) || newsItem.text.includes(query)
      })
    } else {
      return newsToShow;
    }
  }

  const newsToShow = getNewsToShow();

  return (
    <div className="cards">
      {newsToShow.length > 0 ? newsToShow.map((n) => {
        const date = getDate(n.date);
        return (
          <Card
            date={date}
            title={n.title}
            text={n.text}
            key={n._id}
            approved={n.approved}
            currentUser={currentUser}
            id={n._id}
            approveCard={approveCard}
            deleteCard={deleteCard}
          />
        )
      })
        : <Error text="К сожалению, по заданному поиску не найдено ни одной новости" />}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  }
}

export default connect(mapStateToProps, null)(Cards);