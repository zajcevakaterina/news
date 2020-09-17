class NewsLocalService { // методы для сохранения, удаления и получения данных о новостях, чтобы были доступны после обновления страницы 
  saveLocalNewsItem(newsToSave) {
    const currentNews = this.getLocalNews();
    if (currentNews && !newsToSave.length) {
      currentNews.push(newsToSave);
      localStorage.setItem('news', JSON.stringify(currentNews))
    } else {
      localStorage.setItem('news', JSON.stringify(newsToSave))
    }
  }

  getLocalNews() {
    const retrievedNews = localStorage.getItem('news');
    return JSON.parse(retrievedNews);
  }

  approveNews(newsId) {
    const currentNews = this.getLocalNews();
    const updatedNews = currentNews.map(news => {
      if (news._id === newsId) {
        return {
          ...news,
          approved: true
        };
      }
      return news;
    })
    this.saveLocalNewsItem(updatedNews);
  }

  deleteNews(newsId) {
    const currentNews = this.getLocalNews();
    const updatedNews = currentNews.filter(news => news._id !== newsId);
    this.saveLocalNewsItem(updatedNews);
  }
}

export const newsLocalService = new NewsLocalService();
