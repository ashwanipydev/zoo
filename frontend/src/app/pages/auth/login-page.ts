import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page page-auth">
      <h1>Login</h1>
      <p>Use your account to manage bookings and access the admin portal.</p>
      <div class="page-actions">
        <a routerLink="/signup">Create account</a>
        <a routerLink="/forgot-password">Forgot password?</a>
      </div>
    </section>
  `,
  styles: [
    `
      .page-auth { max-width: 580px; background: #ffffff; padding: 2rem; border-radius: 1rem; box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08); }
      h1 { margin-top: 0; font-size: 2rem; }
      p { color: #64748b; line-height: 1.7; }
      .page-actions { margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.75rem; }
      a { color: #2563eb; text-decoration: none; font-weight: 600; }
    `
  ]
})
export class LoginPage {}
