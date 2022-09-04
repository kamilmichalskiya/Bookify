ALTER TABLE rooms
    ADD COLUMN room_number int;

CREATE SEQUENCE room_number_seq
    MINVALUE 1
    MAXVALUE 999999
    CYCLE;

UPDATE rooms
SET room_number = nextval('room_number_seq'::regclass);

DROP SEQUENCE room_number_seq;

ALTER TABLE rooms
    ADD CONSTRAINT room_number_unique UNIQUE (room_number);

ALTER TABLE rooms
    ALTER COLUMN room_number SET NOT NULL;
