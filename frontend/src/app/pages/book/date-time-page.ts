import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-date-time-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page page-step">
      <h1>Select a date & time</h1>
      <p>Choose the best slot for your zoo visit.</p>
      <a routerLink="/book/tickets" class="button">Next: Tickets</a>
    </section>
  `,
  styles: [
    `
      .page-step { background: #ffffff; padding: 2rem; border-radius: 1rem; box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08); }
      .button { margin-top: 1.5rem; display: inline-flex; padding: 0.95rem 1.5rem; border-radius: 0.75rem; background: #2563eb; color: #ffffff; text-decoration: none; font-weight: 700; }
    `
  ]
})
export class DateTimePage {}
