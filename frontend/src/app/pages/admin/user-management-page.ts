import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management-page',
  standalone: true,
  template: `
    <section class="page admin-page">
      <h1>User Management</h1>
      <p>Manage administrators, staff, and customer accounts.</p>
    </section>
  `
})
export class UserManagementPage {}
