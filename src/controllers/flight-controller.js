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
        console.log("debug_createFlight", req.body)
        // const flight = await FlightService.createFlight({
        //     flightNumber: req.body.flightNumber,
        //     airplaneId: req.body.airplaneId,
        //     departureAirportId: Number(req.body.departureAirportId),
        //     arrivalAirportId: Number(req.body.arrivalAirportId),
        //     arrivalTime: req.body.arrivalTime,
        //     departureTime: req.body.departureTime,
        //     price: req.body.price,
        //     boardingGate: req.body.boardingGate,
        //     totalSeats: req.body.totalSeats
        // });
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber.trim(), // remove trailing space
            airplaneId: Number(req.body.airplaneId),
            departureAirportId: Number(req.body.departureAirportId),
            arrivalAirportId: Number(req.body.arrivalAirportId),
            arrivalTime: new Date(req.body.arrivalTime.trim()),   // trim + Date()
            departureTime: new Date(req.body.departureTime.trim()), // Date()
            price: Number(req.body.price),
            boardingGate: req.body.boardingGate.trim(),
            totalSeats: Number(req.body.totalSeats),
        });
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