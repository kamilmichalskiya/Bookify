ALTER TABLE employees
    ADD COLUMN is_active BOOLEAN DEFAULT FALSE;

UPDATE employees
SET is_active = FALSE
WHERE employees.is_active IS NULL;

ALTER TABLE employees
    ALTER COLUMN is_active SET NOT NULL;
