import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth-service/auth.service';
import {
  ADMIN_ROLE,
  CUSTOMER_ROLE,
  ErrorResponse,
} from '../../services/common-types';

@Component({
  selector: 'login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css'],
})
export class LoginPanelComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage = '';
  public loading = false;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
      ]),
    });
  }

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login$(this.loginForm.value).subscribe({
        next: (user: User) => {
          if (user.role === ADMIN_ROLE) {
            this.router.navigate(['admin']);
            return;
          }

          if (user.role === CUSTOMER_ROLE) {
            this.router.navigate(['']);
            return;
          }
          this.loading = false;
          this.errorMessage = 'Unknown user role ' + user.role;
        },
        error: (errorObject: ErrorResponse) => {
          this.loading = false;
          this.errorMessage = errorObject.error.message;
        },
      });
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
