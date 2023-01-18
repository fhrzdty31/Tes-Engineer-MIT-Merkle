'use strict';

const md5 = require('md5')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('admins', [{
      username: 'admin',
      email: 'email@example.com',
      password: md5('admin123'),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
