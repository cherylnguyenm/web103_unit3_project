// Function to format the event time
export const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Function to calculate remaining time until the event
export const formatRemainingTime = (eventTime) => {
    const currentTime = new Date();
    const eventDateTime = new Date(eventTime);
    const timeDifference = eventDateTime - currentTime;

    const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    if (timeDifference > 0) {
        return `${hoursRemaining} hours and ${minutesRemaining} minutes remaining`;
    } else {
        return 'Event has passed';
    }
};

// Function to handle negative remaining time if needed
export const formatNegativeTimeRemaining = (remaining, eventId) => {
    const element = document.getElementById(`remaining-${eventId}`);
    if (remaining.includes('passed')) {
        element.style.color = 'red';
    } else {
        element.style.color = 'green';
    }
};
