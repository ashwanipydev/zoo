import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Slot {
  id: number;
  label: string;
  start: string;
  end: string;
  available: number;
  active: boolean;
}

@Component({
  selector: 'app-date-time-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <section class="booking-shell">
      <div class="booking-header">
        <div>
          <p class="eyebrow">Step 1 of 4</p>
          <h1>Pick a date and entry window</h1>
          <p>Select the most convenient slot for your zoo adventure and reserve your group in advance.</p>
        </div>
        <a routerLink="/" class="ghost-button">Back to home</a>
      </div>

      <div class="booking-grid">
        <article class="calendar-card">
          <div class="calendar-toolbar">
            <button type="button" class="icon-button" (click)="previousMonth()">chevron_left</button>
            <div>
              <p class="calendar-label">{{ monthName }} {{ currentYear }}</p>
              <p class="calendar-subtitle">Available dates highlighted in green</p>
            </div>
            <button type="button" class="icon-button" (click)="nextMonth()">chevron_right</button>
          </div>
          <div class="calendar-grid">
            <div class="calendar-day-label" *ngFor="let label of dayLabels">{{label}}</div>
            <button
              *ngFor="let day of monthDays"
              [disabled]="!day || !isSelectable(day)"
              (click)="selectDate(day)"
              [class.selected]="selectedDate === day"
              [class.disabled]="day && !isSelectable(day)"
              class="calendar-cell"
            >
              {{day || ''}}
            </button>
          </div>
        </article>

        <article class="slots-card">
          <div class="section-title-row">
            <div>
              <p class="eyebrow">Available entry windows</p>
              <h2>Choose a time slot</h2>
            </div>
            <div class="slot-summary">{{ selectedDate ? selectedDate + ' ' + monthName : 'No date selected' }}</div>
          </div>

          <div *ngIf="!selectedDate" class="empty-state">
            Select a date above to reveal available slots.
          </div>

          <div *ngIf="selectedDate" class="slot-list">
            <button
              *ngFor="let slot of availableSlots"
              class="slot-card"
              [class.selected]="selectedSlot?.id === slot.id"
              [disabled]="!slot.active || slot.available === 0"
              (click)="selectSlot(slot)"
            >
              <div>
                <span class="slot-label">{{slot.label}}</span>
                <h3>{{slot.start}} – {{slot.end}}</h3>
                <p>{{ slot.available > 0 ? slot.available + ' spots left' : 'Sold out' }}</p>
              </div>
              <span class="material-symbols-outlined">{{ selectedSlot?.id === slot.id ? 'check_circle' : slot.available > 0 ? 'schedule' : 'block' }}</span>
            </button>
          </div>

          <div class="footer-actions">
            <button
              type="button"
              class="primary-button"
              [disabled]="!selectedSlot"
              (click)="continueToTickets()"
            >
              Continue to tickets
            </button>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      .booking-shell { display: grid; gap: 2rem; padding: 2.5rem 0; }
      .booking-header { display: flex; justify-content: space-between; gap: 1.5rem; align-items: flex-end; }
      .booking-header h1 { margin: 0; font-size: clamp(2.25rem, 3vw, 3.5rem); }
      .booking-header p { margin: 0.75rem 0 0; color: #475569; max-width: 44rem; }
      .ghost-button { align-self: start; padding: 0.95rem 1.4rem; border-radius: 1rem; color: #0f172a; background: #f8fafc; border: 1px solid #e5e7eb; text-decoration: none; font-weight: 700; }
      .booking-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 1.75rem; }
      .calendar-card, .slots-card { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 2rem; padding: 1.75rem; box-shadow: 0 24px 56px rgba(15, 23, 42, 0.08); }
      .calendar-toolbar { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
      .calendar-label { margin: 0; font-weight: 800; font-size: 1.05rem; }
      .calendar-subtitle { margin: 0.35rem 0 0; color: #64748b; font-size: 0.95rem; }
      .icon-button { display: inline-flex; align-items: center; justify-content: center; width: 3rem; height: 3rem; border-radius: 1rem; border: 1px solid #e5e7eb; background: #f8fafc; color: #0f172a; cursor: pointer; font-family: 'Material Symbols Outlined', sans-serif; font-size: 1.15rem; }
      .calendar-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0.75rem; }
      .calendar-day-label { color: #94a3b8; font-size: 0.75rem; text-align: center; text-transform: uppercase; font-weight: 700; letter-spacing: 0.08em; }
      .calendar-cell { min-height: 3.25rem; border-radius: 1rem; border: 1px solid transparent; background: #f8fafc; color: #0f172a; cursor: pointer; font-weight: 700; transition: transform 0.2s ease, background 0.2s ease; }
      .calendar-cell:hover:not(.disabled) { transform: translateY(-1px); background: #d1fae5; }
      .calendar-cell.selected { border-color: #166534; background: #dcfce7; }
      .calendar-cell.disabled { opacity: 0.32; cursor: not-allowed; }
      .slots-card { display: grid; gap: 1.25rem; }
      .section-title-row { display: flex; justify-content: space-between; gap: 1rem; align-items: flex-start; }
      .slot-summary { color: #64748b; font-size: 0.95rem; font-weight: 700; }
      .empty-state { padding: 3rem; border: 1px dashed #d1d5db; border-radius: 1.5rem; color: #64748b; text-align: center; }
      .slot-list { display: grid; gap: 1rem; }
      .slot-card { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 1rem; border-radius: 1.5rem; padding: 1.25rem 1.4rem; border: 1px solid #e5e7eb; background: #f8fafc; color: #0f172a; cursor: pointer; transition: transform 0.2s ease, border-color 0.2s ease; }
      .slot-card:hover:not(:disabled) { transform: translateY(-1px); border-color: #166534; }
      .slot-card.selected { border-color: #166534; background: #dcfce7; }
      .slot-card:disabled { opacity: 0.45; cursor: not-allowed; }
      .slot-label { display: inline-flex; padding: 0.4rem 0.75rem; border-radius: 9999px; background: #d1fae5; color: #166534; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; }
      .slot-card h3 { margin: 0.45rem 0 0; font-size: 1.1rem; }
      .slot-card p { margin: 0.45rem 0 0; color: #475569; font-size: 0.95rem; }
      .footer-actions { display: flex; justify-content: flex-end; }
      .primary-button { display: inline-flex; align-items: center; justify-content: center; padding: 1rem 1.5rem; border-radius: 1rem; border: none; background: #173901; color: #ffffff; font-weight: 700; cursor: pointer; transition: transform 0.2s ease, background 0.2s ease; }
      .primary-button:disabled { opacity: 0.55; cursor: not-allowed; }
      @media (max-width: 1024px) { .booking-grid { grid-template-columns: 1fr; } }
      @media (max-width: 720px) { .booking-header { flex-direction: column; align-items: stretch; } }
    `
  ]
})
export class DateTimePage {
  dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();
  selectedDate: number | null = null;
  selectedSlot: Slot | null = null;

  allSlots: Slot[] = [
    { id: 1, label: 'Morning', start: '09:00', end: '11:00', available: 12, active: true },
    { id: 2, label: 'Midday', start: '11:30', end: '13:30', available: 8, active: true },
    { id: 3, label: 'Afternoon', start: '14:00', end: '16:00', available: 5, active: true },
    { id: 4, label: 'Evening', start: '16:30', end: '18:30', available: 0, active: false }
  ];

  get monthDays(): Array<number | null> {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const days: Array<number | null> = Array.from({ length: firstDay }, () => null);
    for (let i = 1; i <= totalDays; i++) { days.push(i); }
    return days;
  }

  get monthName(): string {
    return new Date(this.currentYear, this.currentMonth, 1)
      .toLocaleString('default', { month: 'long', timeZone: 'UTC' });
  }

  get availableSlots(): Slot[] {
    return this.allSlots.filter(slot => slot.active);
  }

  isSelectable(day: number): boolean {
    if (!day) { return false; }
    const date = new Date(this.currentYear, this.currentMonth, day);
    return date >= new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
  }

  selectDate(day: number | null) {
    if (!day || !this.isSelectable(day)) { return; }
    this.selectedDate = day;
    this.selectedSlot = null;
  }

  selectSlot(slot: Slot) {
    if (slot.available === 0 || !slot.active) { return; }
    this.selectedSlot = slot;
  }

  previousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear -= 1;
    } else {
      this.currentMonth -= 1;
    }
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear += 1;
    } else {
      this.currentMonth += 1;
    }
  }

  constructor(private router: Router) {}

  continueToTickets() {
    if (!this.selectedSlot || !this.selectedDate) {
      return;
    }

    this.router.navigateByUrl('/book/tickets', {
      state: {
        date: `${this.selectedDate.toString().padStart(2, '0')}-${this.currentMonth + 1}-${this.currentYear}`,
        slot: this.selectedSlot
      }
    });
  }
}
