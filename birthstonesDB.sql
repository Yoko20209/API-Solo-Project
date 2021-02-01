begin transaction;

CREATE TABLE birthstones (
    month serial primary key,
    stone text,
    color text
);

INSERT INTO birthstones (stone, color)
VALUES
('Garnet', 'Dark Red'),
('Amethyst', 'Violet'),
('Aquamarine', 'Cyan'),
('Quartz', 'Clear'),
('Emerald', 'Dark Green'),
('Alexandrite', 'Variable'),
('Ruby', 'Red'),
('Peridot', 'Olive Green'),
('Lapis Lazuli', 'Deep Blue'),
('Opal', 'Multi color'),
('Citrine', 'Dark Yellow'),
('Turquoise', 'Turquoise');

COMMIT;