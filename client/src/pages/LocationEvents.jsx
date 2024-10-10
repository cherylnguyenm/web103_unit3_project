import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import eventsData from '../../../server/data/events'; // Import your static events data
import '../css/LocationEvents.css';

const LocationEvents = ({ index }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Define a list of location names based on the index
  const locations = ['BTS Hall', 'Viet Hits', 'JP Culture', 'Koni'];
  const selectedLocation = locations[index - 1]; // Use the index prop to select the correct location name

  useEffect(() => {
    // Filter events based on the selected location
    const locationEvents = eventsData.filter(event => event.location === selectedLocation);
    setFilteredEvents(locationEvents); // Store the filtered events
  }, [selectedLocation]);

  return (
    <div className='location-events'>
      <header>
        <div className='location-info'>
          <h2>Events at {selectedLocation}</h2>
        </div>
      </header>

      <main>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Event
              key={event.id}
              id={event.id}
              title={event.name}
              date={event.date}
              performer={event.performer}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i> No events scheduled at this location yet!
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;
