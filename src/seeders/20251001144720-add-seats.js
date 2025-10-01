'use strict';
// /Users/gourav/Documents/GitHub/flight-services/src/seeders/20251001144720-add-seats.js
module.exports = {
  async up(queryInterface, Sequelize) {
    const seats = [];
    const seatCols = ['A', 'B', 'C', 'D', 'E', 'F']; // 6 seats per row

    // airplanes 1 to 5
    for (let airplaneId = 1; airplaneId <= 5; airplaneId++) {
      for (let row = 1; row <= 10; row++) {  // 10 rows per airplane (change as needed)
        for (let col of seatCols) {
          seats.push({
            airplaneId,
            row,
            col,
            createdAt: new Date(),
            updatedAt: new Date()
          });
        }
      }
    }

    await queryInterface.bulkInsert('Seats', seats, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Seats', null, {});
  }
};
