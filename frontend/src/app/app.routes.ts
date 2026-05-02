import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/landing-page').then((m) => m.LandingPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login-page').then((m) => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/auth/signup-page').then((m) => m.SignupPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/auth/forgot-password-page').then((m) => m.ForgotPasswordPage)
  },
  {
    path: 'reset-password/:token',
    loadComponent: () => import('./pages/auth/reset-password-page').then((m) => m.ResetPasswordPage)
  },
  {
    path: 'book',
    children: [
      {
        path: 'date',
        loadComponent: () => import('./pages/book/date-time-page').then((m) => m.DateTimePage)
      },
      {
        path: 'tickets',
        loadComponent: () => import('./pages/book/ticket-selection-page').then((m) => m.TicketSelectionPage)
      },
      {
        path: 'details',
        loadComponent: () => import('./pages/book/user-details-page').then((m) => m.UserDetailsPage)
      },
      {
        path: 'payment',
        loadComponent: () => import('./pages/book/payment-page').then((m) => m.PaymentPage)
      }
    ]
  },
  {
    path: 'booking/confirmation',
    loadComponent: () => import('./pages/book/confirmation-page').then((m) => m.ConfirmationPage)
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin-layout').then((m) => m.AdminLayout),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/admin/dashboard-page').then((m) => m.DashboardPage)
      },
      {
        path: 'slots',
        loadComponent: () => import('./pages/admin/slot-management-page').then((m) => m.SlotManagementPage)
      },
      {
        path: 'bookings',
        loadComponent: () => import('./pages/admin/booking-management-page').then((m) => m.BookingManagementPage)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./pages/admin/revenue-analytics-page').then((m) => m.RevenueAnalyticsPage)
      },
      {
        path: 'pricing',
        loadComponent: () => import('./pages/admin/pricing-management-page').then((m) => m.PricingManagementPage)
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/admin/user-management-page').then((m) => m.UserManagementPage)
      }
    ]
  },
  {
    path: 'staff/gatekeeper',
    loadComponent: () => import('./pages/staff/gatekeeper-page').then((m) => m.GatekeeperPage),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
