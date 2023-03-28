import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthServiceService', () => {
  let service: AuthService;

  // Normally it's needed to mock real API calls to avoid sending requests to the backend,
  // but here it's already simulated API calls, so that's why it's not needed here.
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    localStorage.removeItem('user');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to login', fakeAsync(() => {
    service.login$({ username: 'customer', password: 'customer' }).subscribe({
      next: (user) => {
        expect(user.username).toEqual('customer');
        expect(JSON.parse(localStorage.getItem('user') || '').email).toEqual(
          'customer@customer.ru'
        );
      },
    });
    tick(1001);
  }));

  it('should be able to logout', fakeAsync(() => {
    service.login$({ username: 'customer', password: 'customer' }).subscribe({
      next: (user) => {
        expect(user.username).toBe('customer');
        service.logout$().subscribe({
          next: (res) => {
            expect(res).toEqual({});
            expect(localStorage.getItem('user')).toBeNull();
          },
        });
      },
    });
    tick(2001);
  }));

  it('should get an error when logout not logged in user', fakeAsync(() => {
    service.logout$().subscribe({
      error: (error) => {
        expect(error.error.message).toBe('You are not logged in');
      },
    });
    tick(1001);
  }));

  it("shouldn't be able to login with wrong credentials", fakeAsync(() => {
    service.login$({ username: 'customer1', password: 'customer1' }).subscribe({
      error: (error) => {
        expect(error.error.message).toBe('Wrong user name or password');
      },
    });
    tick(1001);
  }));

  it('isLoggedIn method', fakeAsync(() => {
    expect(service.isLoggedIn()).toBeFalse();
    service.login$({ username: 'customer', password: 'customer' }).subscribe({
      next: () => {
        expect(service.isLoggedIn()).toBeTrue();
      },
    });
    tick(1001);
  }));

  it('getCurrentUser method', fakeAsync(() => {
    expect(service.getCurrentUser()).not.toBeDefined();
    service.login$({ username: 'customer', password: 'customer' }).subscribe({
      next: () => {
        expect(service.getCurrentUser()?.email).toBe('customer@customer.ru');
      },
    });
    tick(1001);
  }));

  it('isAdmin method', fakeAsync(() => {
    expect(service.isAdmin()).toBeFalse();
    service.login$({ username: 'admin', password: 'admin' }).subscribe({
      next: () => {
        expect(service.isAdmin()).toBeTrue();
        expect(service.isCustomer()).toBeFalse();
      },
    });
    tick(1001);
  }));

  it('isCustomer method', fakeAsync(() => {
    expect(service.isCustomer()).toBeFalse();
    service.login$({ username: 'customer', password: 'customer' }).subscribe({
      next: () => {
        expect(service.isAdmin()).toBeFalse();
        expect(service.isCustomer()).toBeTrue();
      },
    });
    tick(1001);
  }));
});
