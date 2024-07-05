import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events') // Replace with your actual API endpoint
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/events/${id}`)
      .then(() => setEvents(events.filter(event => event.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event.id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p>{event.description}</p>
            <Link to={`/events/${event.id}/edit`} className="text-blue-500 mr-4">Edit</Link>
            <button onClick={() => handleDelete(event.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
