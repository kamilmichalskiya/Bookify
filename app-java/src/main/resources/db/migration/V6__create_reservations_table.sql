CREATE TABLE reservations
(
    id         UUID,
    start_date DATE,
    end_date   DATE,
    room_id    UUID,
    CONSTRAINT reservations_pk PRIMARY KEY (id),
    CONSTRAINT reservations_rooms_fk FOREIGN KEY (room_id) REFERENCES rooms (id)
);
