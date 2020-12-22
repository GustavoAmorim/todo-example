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

  login(user: string, pwd: string) {

    return of('<TOKEN_JWT_USUARIO>')
      .pipe(
        take(1),
      ).toPromise()
        .then(result => {

          const userObj = {

            username: user
          };

          // setar JWT nos cookies
          this.updateCurrentUser(userObj);

          return true;
        });
  }

  logout(user: string, pwd: string): Observable<boolean> {

    return of(true)
      .pipe(
        take(1),
      );
  }

  registerUser(username: string, name: string) {

    if (username && name) {

      const user: User = {

        username: username,
        name: name
      };

      return of(true)
        .pipe(
          take(1),
        ).toPromise()
        .then(returnValue => {

          // fake storage - using localStorage
          localStorage.setItem('username', JSON.stringify(user));
        });
    }
  }

  saveUserLocal(username) {

    // fake storage - using localStorage
    localStorage.setItem('username', JSON.stringify(username));
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

    this.router.navigate(['/todo']);
  }

  redirectToLogin() {

    this.router.navigate(['/login']);
  }

  redirectToRegister() {

    this.router.navigate(['/register']);
  }
}


