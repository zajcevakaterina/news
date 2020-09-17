import { NEWS_ADD } from "./actionTypes"

export function addNews(updatedNews) {
  return {
    type: NEWS_ADD,
    news: updatedNews
  }
}