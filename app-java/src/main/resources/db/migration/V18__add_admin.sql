UPDATE employees
SET password = '$2a$10$y7yKWE5sFa06nqtveRFu.Ou1MmRHpEC.OB53TLhAT5lZ18hr6Kpbm',
    role     = 'ROLE_EMPLOYEE';

INSERT INTO employees(id, name, surname, email, password, active, role)
VALUES (99995, 'Admin', 'Adminowy', 'admin@admin.com', '$2a$10$F.4TPR1HQwyGNaPkSV6sceST66yC6OUWR97GKrxUVYlR9ON7WqT4G', true, 'ROLE_ADMIN');
