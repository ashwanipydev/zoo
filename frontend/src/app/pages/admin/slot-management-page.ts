import { Component } from '@angular/core';

@Component({
  selector: 'app-slot-management-page',
  standalone: true,
  template: `
    <section class="page admin-page">
      <h1>Slot Management</h1>
      <p>Create and manage zoo visit slots with capacity controls.</p>
    </section>
  `
})
export class SlotManagementPage {}
