import { NEWS_ADD } from "../actions/actionTypes"

const initialState = {
  news: []
}

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case NEWS_ADD:
      return {
        ...state,
        news: action.news
      }

    default:
      return state
  }
}
