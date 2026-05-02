import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page hero-page">
      <div>
        <h1>Welcome to Zoo Booking</h1>
        <p>Fast, secure ticket booking and admin management for your zoo experience.</p>
      </div>
      <div class="hero-actions">
        <a routerLink="/book/date" class="button">Start Booking</a>
        <a routerLink="/login" class="button button-secondary">Login</a>
      </div>
    </section>
  `,
  styles: [
    `
      .hero-page { display: grid; gap: 1.5rem; padding: 2rem; background: #ffffff; border-radius: 1rem; box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08); }
      h1 { margin: 0 0 1rem; font-size: clamp(2.25rem, 4vw, 3.5rem); line-height: 1.05; }
      p { max-width: 42rem; margin: 0; color: #475569; font-size: 1rem; }
      .hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; }
      .button { display: inline-flex; align-items: center; justify-content: center; padding: 0.95rem 1.5rem; border-radius: 0.75rem; text-decoration: none; color: #ffffff; background: #2563eb; font-weight: 700; }
      .button-secondary { background: #64748b; }
      @media (max-width: 700px) { .hero-actions { flex-direction: column; width: 100%; } }
    `
  ]
})
export class LandingPage {}
