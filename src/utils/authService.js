import { users } from './users';

class AuthService { //имитация поиска юзера на бэкэнде и ответа оттуда
  findUser(currentUser) {
    for (let user of users) {
      if (user.login === currentUser.login && user.password === currentUser.password) {
        return Promise.resolve({ ...user, isLoggedIn: true })
      }
    }
    return Promise.reject(null);
  }
}

export const authService = new AuthService();
