UPDATE rooms
SET active = TRUE
WHERE id IN ('a1dd8537-706b-4b28-a613-46976119e817', 'b1dd8537-706b-4b28-a613-46976119e817', 'c1dd8537-706b-4b28-a613-46976119e817',
             'd1dd8537-706b-4b28-a613-46976119e817');

UPDATE offers
SET active = TRUE
WHERE id IN ('35a9beaa-c154-4c55-b37a-9733ffb60822', '35a9beaa-c154-4c55-b37a-9733ffb60823');

UPDATE rooms
SET room_type   = 'Budget',
    single_beds = 3
WHERE room_type = 'BUDGET';

UPDATE rooms
SET room_type   = 'Premium',
    double_beds = 2
WHERE room_type = 'PREMIUM';

UPDATE rooms
SET room_type   = 'Standard',
    single_beds = 4,
    double_beds = 2
WHERE room_type = 'STANDARD';

UPDATE employees
SET id = id - 4
WHERE id >= 100000;

UPDATE add_ons
SET add_on = 'WiFi'
WHERE add_on = 'Telefon';
