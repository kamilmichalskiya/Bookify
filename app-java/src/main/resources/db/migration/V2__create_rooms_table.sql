CREATE TABLE rooms
(
    id          uuid,
    image       text,
    room_type   varchar(255),
    price       float,
    capacity    int,
    description text,
    area        int,
    constraint rooms_pk primary key (id)
);

CREATE TABLE beds
(
    room_id uuid,
    bed     varchar(255),
    constraint beds_room_id_fk foreign key (room_id) references rooms (id)
);

CREATE TABLE add_ons
(
    room_id uuid,
    add_on  varchar(255),
    constraint add_ons_room_id_fk foreign key (room_id) references rooms (id)
);

CREATE TABLE accessories
(
    room_id   uuid,
    accessory varchar(255),
    constraint accessories_room_id_fk foreign key (room_id) references rooms (id)
);

CREATE TABLE offer_details
(
    room_id      uuid,
    offer_detail varchar(255),
    constraint offer_details_room_id_fk foreign key (room_id) references rooms (id)
);
