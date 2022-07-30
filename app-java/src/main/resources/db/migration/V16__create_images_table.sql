CREATE TABLE images
(
    room_id   UUID,
    image_url text,
    CONSTRAINT images_rooms_fk FOREIGN KEY (room_id) REFERENCES rooms (id)
);

INSERT INTO images(room_id, image_url)
SELECT id, image
FROM rooms;

ALTER TABLE rooms
    DROP COLUMN image;
