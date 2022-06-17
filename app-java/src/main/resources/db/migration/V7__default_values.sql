INSERT INTO employees (id, email, password, name, surname, is_active)
VALUES (100000, 'emp1@gmail.com', 'password1', 'name1', 'surname1', true),
       (100001, 'emp2@gmail.com', 'password2', 'name2', 'surname2', true),
       (100002, 'emp3@gmail.com', 'password3', 'name3', 'surname3', true),
       (100003, 'emp4@gmail.com', 'password4', 'name4', 'surname4', false)
ON CONFLICT (id) DO NOTHING;

INSERT INTO offers (id, name, price, details)
VALUES ('35a9beaa-c154-4c55-b37a-9733ffb60822', 'Dinner', 221.0, 'Dinner details'),
       ('35a9beaa-c154-4c55-b37a-9733ffb60823', 'Parking', 11.5, 'Parking details')
ON CONFLICT (id) DO NOTHING;

INSERT INTO rooms (id, image, room_type, price, capacity, description, area)
VALUES ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Image', 'BUDGET', 12.0, 2, 'Budget nr 1 description', 10),
       ('b1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Image', 'STANDARD', 11.0, 1, 'Standard description', 20),
       ('c1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Image', 'PREMIUM', 10.0, 3, 'Premium description', 100),
       ('d1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Image', 'BUDGET', 9.0, 2, 'Budget nr 2 description', 50)
ON CONFLICT (id) DO NOTHING;

INSERT INTO offer_details (room_id, offer_detail)
VALUES ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Darmowe Wi-Fi'),
       ('b1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Darmowe Wi-Fi'),
       ('c1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Darmowe Wi-Fi'),
       ('d1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Darmowe Wi-Fi')
ON CONFLICT (room_id,offer_detail) DO NOTHING;

INSERT INTO beds (room_id, bed)
VALUES ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Podwójne łóżko'),
       ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Pojedyncze łóżko'),
       ('b1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Podwójne łóżko'),
       ('c1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Podwójne łóżko'),
       ('d1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Podwójne łóżko')
ON CONFLICT (room_id, bed) DO NOTHING;

INSERT INTO add_ons (room_id, add_on)
VALUES ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Telefon'),
       ('b1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Telefon'),
       ('c1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Telefon'),
       ('d1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Telefon')
ON CONFLICT (room_id,add_on) DO NOTHING;

INSERT INTO accessories (room_id, accessory)
VALUES ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Stół'),
       ('b1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Stół'),
       ('c1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Stół'),
       ('d1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Stół')
ON CONFLICT (room_id,accessory) DO NOTHING;

INSERT INTO reservations (id, room_id, start_date, end_date)
VALUES ('51864009-92d2-4167-8113-a6a5da41b746', 'a1dd8537-706b-4b28-a613-46976119e817', '2022-06-24', '2022-06-27'),
       ('c1a8de54-33bb-47cb-b0d4-79c63de14e40', 'a1dd8537-706b-4b28-a613-46976119e817', '2022-06-29', '2022-07-01'),
       ('1854fa82-c11f-4d61-8b6f-7c20137cd12f', 'b1dd8537-706b-4b28-a613-46976119e817', '2022-06-26', '2022-06-28')
ON CONFLICT (id) DO NOTHING;

