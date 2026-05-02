import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface AddOn { id: number; name: string; description: string; price: number; perPerson: boolean; }

@Component({
  selector: 'app-ticket-selection-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="booking-shell">
      <div class="booking-header">
        <div>
          <p class="eyebrow">Step 2 of 4</p>
          <h1>Choose your tickets</h1>
          <p>Adjust quantities and add optional enhancements for your group.</p>
        </div>
        <button class="ghost-button" (click)="goBack()">Change date</button>
      </div>

      <div class="booking-grid">
        <article class="ticket-panel">
          <div class="ticket-row">
            <div>
              <p class="label">Adults</p>
              <h2>₹850</h2>
            </div>
            <div class="counter">
              <button type="button" (click)="updateCount('adults', -1)">remove</button>
              <span>{{ adults }}</span>
              <button type="button" (click)="updateCount('adults', 1)">add</button>
            </div>
          </div>
          <div class="ticket-row">
            <div>
              <p class="label">Children</p>
              <h2>₹450</h2>
            </div>
            <div class="counter">
              <button type="button" (click)="updateCount('children', -1)">remove</button>
              <span>{{ children }}</span>
              <button type="button" (click)="updateCount('children', 1)">add</button>
            </div>
          </div>
          <div class="addons-section">
            <div class="addons-header">
              <p class="eyebrow">Add-ons</p>
              <p>Optional extras for an elevated visit.</p>
            </div>
            <div class="addons-list">
              <button
                type="button"
                *ngFor="let addon of addons"
                class="addon-card"
                [class.selected]="selectedAddons.has(addon.id)"
                (click)="toggleAddon(addon.id)"
              >
                <div>
                  <h3>{{ addon.name }}</h3>
                  <p>{{ addon.description }}</p>
                </div>
                <div>
                  <span>₹{{ addon.price }}{{ addon.perPerson ? '/person' : '' }}</span>
                </div>
              </button>
            </div>
          </div>
        </article>

        <aside class="summary-panel">
          <div class="summary-card">
            <p class="eyebrow">Booking summary</p>
            <div class="summary-row">
              <span>Adults</span>
              <strong>₹{{ adults * 850 }}</strong>
            </div>
            <div class="summary-row">
              <span>Children</span>
              <strong>₹{{ children * 450 }}</strong>
            </div>
            <ng-container *ngFor="let addon of addons">
              <div *ngIf="selectedAddons.has(addon.id)" class="summary-row">
                <span>{{ addon.name }}</span>
                <strong>₹{{ addon.perPerson ? addon.price * (adults + children) : addon.price }}</strong>
              </div>
            </ng-container>
            <div class="summary-total">
              <span>Total</span>
              <strong>₹{{ total }}</strong>
            </div>
          </div>
          <button class="primary-button" (click)="continueToDetails()">Continue to details</button>
        </aside>
      </div>
    </section>
  `,
  styles: [
    `
      .booking-shell { display: grid; gap: 2rem; padding: 2.5rem 0; }
      .booking-header { display: flex; justify-content: space-between; align-items: flex-end; gap: 1rem; }
      .booking-header h1 { margin: 0; font-size: clamp(2.25rem, 3vw, 3.5rem); }
      .booking-header p { margin: 0.75rem 0 0; color: #475569; max-width: 40rem; }
      .booking-grid { display: grid; grid-template-columns: 1.4fr 0.8fr; gap: 1.75rem; }
      .ticket-panel, .summary-panel { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 2rem; padding: 1.75rem; box-shadow: 0 24px 56px rgba(15, 23, 42, 0.08); }
      .ticket-row { display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items: center; border-bottom: 1px solid #f3f4f6; padding: 1rem 0; }
      .ticket-row:last-child { border-bottom: none; }
      .label { margin: 0 0 0.5rem; color: #64748b; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.1em; }
      .ticket-row h2 { margin: 0; font-size: 1.35rem; }
      .counter { display: inline-flex; gap: 0.75rem; align-items: center; background: #f8fafc; border-radius: 9999px; padding: 0.45rem 0.75rem; }
      .counter button { border: none; border-radius: 9999px; width: 2.5rem; height: 2.5rem; background: #ffffff; box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07); color: #173901; cursor: pointer; font-family: 'Material Symbols Outlined', sans-serif; }
      .counter span { min-width: 2rem; text-align: center; font-weight: 700; }
      .addons-section { margin-top: 1.75rem; }
      .addons-header p { margin: 0.25rem 0 0; color: #64748b; }
      .addons-list { display: grid; gap: 1rem; margin-top: 1rem; }
      .addon-card { display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items: center; border-radius: 1.5rem; border: 1px solid #e5e7eb; padding: 1.2rem 1.25rem; background: #f8fafc; text-align: left; cursor: pointer; transition: transform 0.2s ease, border-color 0.2s ease; }
      .addon-card:hover { transform: translateY(-1px); }
      .addon-card.selected { border-color: #166534; background: #dcfce7; }
      .addon-card h3 { margin: 0 0 0.45rem; font-size: 1rem; }
      .addon-card p { margin: 0; color: #475569; line-height: 1.6; font-size: 0.95rem; }
      .summary-card { display: grid; gap: 1rem; margin-bottom: 1.5rem; }
      .summary-row { display: flex; justify-content: space-between; align-items: center; color: #475569; }
      .summary-total { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-size: 1.2rem; font-weight: 800; color: #0f172a; }
      .primary-button { width: 100%; display: inline-flex; align-items: center; justify-content: center; padding: 1rem 1.5rem; border-radius: 1rem; border: none; background: #173901; color: #ffffff; font-weight: 700; cursor: pointer; }
      .primary-button:hover { transform: translateY(-1px); }
      @media (max-width: 1024px) { .booking-grid { grid-template-columns: 1fr; } }
      @media (max-width: 720px) { .booking-header { flex-direction: column; align-items: flex-start; } }
    `
  ]
})
export class TicketSelectionPage {
  booking = history.state || {};
  adults = 2;
  children = 1;
  addons: AddOn[] = [
    { id: 1, name: 'Guided tour', description: 'Expert-led wildlife and habitat tour.', price: 250, perPerson: false },
    { id: 2, name: 'Botanical guide', description: 'Printed trail companion with plant stories.', price: 120, perPerson: false },
    { id: 3, name: 'Lunch bundle', description: 'Healthy picnic box for the whole family.', price: 180, perPerson: true }
  ];
  selectedAddons = new Set<number>();

  get total(): number {
    const tickets = this.adults * 850 + this.children * 450;
    const addonTotal = this.addons.reduce((sum, addon) => sum + (this.selectedAddons.has(addon.id) ? (addon.perPerson ? addon.price * (this.adults + this.children) : addon.price) : 0), 0);
    return tickets + addonTotal;
  }

  constructor(private router: Router) {}

  updateCount(type: 'adults' | 'children', delta: number) {
    if (type === 'adults') { this.adults = Math.max(1, this.adults + delta); }
    else { this.children = Math.max(0, this.children + delta); }
  }

  toggleAddon(id: number) {
    if (this.selectedAddons.has(id)) { this.selectedAddons.delete(id); }
    else { this.selectedAddons.add(id); }
  }

  goBack() {
    this.router.navigateByUrl('/book/date');
  }

  continueToDetails() {
    this.router.navigateByUrl('/book/details', {
      state: {
        ...this.booking,
        adults: this.adults,
        children: this.children,
        selectedAddons: Array.from(this.selectedAddons),
        total: this.total
      }
    });
  }
}
