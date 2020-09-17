import { DELETE_CURRENT_USER, SET_CURRENT_USER } from "./actionTypes"

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}

export function deleteCurrentUser() {
  return {
    type: DELETE_CURRENT_USER
  }
}