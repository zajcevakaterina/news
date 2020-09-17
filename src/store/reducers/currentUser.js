import { DELETE_CURRENT_USER, SET_CURRENT_USER } from '../actions/actionTypes'

const initialState = {
  currentUser: null
}

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }

    case DELETE_CURRENT_USER:
      return {
        ...state,
        currentUser: null
      }

    default:
      return state
  }
}
