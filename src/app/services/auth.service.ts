import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged = !!localStorage.getItem('token');
  @Output() userSignIn = new EventEmitter<User>();
  @Output() userSignUp = new EventEmitter<User>();
  @Output() userLogout = new EventEmitter();

  constructor() { }

  isUserLoggedIn() {
    return this.isUserLogged;
  }

  signUp(email: string, password: string) {
    localStorage.setItem('token', email);
    const user = new User();
    user.email = email;
    user.name = 'TEST';
    this.userSignIn.emit(user);
    return true;
  }

  signIn(username: string, email: string, password: string) {
    localStorage.setItem('token', username);
    const user = new User();
    user.email = email;
    user.name = 'username';
    this.userSignUp.emit(user);
    return true;
  }

  logout() {
    this.userLogout.emit();
    localStorage.removeItem('token');
  }
}
