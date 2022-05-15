INSERT INTO offers (id, name, price, details)
VALUES ('35a9beaa-c154-4c55-b37a-9733ffb60822', 'Dinner1', 221.0, 'Details1'),
       ('35a9beaa-c154-4c55-b37a-9733ffb60823', 'Dinner2', 11.5, 'Details2')
ON CONFLICT (id) DO NOTHING;

