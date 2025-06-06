module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('vehicles', [
      {
        registration: 'AB123CD',
        make: 'Toyota',
        model: 'Yaris',
        year: 2018,
        rentalPrice: 45.99
      },
      {
        registration: 'EF456GH',
        make: 'Peugeot',
        model: '208',
        year: 2020,
        rentalPrice: 49.90
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vehicles', null, {});
  }
};
// npx sequelize-cli db:seed:all --config sequelize.config.js --seeders-path src/seeders
