import { initialNews } from "./initialNews";
import { newsLocalService } from "./localServices/newsLocalService"

class NewsService { //имитация скачивания новостей с бэкэнда и ответа оттуда
  setNews() {
    const localNews = newsLocalService.getLocalNews();
    if (!localNews) {
      newsLocalService.saveLocalNewsItem(initialNews);
      return Promise.resolve(initialNews)
    } 
    else {
      return Promise.resolve(localNews)
    }
  }
}

export const newsService = new NewsService()