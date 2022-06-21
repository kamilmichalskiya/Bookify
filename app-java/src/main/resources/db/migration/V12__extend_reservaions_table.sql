ALTER TABLE reservations
    ADD COLUMN total_price FLOAT NOT NULL DEFAULT 0;
ALTER TABLE reservations
    ADD COLUMN paid BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE reservations
    ADD COLUMN customer_name VARCHAR(20) NOT NULL DEFAULT '';
ALTER TABLE reservations
    ADD COLUMN customer_surname VARCHAR(40) NOT NULL DEFAULT '';
ALTER TABLE reservations
    ADD COLUMN customer_email VARCHAR(60) NOT NULL DEFAULT '';
ALTER TABLE reservations
    ADD COLUMN guest_name VARCHAR(20) NOT NULL DEFAULT '';
ALTER TABLE reservations
    ADD COLUMN guest_surname VARCHAR(40) NOT NULL DEFAULT '';
ALTER TABLE reservations
    ADD COLUMN guest_email VARCHAR(60) NOT NULL DEFAULT '';
ALTER TABLE reservations
    ADD COLUMN active BOOLEAN NOT NULL DEFAULT FALSE;

CREATE TABLE reservations_offers
(
    reservation_id UUID NOT NULL
        CONSTRAINT fk_reservations REFERENCES reservations (id),
    offer_id       UUID NOT NULL
        CONSTRAINT fk_offers REFERENCES offers (id),
    CONSTRAINT pk_reservations_offers PRIMARY KEY (reservation_id, offer_id)
);

UPDATE reservations
SET total_price      = 110,
    paid             = true,
    customer_name    = 'Kamil',
    customer_surname = 'Kowalski',
    customer_email   = 'kamil@kowalski.pl',
    guest_name       = 'Kamil',
    guest_surname    = 'Kowalski',
    guest_email      = 'kamil@kowalski.pl',
    active           = true
where id = '51864009-92d2-4167-8113-a6a5da41b746';

UPDATE reservations
SET total_price      = 220,
    paid             = true,
    customer_name    = 'Damian',
    customer_surname = 'Nowak',
    customer_email   = 'damian@nowak.pl',
    guest_name       = 'Damian',
    guest_surname    = 'Nowak',
    guest_email      = 'damian@nowak.pl',
    active           = true
where id = 'c1a8de54-33bb-47cb-b0d4-79c63de14e40';

UPDATE reservations
SET total_price      = 330,
    paid             = false,
    customer_name    = 'Tomek',
    customer_surname = 'Polak',
    customer_email   = 'tomek@polak.pl',
    guest_name       = 'Tomek',
    guest_surname    = 'Polak',
    guest_email      = 'tomek@polak.pl',
    active           = true
where id = '1854fa82-c11f-4d61-8b6f-7c20137cd12f';

INSERT INTO reservations_offers (reservation_id, offer_id)
VALUES ('51864009-92d2-4167-8113-a6a5da41b746', '35a9beaa-c154-4c55-b37a-9733ffb60822'),
       ('c1a8de54-33bb-47cb-b0d4-79c63de14e40', '35a9beaa-c154-4c55-b37a-9733ffb60822'),
       ('c1a8de54-33bb-47cb-b0d4-79c63de14e40', '35a9beaa-c154-4c55-b37a-9733ffb60823')
ON CONFLICT (reservation_id, offer_id) DO NOTHING;

