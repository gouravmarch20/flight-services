'use strict';
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes', [
      { modelNumber: 'Airbus A320', capacity: 180, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'Boeing 737', capacity: 200, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'Airbus A330', capacity: 250, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'Boeing 777', capacity: 300, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'Airbus A350', capacity: 320, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'Boeing 787', capacity: 280, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'Embraer E195', capacity: 120, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'Bombardier CS300', capacity: 130, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'Airbus A380', capacity: 500, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'Boeing 747', capacity: 450, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airplanes', {
      [Op.or]: [
        { modelNumber: 'Airbus A320' },
        { modelNumber: 'Boeing 737' },
        { modelNumber: 'Airbus A330' },
        { modelNumber: 'Boeing 777' },
        { modelNumber: 'Airbus A350' },
        { modelNumber: 'Boeing 787' },
        { modelNumber: 'Embraer E195' },
        { modelNumber: 'Bombardier CS300' },
        { modelNumber: 'Airbus A380' },
        { modelNumber: 'Boeing 747' },
      ],
    });
  },
};
