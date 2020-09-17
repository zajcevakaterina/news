import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import PageHeading from '../ui/PageHeading/PageHeading';
import Popup from '../ui/Popup/Popup';
import NewsForm from '../NewsForm/NewsForm'
import './NewsPage.scss';
import { connect } from 'react-redux';


function NewsPage({news, addNews, approveCard, deleteCard, currentUser}) {

  const [query, setQuery] = useState('');
  const [newsPopupIsOpened, setNewsPopupIsOpened] = useState(false);

  const openNewsPopup = () => {
    setNewsPopupIsOpened(true);
  }

  const closeNewsPopup = () => {
    setNewsPopupIsOpened(false);
  }

  const onSearch = (query) => {
    setQuery(query);
  }

  const onNewsAdd = (newsItem) => {
    addNews(newsItem)
  }

  return (
    <div className="news-page">
      <div className="news-page__heading">
        <PageHeading text="Текущие новости" />
        {currentUser && !currentUser.isAdmin && <Button text="Добавить новость" type="button" onClick={openNewsPopup}/>}
      </div>
      <Input
        placeholder="Найти..."
        type="text"
        view="search"
        onChange={onSearch}
        value={query}
      />
      <Cards query={query} news={news} approveCard={approveCard} deleteCard={deleteCard}/>
      <Popup  
        title="Добавьте свою новость"
        isOpened={newsPopupIsOpened}
        onClose={closeNewsPopup}>
       <NewsForm onNewsAdd={onNewsAdd} closePopup={closeNewsPopup}/>
     </Popup>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  }
}

export default connect(mapStateToProps, null)(NewsPage);