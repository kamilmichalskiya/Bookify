UPDATE rooms
SET image = ''
WHERE image IS NULL;

ALTER TABLE rooms
    ALTER COLUMN image SET NOT NULL;

UPDATE rooms
SET room_type = 'Budget'
WHERE room_type IS NULL;

ALTER TABLE rooms
    ALTER COLUMN room_type SET NOT NULL;

UPDATE rooms
SET price = 0
WHERE price IS NULL;

ALTER TABLE rooms
    ALTER COLUMN price SET NOT NULL;

UPDATE rooms
SET capacity = 0
WHERE capacity IS NULL;

ALTER TABLE rooms
    ALTER COLUMN capacity SET NOT NULL;

UPDATE rooms
SET description = ''
WHERE description IS NULL;

ALTER TABLE rooms
    ALTER COLUMN description SET NOT NULL;

UPDATE rooms
SET area = 0
WHERE area IS NULL;

ALTER TABLE rooms
    ALTER COLUMN area SET NOT NULL;

ALTER TABLE rooms
    ADD COLUMN single_beds INT NOT NULL DEFAULT 0;

ALTER TABLE rooms
    ADD COLUMN double_beds INT NOT NULL DEFAULT 0;

DROP TABLE offer_details;
DROP TABLE beds;
