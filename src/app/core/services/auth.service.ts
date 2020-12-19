import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ENDPOINT_URL: string = '';

  private currentUserSubject: BehaviorSubject<User>;

  constructor() {

    this.incializaCurrentUser();
  }

  private incializaCurrentUser() {


    const user = null; /* this.getUserLocalStorage() -> check user logged - cookies/storage */

    this.currentUserSubject = new BehaviorSubject<User>(user);
  }

  get currentUserValue(): User {

    return this.currentUserSubject.value;
  }

  login(user: string, pwd: string): Observable<boolean> {

    return of('<TOKEN_JWT_USUARIO>')
      .pipe(
        take(1),
      ).subscribe((tokenJwt: string) => {

        const userObj = {

          username: user;
        };

        // setar JWT nos cookies
        this.updateCurrentUser(userObj);

        return true;
      }, error => {

        console.error(error);
        return false;
      });
  }

  logout(user: string, pwd: string): Observable<boolean> {

    return of(true)
      .pipe(
        take(1),
      );
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
}
