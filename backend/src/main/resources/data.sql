-- Initialize default roles
INSERT INTO roles (name) VALUES ('ROLE_USER') ON CONFLICT DO NOTHING;
INSERT INTO roles (name) VALUES ('ROLE_ADMIN') ON CONFLICT DO NOTHING;

-- Insert default admin user (password: admin123)
INSERT INTO users (full_name, email, password, mobile_number) VALUES ('Admin User', 'admin@zoo.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '1234567890') ON CONFLICT DO NOTHING;
INSERT INTO user_roles (user_id, role_id) VALUES ((SELECT id FROM users WHERE email = 'admin@zoo.com' LIMIT 1), (SELECT id FROM roles WHERE name = 'ROLE_ADMIN' LIMIT 1)) ON CONFLICT DO NOTHING;

-- Insert test users
INSERT INTO users (full_name, email, password, mobile_number) VALUES ('Priya Sharma', 'priya@email.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+91-9876543210') ON CONFLICT DO NOTHING;
INSERT INTO user_roles (user_id, role_id) VALUES ((SELECT id FROM users WHERE email = 'priya@email.com' LIMIT 1), (SELECT id FROM roles WHERE name = 'ROLE_USER' LIMIT 1)) ON CONFLICT DO NOTHING;
INSERT INTO users (full_name, email, password, mobile_number) VALUES ('Rahul Verma', 'rahul@email.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+91-9876543211') ON CONFLICT DO NOTHING;
INSERT INTO user_roles (user_id, role_id) VALUES ((SELECT id FROM users WHERE email = 'rahul@email.com' LIMIT 1), (SELECT id FROM roles WHERE name = 'ROLE_USER' LIMIT 1)) ON CONFLICT DO NOTHING;

-- Insert test slots
INSERT INTO slots (slot_date, start_time, end_time, total_capacity, available_capacity, is_active) VALUES ('2026-04-16', '09:00:00', '11:00:00', 100, 22, true) ON CONFLICT DO NOTHING;
INSERT INTO slots (slot_date, start_time, end_time, total_capacity, available_capacity, is_active) VALUES ('2026-04-16', '11:00:00', '13:30:00', 100, 58, true) ON CONFLICT DO NOTHING;
INSERT INTO slots (slot_date, start_time, end_time, total_capacity, available_capacity, is_active) VALUES ('2026-04-16', '14:00:00', '16:00:00', 80, 15, true) ON CONFLICT DO NOTHING;

-- Insert test bookings
-- First ensure the constraints allow. If schema auto increments, we just select the IDs.
-- Note: Assuming slots and users IDs are 1, 2, 3...
INSERT INTO bookings (adult_tickets, child_tickets, add_on_camera, add_on_safari, total_amount, status, created_at, user_id, slot_id)
VALUES (2, 1, 1, 2, 1230.0, 'CONFIRMED', '2026-04-10 10:00:00', (SELECT id FROM users WHERE email = 'priya@email.com' LIMIT 1), (SELECT id FROM slots WHERE start_time = '09:00:00' LIMIT 1));

INSERT INTO bookings (adult_tickets, child_tickets, add_on_camera, add_on_safari, total_amount, status, created_at, user_id, slot_id)
VALUES (3, 0, 0, 0, 450.0, 'PENDING', '2026-04-11 11:30:00', (SELECT id FROM users WHERE email = 'rahul@email.com' LIMIT 1), (SELECT id FROM slots WHERE start_time = '11:00:00' LIMIT 1));

-- Insert add-ons limits and prices
-- Assuming there are AddOn or SlotPricing tables if needed
