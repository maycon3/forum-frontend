import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable()
export class TokenService {

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY,token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  removeToken(): void {
    window.localStorage.removeItem(KEY);
  }
}
