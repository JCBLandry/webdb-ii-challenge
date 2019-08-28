
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1111', Make: 'Honda', Model: 'Accord', Mileage: '1000 Miles', TitleStatus: 'Salvage'},
        {VIN: '2222', Make: 'Toyoda', Model: 'Tokoda', Mileage: '1000 Miles',TitleStatus: 'Salvage'},
        {VIN: '3333', Make: 'Saturn', Model: 'Something', Mileage: '1000 Miles', TitleStatus: 'Salvage'},
      ]);
    });
};
