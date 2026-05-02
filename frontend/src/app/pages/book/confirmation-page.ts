import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page page-step">
      <h1>Booking Confirmed</h1>
      <p>Your ticket is reserved. Check your email for the confirmation and QR ticket.</p>
      <a routerLink="/" class="button">Return Home</a>
    </section>
  `,
  styles: [
    `
      .page-step { background: #ffffff; padding: 2rem; border-radius: 1rem; box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08); }
      .button { margin-top: 1.5rem; display: inline-flex; padding: 0.95rem 1.5rem; border-radius: 0.75rem; background: #2563eb; color: #ffffff; text-decoration: none; font-weight: 700; }
    `
  ]
})
export class ConfirmationPage {}
