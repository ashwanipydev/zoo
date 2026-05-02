import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <a routerLink="/" class="brand">Zoo Booking</a>
      <div class="nav-links">
        <a routerLink="/book/date">Book</a>
        <a routerLink="/admin">Admin</a>
        <a routerLink="/staff/gatekeeper">Gatekeeper</a>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background: #0f172a; color: #ffffff; }
      .brand { color: #ffffff; text-decoration: none; font-weight: 700; font-size: 1.1rem; }
      .nav-links { display: flex; flex-wrap: wrap; gap: 1rem; }
      .nav-links a { color: #dbeafe; text-decoration: none; font-weight: 500; }
      .nav-links a:hover { color: #ffffff; }
      @media (max-width: 720px) { .navbar { flex-direction: column; align-items: flex-start; gap: 0.75rem; } }
    `
  ]
})
export class Navbar {}
