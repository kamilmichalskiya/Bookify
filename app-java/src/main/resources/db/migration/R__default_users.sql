INSERT INTO users (id, username)
VALUES ('35a9beaa-c154-4c55-b37a-9733ffb608b4', 'admin'),
       ('733dd32a-fc43-443b-9dc3-664080881969', 'supervisor')
ON CONFLICT (id) DO NOTHING;
