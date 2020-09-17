import { combineReducers } from 'redux'
import newsReducer from './news'
import currentUserReducer from './currentUser'

export default combineReducers({
  currentUser: currentUserReducer,
  news: newsReducer
})