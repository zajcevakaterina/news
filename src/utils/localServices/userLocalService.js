class UserLocalService { // методы для сохранения, удаления и получения данных о пользователе, чтобы были доступны после обновления страницы 
  saveLocalUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getLocalUser() {
    const retrievedUser = localStorage.getItem('user');
    return JSON.parse(retrievedUser);
  }

  deleteLocalUser() {
    localStorage.removeItem('user');
  }
}

export const userLocalService = new UserLocalService();
