'use strict';
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flights', [
      {
        flightNumber: 'AI101',
        airplaneId: 1,
        departureAirportId: 'DEL',
        arrivalAirportId: 'BOM',
        departureTime: new Date('2025-10-01T09:00:00'),
        arrivalTime: new Date('2025-10-01T12:00:00'),
        price: 5000,
        boardingGate: 'A1',
        totalSeats: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'AI102',
        airplaneId: 2,
        departureAirportId: 'BOM',
        arrivalAirportId: 'BLR',
        departureTime: new Date('2025-10-01T14:00:00'),
        arrivalTime: new Date('2025-10-01T17:00:00'),
        price: 4500,
        boardingGate: 'B2',
        totalSeats: 450,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'AI103',
        airplaneId: 3,
        departureAirportId: 'BLR',
        arrivalAirportId: 'MAA',
        departureTime: new Date('2025-10-02T06:00:00'),
        arrivalTime: new Date('2025-10-02T08:30:00'),
        price: 4000,
        boardingGate: 'C1',
        totalSeats: 350,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'AI104',
        airplaneId: 4,
        departureAirportId: 'MAA',
        arrivalAirportId: 'CCU',
        departureTime: new Date('2025-10-02T11:00:00'),
        arrivalTime: new Date('2025-10-02T13:30:00'),
        price: 4200,
        boardingGate: 'D3',
        totalSeats: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'AI105',
        airplaneId: 5,
        departureAirportId: 'CCU',
        arrivalAirportId: 'HYD',
        departureTime: new Date('2025-10-03T07:00:00'),
        arrivalTime: new Date('2025-10-03T09:30:00'),
        price: 4800,
        boardingGate: 'E2',
        totalSeats: 320,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'AI106',
        airplaneId: 6,
        departureAirportId: 'HYD',
        arrivalAirportId: 'PNQ',
        departureTime: new Date('2025-10-03T12:00:00'),
        arrivalTime: new Date('2025-10-03T14:00:00'),
        price: 4600,
        boardingGate: 'F1',
        totalSeats: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'AI107',
        airplaneId: 7,
        departureAirportId: 'PNQ',
        arrivalAirportId: 'AMD',
        departureTime: new Date('2025-10-04T08:00:00'),
        arrivalTime: new Date('2025-10-04T09:30:00'),
        price: 4300,
        boardingGate: 'G4',
        totalSeats: 280,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'AI108',
        airplaneId: 8,
        departureAirportId: 'AMD',
        arrivalAirportId: 'JAI',
        departureTime: new Date('2025-10-04T10:00:00'),
        arrivalTime: new Date('2025-10-04T11:30:00'),
        price: 4100,
        boardingGate: 'H2',
        totalSeats: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'AI109',
        airplaneId: 9,
        departureAirportId: 'JAI',
        arrivalAirportId: 'GOI',
        departureTime: new Date('2025-10-05T06:00:00'),
        arrivalTime: new Date('2025-10-05T08:00:00'),
        price: 4700,
        boardingGate: 'I3',
        totalSeats: 320,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'AI110',
        airplaneId: 10,
        departureAirportId: 'GOI',
        arrivalAirportId: 'DEL',
        departureTime: new Date('2025-10-05T12:00:00'),
        arrivalTime: new Date('2025-10-05T15:00:00'),
        price: 5000,
        boardingGate: 'J1',
        totalSeats: 350,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Flights', {
      [Op.or]: [
        { flightNumber: 'AI101' },
        { flightNumber: 'AI102' },
        { flightNumber: 'AI103' },
        { flightNumber: 'AI104' },
        { flightNumber: 'AI105' },
        { flightNumber: 'AI106' },
        { flightNumber: 'AI107' },
        { flightNumber: 'AI108' },
        { flightNumber: 'AI109' },
        { flightNumber: 'AI110' },
      ]
    });
  }
};
