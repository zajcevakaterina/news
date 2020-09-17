import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from '../ui/PageHeading/PageHeading';
import './Article.scss';


function Article({ news }) {

  const { id } = useParams();
  const currentNews = news.find(newsItem => newsItem._id === id);

  return (
    <>
      { currentNews &&
        <article className="article">
          <div className="article__info">
            <PageHeading text={currentNews.title} />
          </div>
          <p className="article__text">{currentNews.text}</p>
        </article>}
    </>
  );
}

export default Article