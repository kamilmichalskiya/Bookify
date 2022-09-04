CREATE TABLE logs
(
    id        UUID PRIMARY KEY,
    log_date  TIMESTAMP   NOT NULL,
    username  VARCHAR(50) NOT NULL,
    message   VARCHAR     NOT NULL,
    type      VARCHAR(10) NOT NULL,
    user_role VARCHAR(20),
    session   VARCHAR(50)
);
