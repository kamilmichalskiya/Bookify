ALTER TABLE reservations
    ADD COLUMN company_name varchar(50);
ALTER TABLE reservations
    ADD COLUMN nip varchar(15);
ALTER TABLE reservations
    ADD COLUMN street varchar(50);
ALTER TABLE reservations
    ADD COLUMN postal_code varchar(10);
ALTER TABLE reservations
    ADD COLUMN city varchar(50);
ALTER TABLE reservations
    ADD COLUMN country varchar(50);
