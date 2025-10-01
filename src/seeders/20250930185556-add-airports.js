'use strict';
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airports', [
      { name: 'Indira Gandhi International', code: 'DEL', address: 'Palam, New Delhi', cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chhatrapati Shivaji International', code: 'BOM', address: 'Mumbai', cityId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kempegowda International', code: 'BLR', address: 'Bangalore', cityId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chennai International', code: 'MAA', address: 'Chennai', cityId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Netaji Subhas Chandra Bose International', code: 'CCU', address: 'Kolkata', cityId: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rajiv Gandhi International', code: 'HYD', address: 'Hyderabad', cityId: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pune Airport', code: 'PNQ', address: 'Pune', cityId: 7, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sardar Vallabhbhai Patel International', code: 'AMD', address: 'Ahmedabad', cityId: 8, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jaipur International', code: 'JAI', address: 'Jaipur', cityId: 9, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Goa International', code: 'GOI', address: 'Goa', cityId: 10, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airports', {
      [Op.or]: [
        { code: 'DEL' },
        { code: 'BOM' },
        { code: 'BLR' },
        { code: 'MAA' },
        { code: 'CCU' },
        { code: 'HYD' },
        { code: 'PNQ' },
        { code: 'AMD' },
        { code: 'JAI' },
        { code: 'GOI' },
      ]
    });
  }
};
