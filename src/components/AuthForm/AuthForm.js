import React, { useState } from 'react';
import './AuthForm.scss';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import { authService } from '../../utils/authService';


function AuthForm({ setUser, closePopup }) {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isUserIncorrect, setIsUserIncorrect] = useState(false);

  const onLoginChange = (login) => {
    setLogin(login);
    setIsUserIncorrect(false);
  };

  const onPasswordChange = (password) => {
    setPassword(password);
    setIsUserIncorrect(false);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const currentUser = {
      login: login,
      password: password
    };

    authService.findUser(currentUser)
      .then(result => {
        setUser(result);
        closePopup();
        setLogin('');
        setPassword('');
      })
      .catch(error => {
        setIsUserIncorrect(true);
      })
  }

  return (
    <form className="auth-form" onSubmit={loginHandler}>
      <Input
        inputId="login"
        labelText="Введите логин"
        inputType="text"
        inputName="login"
        placeholder="Ваш логин"
        isRequired={true}
        onChange={onLoginChange}
        value={login}
      />
      <Input
        inputId="password"
        labelText="Введите пароль"
        inputType="password"
        inputName="password"
        placeholder="Ваш пароль"
        isRequired={true}
        onChange={onPasswordChange}
        value={password}
      />
      <p className="auth-form__error">{isUserIncorrect && 'Неправильное имя пользователя или пароль'}</p>

      <Button text="Войти" type="submit" view="form" disabled={!login || !password || isUserIncorrect} />
    </form>
  );
}

export default AuthForm;
