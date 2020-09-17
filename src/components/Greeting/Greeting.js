import React from 'react';
import { connect } from 'react-redux';
import './Greeting.scss';

function Greeting({currentUser}) {
  return (
    <h1 className="greeting">
      Привет, {currentUser ? currentUser.login : 'Гость'}!
    </h1>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  }
}

export default connect(mapStateToProps, null)(Greeting);