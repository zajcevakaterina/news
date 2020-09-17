import React, { useEffect } from 'react';
import './Main.scss';
import { Route, Switch } from 'react-router-dom';
import Greeting from '../Greeting/Greeting';
import NewsPage from '../NewsPage/NewsPage';
import Error from '../ui/Error/Error'
import Article from '../Article/Article'
import { addNews } from '../../store/actions/news';
import { connect } from 'react-redux';
import { newsLocalService } from '../../utils/localServices/newsLocalService';
import { newsService } from '../../utils/newsService';

function Main({ additionalClassName, news, addNews }) {

  const addNewsHandler = (newsItem) => {
    newsLocalService.saveLocalNewsItem(newsItem);
    newsService.setNews()
      .then(updatedNews => {
        addNews(updatedNews)
      })
  }

  const approveCard = (cardId) => {
    newsLocalService.approveNews(cardId);
    newsService.setNews()
    .then(updatedNews => {
      addNews(updatedNews)
    })
  }

  const deleteCard = (cardId) => {
    newsLocalService.deleteNews(cardId);
    newsService.setNews()
    .then(updatedNews => {
      addNews(updatedNews)
    })
  }

  useEffect(() => {
    newsService.setNews()
      .then(news => {
        addNews(news)
      })
  }, [])

  return (
    <main className={`main ${additionalClassName}`}>
      <Switch>
        <Route path="/news/:id">
          <Article news={news} />
        </Route>
        <Route path="/news">
          <NewsPage 
            news={news} 
            addNews={addNewsHandler} 
            approveCard={approveCard} 
            deleteCard={deleteCard} 
            />
        </Route>
        <Route path="/" exact>
          <Greeting />
        </Route>
        <Route path="*" exact>
          <Error text="Ошибка 404. Страница не найдена" />
        </Route>
      </Switch>

    </main>
  );
}

function mapStateToProps(state) {
  return {
    news: state.news.news,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNews: (newsItem) => dispatch(addNews(newsItem)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);