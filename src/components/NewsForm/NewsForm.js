import React, { useState } from 'react';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import Textarea from '../ui/Textarea/Textarea';
import './NewsForm.scss';

function NewsForm({onNewsAdd, closePopup}) {

  const [title, setTitle] = useState('');
  const [newsText, setNewsText] = useState('');

  const onTitleChange = (title) => {
    setTitle(title);
  };

  const onNewsTextChange = (text) => {
    setNewsText(text);
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const addNewsHandler = (e) => {
    e.preventDefault();
    const newsItem = {
      date: Date.now(),
      _id: generateId(),
      author: {
        login: 'vasya',
        _id: 423434,
      },
      title: title,
      text: newsText,
      approved: false
    };
    onNewsAdd(newsItem);
    closePopup();
    setTitle('');
    setNewsText('');
  }

  return (
    <form className="news-form" onSubmit={addNewsHandler}>
      <Input
        value={title}
        inputId="title"
        labelText="Введите заголовок новости"
        inputType="text"
        inputName="title"
        placeholder="Заголовок"
        isRequired={true}
        onChange={onTitleChange}
      />
      <Textarea
        value={newsText}
        textareaId="newsText"
        labelText="Введите текст новости"
        textareaName="newsText"
        placeholder="Новость"
        isRequired={true}
        onChange={onNewsTextChange}
      />
      <Button text="Добавить" type="submit" view="form" disabled={!title || !newsText} />
    </form>
  );
}

export default NewsForm;
