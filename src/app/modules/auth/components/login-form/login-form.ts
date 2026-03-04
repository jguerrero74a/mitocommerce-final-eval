import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { AlertService } from '@/app/shared/services/alert.service';
import { Router } from '@angular/router';
import { email, form, FormField, required } from '@angular/forms/signals';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login-form',
  imports: [FormField],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm {
  authService = inject(AuthService);
  alertService = inject(AlertService);
  router = inject(Router);
  isLoading = signal(false);

  loginModel = signal({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (fieldPath) => {
    required(fieldPath.email, { message: 'El correo electrónico es requerido' });
    email(fieldPath.email, { message: 'Ingrese un correo electrónico válido' });
    required(fieldPath.password, { message: 'La contraseña es requerida' });
  });

  async onSubmit(event: Event) {
    event.preventDefault();
    if (this.loginForm().invalid()) {
      this.loginForm().markAsTouched();
      return;
    }

    this.isLoading.set(true);
    try {
      const { email, password } = this.loginModel();
      await lastValueFrom(this.authService.login({ email, password }));
    } catch (error) {
      this.alertService.showAlert({
        message: 'Ocurrió un error inesperado',
        type: 'error',
      });
    } finally {
      this.isLoading.set(false);
    }
  }
}
