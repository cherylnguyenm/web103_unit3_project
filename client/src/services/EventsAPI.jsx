// const API_BASE_URL = '/api/events'; // Base URL for events API

// // Function to get all events
// export const getAllEvents = async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch events');
//         }
//         const events = await response.json();
//         return events;
//     } catch (error) {
//         console.error('Error fetching all events:', error);
//         throw error;
//     }
// };

// // Function to get events by location
// export const getEventsByLocation = async (locationName) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/${locationName}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch events for location');
//         }
//         const events = await response.json();
//         return events;
//     } catch (error) {
//         console.error(`Error fetching events for location ${locationName}:`, error);
//         throw error;
//     }
// };

// // Function to get an event by its ID
// export const getEventById = async (eventId) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/event/${eventId}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch the event');
//         }
//         const event = await response.json();
//         return event;
//     } catch (error) {
//         console.error(`Error fetching event with ID ${eventId}:`, error);
//         throw error;
//     }
// };

import React from 'react'

const EventsAPI = () => {
  return (
    <div>EventsAPI</div>
  )
}

export default EventsAPI
