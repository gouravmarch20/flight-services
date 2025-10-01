const { StatusCodes } = require('http-status-codes');

const { FlightService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /flights 
 * req-body {
 *  flightNumber: 'UK 808',
 *  airplaneId: 'a380',
 *  departureAirportId: 12,
 *  arrivalAirportId: 11,
 *  arrivalTime: '11:10:00',
 *  departureTime: '9:10:00',
 *  price: 2000
 *  boardingGate: '12A',
 *  totalSeats: 120
 * }
 */
async function createFlight(req, res) {
    try {

        //   const flight = _createFlight" , req.body)

        const flightData = {
            flightNumber: req.body.flightNumber ? req.body.flightNumber.trim() : null,
            airplaneId: parseInt(req.body.airplaneId),
            departureAirportId: req.body.departureAirportId ? req.body.departureAirportId.trim() : null,
            arrivalAirportId: req.body.arrivalAirportId ? req.body.arrivalAirportId.trim() : null,
            arrivalTime: new Date(req.body.arrivalTime.trim()),   // trim spaces
            departureTime: new Date(req.body.departureTime.trim()),
            price: parseInt(req.body.price),
            boardingGate: req.body.boardingGate ? req.body.boardingGate.trim() : null,
            totalSeats: parseInt(req.body.totalSeats)
        };
        const flight = await FlightService.createFlight(flightData);
        console.log("debug_createFlight", flightData)

        SuccessResponse.data = flight;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function getAllFlights(req, res) {
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * POST : /flights/:id 
 * req-body {}
 */
async function getFlight(req, res) {
    try {
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function updateSeats(req, res) {
    try {
        console.log(req.body);
        const response = await FlightService.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats,
            dec: req.body.dec
        });
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}


module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}