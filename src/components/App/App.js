import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Popup from '../ui/Popup/Popup';
import AuthForm from '../AuthForm/AuthForm';
import { connect } from 'react-redux';
import { deleteCurrentUser, setCurrentUser } from '../../store/actions/currentUser';
import { userLocalService } from '../../utils/localServices/userLocalService';

function App({ currentUser, setCurrentUser, deleteCurrentUser, news, addNews }) {

  const [authPopupIsOpened, setAuthPopupIsOpened] = useState(false);

  const openAuthPopup = () => {
    setAuthPopupIsOpened(true);
  }

  const closeAuthPopup = () => {
    setAuthPopupIsOpened(false);
  }

  const currentUserSaveHandler = (user) => {
    setCurrentUser(user);
    userLocalService.saveLocalUser(user);
  }

  const currentUserDeleteHandler = () => {
    deleteCurrentUser();
    userLocalService.deleteLocalUser();
  }

  useEffect(() => {
    const userFromLocalStorage = userLocalService.getLocalUser();
    setCurrentUser(userFromLocalStorage);
  }, [])

  return (
    <div className="app">
      <Header
        additionalClassName="app__section"
        openPopup={openAuthPopup}
        currentUser={currentUser}
        deleteCurrentUser={currentUserDeleteHandler} />
      <Main additionalClassName="app__section" />
      <Popup
        isOpened={authPopupIsOpened}
        title="Добро пожаловать"
        onClose={closeAuthPopup}>
        <AuthForm closePopup={closeAuthPopup} setUser={(user) => currentUserSaveHandler(user)}></AuthForm>
      </Popup>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (existingUser) => dispatch(setCurrentUser(existingUser)),
    deleteCurrentUser: () => dispatch(deleteCurrentUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
