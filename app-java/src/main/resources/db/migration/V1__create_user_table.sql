CREATE TABLE users
(
    id       uuid         NOT NULL,
    username varchar(255) NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)
