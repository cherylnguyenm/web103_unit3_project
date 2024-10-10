// import express from 'express';
// import { getEvents, getEventsByLocation, getEventById } from '../controllers/eventsController.js'; // Import the controller functions

// const router = express.Router();

// // Route to get all events
// router.get('/', getEvents);

// // Route to get events by location
// router.get('/:location', getEventsByLocation);

// // Route to get a specific event by ID
// router.get('/event/:id', getEventById);

// export default router;

import express from 'express'
import EventsController from '../controllers/events.js'
// import controllers for events and locations


const router = express.Router()

// define routes to get events and locations

router.get('/', EventsController.getEvents);


export default router