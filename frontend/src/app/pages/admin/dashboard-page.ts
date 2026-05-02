import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  template: `
    <section class="page admin-page">
      <h1>Admin Dashboard</h1>
      <p>Review bookings, revenue, and active slot performance.</p>
    </section>
  `
})
export class DashboardPage {}
