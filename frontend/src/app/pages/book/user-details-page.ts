import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="booking-shell">
      <div class="booking-header">
        <div>
          <p class="eyebrow">Step 3 of 4</p>
          <h1>Guest information</h1>
          <p>Provide the contact details for your group so we can send confirmations and updates.</p>
        </div>
        <button class="ghost-button" (click)="goBack()">Adjust tickets</button>
      </div>

      <div class="booking-grid">
        <article class="form-panel">
          <label>
            <span>Full name</span>
            <input name="fullName" [(ngModel)]="guest.fullName" required />
          </label>

          <label>
            <span>Email address</span>
            <input type="email" name="email" [(ngModel)]="guest.email" required />
          </label>

          <label>
            <span>Mobile number</span>
            <input name="mobile" [(ngModel)]="guest.mobile" required />
          </label>

          <label>
            <span>Special requests</span>
            <textarea name="notes" rows="4" [(ngModel)]="guest.notes" placeholder="Dietary needs, accessibility requests, or group notes"></textarea>
          </label>

          <button class="primary-button" (click)="continueToPayment()" [disabled]="!guest.fullName || !guest.email || !guest.mobile">Continue to payment</button>
        </article>

        <aside class="summary-panel">
          <div class="summary-card">
            <p class="eyebrow">Booking recap</p>
            <div class="summary-row"><span>Date</span><strong>{{ booking.date || 'Not set' }}</strong></div>
            <div class="summary-row"><span>Slot</span><strong>{{ booking.slot?.label || 'No selection' }}</strong></div>
            <div class="summary-row"><span>Adults</span><strong>{{ booking.adults || '2' }}</strong></div>
            <div class="summary-row"><span>Children</span><strong>{{ booking.children || '1' }}</strong></div>
            <div class="summary-total"><span>Estimated total</span><strong>₹{{ booking.total || 1600 }}</strong></div>
          </div>
          <p class="small-note">We will send a booking confirmation and QR code to the email provided.</p>
        </aside>
      </div>
    </section>
  `,
  styles: [
    `
      .booking-shell { display: grid; gap: 2rem; padding: 2.5rem 0; }
      .booking-header { display: flex; justify-content: space-between; align-items: flex-end; gap: 1rem; }
      .booking-header h1 { margin: 0; font-size: clamp(2.25rem, 3vw, 3.5rem); }
      .booking-header p { margin: 0.75rem 0 0; color: #475569; max-width: 44rem; }
      .booking-grid { display: grid; grid-template-columns: 1.4fr 0.8fr; gap: 1.75rem; }
      .form-panel, .summary-panel { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 2rem; padding: 1.75rem; box-shadow: 0 24px 56px rgba(15, 23, 42, 0.08); display: grid; gap: 1.25rem; }
      label { display: grid; gap: 0.65rem; }
      span { font-weight: 700; color: #0f172a; }
      input, textarea { width: 100%; border: 1px solid #d1d5db; border-radius: 1rem; padding: 1rem 1.1rem; background: #f8fafc; color: #0f172a; font: inherit; outline: none; }
      textarea { resize: vertical; }
      input:focus, textarea:focus { border-color: #166534; background: #ffffff; }
      .primary-button { width: 100%; padding: 1rem 1.5rem; border-radius: 1rem; border: none; background: #173901; color: #ffffff; font-weight: 700; cursor: pointer; }
      .primary-button:disabled { opacity: 0.55; cursor: not-allowed; }
      .summary-card { display: grid; gap: 1rem; }
      .summary-row { display: flex; justify-content: space-between; align-items: center; color: #475569; }
      .summary-total { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-weight: 800; font-size: 1.1rem; color: #0f172a; }
      .small-note { margin: 0; color: #64748b; font-size: 0.95rem; }
      .ghost-button { align-self: start; padding: 0.95rem 1.4rem; border-radius: 1rem; color: #0f172a; background: #f8fafc; border: 1px solid #e5e7eb; text-decoration: none; font-weight: 700; cursor: pointer; }
      @media (max-width: 1024px) { .booking-grid { grid-template-columns: 1fr; } }
      @media (max-width: 720px) { .booking-header { flex-direction: column; align-items: flex-start; } }
    `
  ]
})
export class UserDetailsPage {
  booking = history.state || {};
  guest = {
    fullName: '',
    email: '',
    mobile: '',
    notes: ''
  };

  constructor(private router: Router) {}

  goBack() {
    this.router.navigateByUrl('/book/tickets', { state: this.booking });
  }

  continueToPayment() {
    if (!this.guest.fullName || !this.guest.email || !this.guest.mobile) {
      return;
    }

    this.router.navigateByUrl('/book/payment', {
      state: {
        ...this.booking,
        guest: this.guest
      }
    });
  }
}
