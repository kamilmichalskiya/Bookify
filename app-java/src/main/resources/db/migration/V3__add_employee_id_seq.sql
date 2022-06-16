CREATE SEQUENCE emp_id_seq
    MINVALUE 100000
    MAXVALUE 999999
    CYCLE;


CREATE TABLE employees
(
    id       int         NOT NULL DEFAULT nextval('emp_id_seq'::regclass),
    name     varchar(20) NOT NULL,
    surname  varchar(40) NOT NULL,
    email    varchar(60) NOT NULL,
    password varchar(50) NOT NULL,
    constraint employees_pk primary key (id)
);
