begin transaction;

CREATE TABLE gemstones (
    id serial primary key,
    stone text,
    color text
);

INSERT INTO gemstones (stone, color)
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