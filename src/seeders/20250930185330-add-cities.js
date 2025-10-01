'use strict';
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      { name: 'New Delhi', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mumbai', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bangalore', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chennai', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kolkata', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hyderabad', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pune', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ahmedabad', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jaipur', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Goa', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', {
      [Op.or]: [
        { name: 'New Delhi' },
        { name: 'Mumbai' },
        { name: 'Bangalore' },
        { name: 'Chennai' },
        { name: 'Kolkata' },
        { name: 'Hyderabad' },
        { name: 'Pune' },
        { name: 'Ahmedabad' },
        { name: 'Jaipur' },
        { name: 'Goa' },
      ],
    });
  },
};
