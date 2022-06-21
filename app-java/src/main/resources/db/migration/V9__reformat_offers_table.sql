UPDATE offers
SET name = ''
WHERE name IS NULL;

UPDATE offers
SET price = 0
WHERE price IS NULL;

UPDATE offers
SET details = ''
WHERE details IS NULL;

ALTER TABLE offers
    ALTER COLUMN name SET NOT NULL;

ALTER TABLE offers
    ALTER COLUMN price SET NOT NULL;

ALTER TABLE offers
    ALTER COLUMN details SET NOT NULL;
