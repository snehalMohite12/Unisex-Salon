import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   login(username: string, password: string): boolean {

    if (
      (username === 'owner' || username === 'employee') &&
      password === '1234'
    ) {

      localStorage.setItem('token', 'demo-token');

      localStorage.setItem('role',
        username === 'owner' ? 'OWNER' : 'EMPLOYEE');

      return true;
    }

    return false;

  }

   logout() {

    localStorage.removeItem('token');
    localStorage.removeItem('role');

  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem('token');

  }

  getRole(): string {

    return localStorage.getItem('role') ?? '';

  }
}
