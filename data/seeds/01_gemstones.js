
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('gemstones').del()
    .then(function () {
      // Inserts seed entries
      return knex('gemstones').insert([
        { id: 1, stone: 'Garnet', color: 'Dark Red' },
        { id: 2, stone: 'Amethyst', color: 'Violet' },
        { id: 3, stone: 'Aquamarine', color: 'Cyan' },
        { id: 4, stone: 'Quartz', color: 'Clear' },
        { id: 5, stone: 'Emerald', color: 'Dark Green' },
        { id: 6, stone: 'Alexandrite', color: 'Variable' },
        { id: 7, stone: 'Ruby', color: 'Red' },
        { id: 8, stone: 'Peridot', color: 'Olive Green' },
        { id: 9, stone: 'Lapis Lazuli', color: 'Deep Blue' },
        { id: 10, stone: 'Opal', color: 'Multi color' },
        { id: 11, stone: 'Citrine', color: 'Dark Yellow' },
        { id: 12, stone: 'Turquoise', color: 'Turquoise' }
      ]);
    });
};
