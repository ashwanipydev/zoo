import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <section class="admin-shell">
      <nav class="admin-nav">
        <a routerLink="/admin">Dashboard</a>
        <a routerLink="/admin/slots">Slots</a>
        <a routerLink="/admin/bookings">Bookings</a>
        <a routerLink="/admin/analytics">Analytics</a>
        <a routerLink="/admin/pricing">Pricing</a>
        <a routerLink="/admin/users">Users</a>
      </nav>
      <div class="admin-content">
        <router-outlet></router-outlet>
      </div>
    </section>
  `,
  styles: [
    `
      .admin-shell { display: grid; gap: 1.5rem; }
      .admin-nav { display: flex; flex-wrap: wrap; gap: 0.75rem; padding: 1rem 0; }
      .admin-nav a { padding: 0.75rem 1rem; background: #e2e8f0; border-radius: 0.75rem; color: #0f172a; text-decoration: none; font-weight: 600; }
      .admin-content { background: #ffffff; padding: 1.5rem; border-radius: 1rem; box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08); }
    `
  ]
})
export class AdminLayout {}
