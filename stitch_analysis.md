# Analysis of `stitch_screens` Folder

I have categorized the files in the `stitch_screens` directory to understand the intended user flow and design system.

## 1. Categorization of Assets

The folder contains two parallel sets of assets: a "Desktop" refined flow and the original "Mobile/Generic" flow. We will prioritize the **Desktop Refined Flow** as it contains the most recent design updates.

### Desktop Refined Flow (Primary)
- **Step 1 (Date Selection)**: [select_date_time.html](file:///c:/Users/dataman/Desktop/zoo/stitch_screens/select_date_time.html)
- **Step 2 (Ticket Selection)**: [ticket_selection_desktop.html](file:///c:/Users/dataman/Desktop/zoo/stitch_screens/ticket_selection_desktop.html)
- **Step 3 (Guest Information)**: [user_details_desktop.html](file:///c:/Users/dataman/Desktop/zoo/stitch_screens/user_details_desktop.html)
- **Final Checkout**: [payment_checkout_desktop.html](file:///c:/Users/dataman/Desktop/zoo/stitch_screens/payment_checkout_desktop.html)

### Legacy/Mobile Reference Assets
- `landing_page.html`
- `booking_confirmation.html`
- `ticket_selection.html` (Mobile)
- `user_details_form.html` (Mobile)
- `payment_checkout.html` (Mobile)

---

## 2. Design System & Patterns

The "Arboreal Civic" design system is consistently applied across the desktop screens:

| Aspect | Pattern / Token |
| :--- | :--- |
| **Typography** | **Public Sans** (Civic, authoritative yet breathable) |
| **Primary Color** | Forest Green (`#466553`) |
| **Secondary Color** | Neutral Gray-Golds (`#eaefee` / `#f9f9f8`) |
| **Borders** | **Rule: No-Line**. Depth is created through background shifts (`surface-container-low` vs `surface`). |
| **Progress** | Linear Stepper (e.g., "Step 1 of 3") at the top of the main container. |
| **Layout** | 8/4 grid split: Left (8) for inputs/sections, Right (4) for the **Sticky Booking Summary**. |

---

## 3. Interaction Logic (Frontend Implementation Plan)

### Step 1: Date & Time
- Interactive calendar grid.
- Visual feedback for "Sold Out" or "Low Capacity" slots (color-coded progress bars).
- "Arrival Window Policy" information box.

### Step 2: Tickets & Add-ons
- Quantity counters for Adult/Child.
- **Enhancements Section**: Safari Access and Camera Permit as card-based selection.
- Sidebar summary updates in real-time with total amount.

### Step 3: Guest Information
- Clean form fields for Full Name, Mobile, and Email.
- Privacy notice with "Verified User" branding.

### Step 4: Payment
- Selection between Credit Card, UPI, and Net Banking.
- Final "Pay" button triggering the backend booking request.

---

## 4. Proposed Next Steps
1. **Update Theme Tokens**: Integrate the colors and fonts into `tailwind.config.js`.
2. **Component Updates**: Refactor the current React components (`Step1Date`, `Step2Tickets`, etc.) to match these precise HTML/CSS structures.
3. **Flow Harmonization**: Ensure the `BookingFlow.jsx` state machine perfectly transitions between these 4 desktop steps.
