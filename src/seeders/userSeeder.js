const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hash = await bcrypt.hash('admin123', 10);
    await queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        password: hash
      },
      {
        name: 'john',
        password: await bcrypt.hash('password123', 10)
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
