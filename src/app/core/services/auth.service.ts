import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable, of, Subscription, pipe } from 'rxjs';
import { take } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly localUserPrefix = 'username';

  private ENDPOINT_URL: string = '';

  private currentUserSubject: BehaviorSubject<User>;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {

    this.incializaCurrentUser();
  }

  private incializaCurrentUser() {


    const user = null; /* this.getUserLocalStorage() -> check user logged - cookies/storage */

    this.currentUserSubject = new BehaviorSubject<User>(user);
  }

  get currentUserValue(): User {

    return this.currentUserSubject.value;
  }

  login(user: string, passwd: string) {

    const userData = this.getUserLocal(user);
    if (userData && userData.password === passwd) {

    return of('<TOKEN_JWT_USUARIO>')
      .pipe(
        take(1),
      ).toPromise()
        .then(result => {

          // setar JWT nos cookies
          this.updateCurrentUser(userData);

          return true;
        });
    }

    throw new Error(`User not found`);
  }

  logout(user: string): Promise<boolean> {

    return of(true)
      .pipe(
        take(1),
      ).toPromise()
      .then(result => {

        this.removeUserLocal(user);
        this.updateCurrentUser(null);
        this.redirectToLogin();

        return result;
      });
  }

  registerUser(username: string, name: string, passwd: string) {

    if (username && name && passwd) {

      const user: User = {

        email: username,
        password: passwd,
        name: name,
      };

      return of(true)
        .pipe(
          take(1),
        ).toPromise()
        .then(returnValue => {

          // fake storage - using localStorage
          localStorage.setItem(this.localUserPrefix + username, JSON.stringify(user));

          this.saveUserLocal(username, user);
        });
    }

    throw new Error(`Something got wrong`);
  }

  saveUserLocal(username, usrObj) {

    // fake storage - using localStorage
    localStorage.setItem(this.localUserPrefix + username, JSON.stringify(usrObj));
  }

  removeUserLocal(username) {

    // fake storage - using localStorage
    localStorage.removeItem(this.localUserPrefix + username);
  }

  getUserLocal(username) {

    // fake storage - using localStorage
    return JSON.parse(localStorage.getItem(this.localUserPrefix + username));
  }

  updateCurrentUser(userObj?: User) {

    this.currentUserSubject.next(userObj);
  }

  verifyUserValid(): boolean {

    const currentUser = this.currentUserValue;
    if (currentUser) {

      return true;
    }

    return false;
  }

  redirectToMain() {

    this.router.navigate(['/home']);
  }

  redirectToLogin() {

    this.router.navigate(['/login']);
  }

  redirectToRegister() {

    this.router.navigate(['/register']);
  }
}


