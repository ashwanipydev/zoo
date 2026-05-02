import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="booking-shell">
      <div class="booking-header">
        <div>
          <p class="eyebrow">Step 4 of 4</p>
          <h1>Secure checkout</h1>
          <p>Review your booking details and choose a payment method to confirm your visit.</p>
        </div>
        <button class="ghost-button" (click)="goBack()">Edit guest info</button>
      </div>

      <div class="booking-grid">
        <article class="payment-panel">
          <div class="payment-methods">
            <p class="eyebrow">Payment method</p>
            <label class="radio-card">
              <input type="radio" name="payment" value="card" [(ngModel)]="paymentMethod" />
              <span>Credit / Debit card</span>
            </label>
            <label class="radio-card">
              <input type="radio" name="payment" value="upi" [(ngModel)]="paymentMethod" />
              <span>UPI</span>
            </label>
            <label class="radio-card">
              <input type="radio" name="payment" value="netbanking" [(ngModel)]="paymentMethod" />
              <span>Net banking</span>
            </label>
          </div>

          <div class="card-details">
            <p class="eyebrow">Card details</p>
            <div class="form-grid">
              <label>
                <span>Card number</span>
                <input name="number" [(ngModel)]="card.number" placeholder="0000 0000 0000 0000" />
              </label>
              <label>
                <span>Expiry</span>
                <input name="expiry" [(ngModel)]="card.expiry" placeholder="MM/YY" />
              </label>
              <label>
                <span>CVC</span>
                <input name="cvc" [(ngModel)]="card.cvc" placeholder="123" />
              </label>
              <label>
                <span>Name on card</span>
                <input name="name" [(ngModel)]="card.name" placeholder="Guest name" />
              </label>
            </div>
          </div>

          <button class="primary-button" (click)="confirmBooking()">Confirm booking</button>
        </article>

        <aside class="summary-panel">
          <div class="summary-card">
            <p class="eyebrow">Booking summary</p>
            <div class="summary-row"><span>Date</span><strong>{{ booking.date || 'Not available' }}</strong></div>
            <div class="summary-row"><span>Slot</span><strong>{{ booking.slot?.label || 'Not available' }}</strong></div>
            <div class="summary-row"><span>Guests</span><strong>{{ booking.adults || 2 }} adults, {{ booking.children || 1 }} children</strong></div>
            <div class="summary-total"><span>Total</span><strong>₹{{ booking.total || 1600 }}</strong></div>
          </div>
          <p class="small-note">Final payment will be processed securely. We respect your privacy and never store payment data on this site.</p>
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
      .payment-panel, .summary-panel { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 2rem; padding: 1.75rem; box-shadow: 0 24px 56px rgba(15, 23, 42, 0.08); display: grid; gap: 1.5rem; }
      .payment-methods { display: grid; gap: 1rem; }
      .radio-card { display: flex; align-items: center; gap: 0.9rem; background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 1.25rem; padding: 1rem 1.2rem; cursor: pointer; }
      .radio-card input { accent-color: #166534; }
      .radio-card span { font-weight: 700; color: #0f172a; }
      .card-details { display: grid; gap: 1rem; }
      .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      label { display: grid; gap: 0.5rem; }
      input { width: 100%; border: 1px solid #d1d5db; border-radius: 1rem; padding: 1rem 1.1rem; background: #f8fafc; color: #0f172a; font: inherit; outline: none; }
      input:focus { border-color: #166534; background: #ffffff; }
      .primary-button { padding: 1rem 1.5rem; border-radius: 1rem; border: none; background: #173901; color: #ffffff; font-weight: 700; cursor: pointer; width: 100%; }
      .summary-card { display: grid; gap: 1rem; }
      .summary-row { display: flex; justify-content: space-between; align-items: center; color: #475569; }
      .summary-total { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-weight: 800; color: #0f172a; }
      .small-note { margin: 0; color: #64748b; font-size: 0.95rem; }
      .ghost-button { align-self: start; padding: 0.95rem 1.4rem; border-radius: 1rem; color: #0f172a; background: #f8fafc; border: 1px solid #e5e7eb; text-decoration: none; font-weight: 700; cursor: pointer; }
      @media (max-width: 1024px) { .booking-grid { grid-template-columns: 1fr; } .form-grid { grid-template-columns: 1fr; } }
      @media (max-width: 720px) { .booking-header { flex-direction: column; align-items: flex-start; } }
    `
  ]
})
export class PaymentPage {
  booking = history.state || {};
  paymentMethod = 'card';
  card = { number: '', expiry: '', cvc: '', name: '' };

  constructor(private router: Router) {}

  goBack() {
    this.router.navigateByUrl('/book/details', { state: this.booking });
  }

  confirmBooking() {
    this.router.navigateByUrl('/booking/confirmation', { state: this.booking });
  }
}
