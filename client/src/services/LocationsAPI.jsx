// const API_BASE_URL = '/api/locations'; // Base URL for locations API

// // Function to get all locations
// export const getAllLocations = async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch locations');
//         }
//         const locations = await response.json();
//         return locations;
//     } catch (error) {
//         console.error('Error fetching all locations:', error);
//         throw error;
//     }
// };

// // Function to get a specific location by name
// export const getLocationByName = async (locationName) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/${locationName}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch location');
//         }
//         const location = await response.json();
//         return location;
//     } catch (error) {
//         console.error('Error fetching location:', error);
//         throw error;
//     }
// };

import React, { useState, useEffect } from 'react';

const LocationsAPI = () => {
  const [eventsData, setEventsData] = useState([]);
  const [venue1, setVenue1] = useState([]);
  const [venue2, setVenue2] = useState([]);
  const [venue3, setVenue3] = useState([]);
  const [venue4, setVenue4] = useState([]);

  useEffect(() => {
    // Fetch your events data from the API or use your existing data source
    const fetchData = async () => {
      try {
        // Replace this with your API call or data source
        const response = await fetch('http://localhost:3001/api/events');
        const data = await response.json();
        setEventsData(data);

        // Separate events by location
        const groupedEvents = groupEventsByLocation(data);
        setVenue1(groupedEvents['BTS Hall'] || []);
        setVenue2(groupedEvents['Viet Hits'] || []);
        setVenue3(groupedEvents['JP Culture'] || []);
        setVenue4(groupedEvents['Koni'] || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Function to group events by location
  const groupEventsByLocation = (events) => {
    return events.reduce((grouped, event) => {
      const location = event.location;
      if (!grouped[location]) {
        grouped[location] = [];
      }
      grouped[location].push(event);
      return grouped;
    }, {});
  };

  return (
    <div>
      
    </div>
  );
};

export default LocationsAPI;