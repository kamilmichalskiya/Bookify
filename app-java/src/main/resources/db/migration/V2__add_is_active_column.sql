ALTER TABLE rooms
    ADD COLUMN is_active BOOLEAN DEFAULT FALSE;

UPDATE rooms
SET is_active = FALSE
WHERE rooms.is_active IS NULL;

ALTER TABLE rooms
    ALTER COLUMN is_active SET NOT NULL;
