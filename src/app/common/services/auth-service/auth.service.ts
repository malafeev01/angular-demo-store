import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { MOCK_USERS } from '../api-mock-data';
import { ADMIN_ROLE, CUSTOMER_ROLE } from '../common-types';

export type User = {
  username: string;
  password: string;
  email: string;
  role: typeof ADMIN_ROLE | typeof CUSTOMER_ROLE;
};

type LoginOptions = {
  username: string;
  password: string;
};

/**
 * AuthService - this is a service for login/logout operations and working with user session.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Login method.
   * In case of success a user's session object will created and saved in LocalStorage and User object (@see {@link User}).
   *
   * @param options - object with username and password(@see {@link LoginOptions})
   * @returns - an Observable object with User type(@see {@link User}).
   */
  public login$(options: LoginOptions): Observable<User> {
    return new Observable<User>((subscriber) => {
      const user = MOCK_USERS.find(
        (user) =>
          user.username === options.username &&
          user.password === options.password
      );
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));

        subscriber.next(user);
      } else {
        subscriber.error({
          error: { message: 'Wrong user name or password' },
        });
      }
      subscriber.complete();
    }).pipe(delay(1000));
  }

  /**
   * Logout method.
   * In case of success the user's session object will be removed from local storage.
   *
   * @returns an Observable object with empty object type.
   */
  public logout$(): Observable<{}> {
    return new Observable<{}>((subscriber) => {
      if (this.isLoggedIn()) {
        localStorage.removeItem('user');
        subscriber.next({});
      } else {
        subscriber.error({
          error: { message: 'You are not logged in' },
        });
      }
      subscriber.complete();
    }).pipe(delay(1000));
  }

  /**
   * Check whether user logged in or not.
   *
   * @returns boolean
   */
  public isLoggedIn(): boolean {
    const session = localStorage.getItem('user');
    if (session) {
      try {
        JSON.parse(session);
        return true;
      } catch {
        localStorage.removeItem('user');
        return false;
      }
    }

    return false;
  }

  /**
   * Get current logged in user
   *
   * @returns User object(@see {@link User}) in case of logged in user or undefined if there is no active session.
   */
  public getCurrentUser(): User | undefined {
    if (this.isLoggedIn()) {
      return JSON.parse(localStorage.getItem('user') || '') as User;
    }

    return;
  }

  /**
   * Check whether logged in is Admin or not.
   *
   * @returns boolean
   */
  public isAdmin(): boolean {
    return this.getCurrentUser()?.role === ADMIN_ROLE;
  }

  /**
   * Check whether logged in is Customer or not.
   *
   * @returns boolean
   */
  public isCustomer(): boolean {
    return this.getCurrentUser()?.role === CUSTOMER_ROLE;
  }
}
