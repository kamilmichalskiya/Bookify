INSERT INTO rooms (id, image, room_type, price, capacity, description, area)
VALUES ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Image', 'BUDGET', 12.0, 2, 'Description', 10),
       ('b1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Image', 'STANDARD', 11.0, 1, 'Description', 20),
       ('c1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Image', 'PREMIUM', 10.0, 3, 'Description', 100),
       ('d1dd8537-706b-4b28-a613-46976119e817'::uuid, 'Image', 'BUDGET', 9.0, 2, 'Description', 50)
ON CONFLICT (id) DO NOTHING;

INSERT INTO offer_details (room_id, offer_detail)
VALUES ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'FREE_WIFI'),
       ('b1dd8537-706b-4b28-a613-46976119e817'::uuid, 'FREE_WIFI'),
       ('c1dd8537-706b-4b28-a613-46976119e817'::uuid, 'FREE_WIFI'),
       ('d1dd8537-706b-4b28-a613-46976119e817'::uuid, 'FREE_WIFI')
ON CONFLICT (room_id,offer_detail) DO NOTHING;

INSERT INTO beds (room_id, bed)
VALUES ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'DOUBLE_BED'),
       ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'SINGLE_BED'),
       ('b1dd8537-706b-4b28-a613-46976119e817'::uuid, 'DOUBLE_BED'),
       ('c1dd8537-706b-4b28-a613-46976119e817'::uuid, 'DOUBLE_BED'),
       ('d1dd8537-706b-4b28-a613-46976119e817'::uuid, 'DOUBLE_BED')
ON CONFLICT (room_id, bed) DO NOTHING;

INSERT INTO add_ons (room_id, add_on)
VALUES ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'TELEPHONE'),
       ('b1dd8537-706b-4b28-a613-46976119e817'::uuid, 'TELEPHONE'),
       ('c1dd8537-706b-4b28-a613-46976119e817'::uuid, 'TELEPHONE'),
       ('d1dd8537-706b-4b28-a613-46976119e817'::uuid, 'TELEPHONE')
ON CONFLICT (room_id,add_on) DO NOTHING;

INSERT INTO accessories (room_id, accessory)
VALUES ('a1dd8537-706b-4b28-a613-46976119e817'::uuid, 'TABLE'),
       ('b1dd8537-706b-4b28-a613-46976119e817'::uuid, 'TABLE'),
       ('c1dd8537-706b-4b28-a613-46976119e817'::uuid, 'TABLE'),
       ('d1dd8537-706b-4b28-a613-46976119e817'::uuid, 'TABLE')
ON CONFLICT (room_id,accessory) DO NOTHING;
