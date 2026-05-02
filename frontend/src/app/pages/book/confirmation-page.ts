import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="confirmation-shell">
      <div class="confirmation-card">
        <span class="status-chip">Booking confirmed</span>
        <h1>You're all set.</h1>
        <p>Your visit is reserved. A confirmation email and QR ticket have been sent to the address on file.</p>
        <div class="confirmation-details">
          <div>
            <p class="label">Booking ID</p>
            <strong>#ZN-745</strong>
          </div>
          <div>
            <p class="label">Date</p>
            <strong>{{ booking.date || 'TBD' }}</strong>
          </div>
          <div>
            <p class="label">Slot</p>
            <strong>{{ booking.slot?.label || 'TBD' }}</strong>
          </div>
        </div>
        <a routerLink="/" class="primary-button">Return to homepage</a>
      </div>
    </section>
  `,
  styles: [
    `
      .confirmation-shell { display: grid; place-items: center; min-height: 70vh; padding: 3rem 1rem; }
      .confirmation-card { width: min(640px, 100%); background: #ffffff; border-radius: 2rem; padding: 3rem; box-shadow: 0 32px 80px rgba(15, 23, 42, 0.12); display: grid; gap: 1.75rem; }
      .status-chip { display: inline-flex; align-items: center; justify-content: center; padding: 0.85rem 1.2rem; border-radius: 9999px; background: #dcfce7; color: #166534; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.8rem; }
      h1 { margin: 0; font-size: clamp(2.5rem, 4vw, 3.75rem); line-height: 1.02; }
      p { margin: 0; color: #475569; line-height: 1.8; font-size: 1rem; }
      .confirmation-details { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; padding: 1.5rem; background: #f8fafc; border-radius: 1.5rem; }
      .label { display: block; margin-bottom: 0.5rem; color: #94a3b8; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; }
      strong { display: block; font-size: 1.15rem; color: #0f172a; }
      .primary-button { width: fit-content; padding: 1rem 1.8rem; border-radius: 1rem; border: none; background: #173901; color: #ffffff; font-weight: 700; text-decoration: none; text-align: center; }
    `
  ]
})
export class ConfirmationPage {
  booking = history.state || {};
}
