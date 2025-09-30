'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      { name: 'New Delhi', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mumbai', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bangalore', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chennai', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kolkata', createdAt: new Date(), updatedAt: new Date() },
    ]);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
