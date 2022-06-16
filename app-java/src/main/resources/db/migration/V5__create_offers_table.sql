CREATE TABLE offers
(
    id        UUID,
    name      VARCHAR(255),
    price     FLOAT,
    details   TEXT,
    is_active BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT offers_pk PRIMARY KEY (id)
);
