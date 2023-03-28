import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/store/services/cart-service/cart.service';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  public isCartShown(): boolean {
    return this.authService.isCustomer();
  }

  public isLoginShown(): boolean {
    return !this.authService.isLoggedIn();
  }

  public getUsername(): string | undefined {
    return this.authService.getCurrentUser()?.username;
  }

  public isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  public goToAdmin(): void {
    this.router.navigate(['admin']);
  }

  public logout(): void {
    this.authService.logout$().subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: () => {},
    });
  }

  public toggleCart(): void {
    this.cartService.toggleCart();
  }

  public getCartLength(): number {
    return this.cartService.cart.length;
  }
}
