ALTER TABLE offers
    RENAME is_active TO active;

ALTER TABLE rooms
    RENAME is_active TO active;

ALTER TABLE employees
    RENAME is_active TO active;
