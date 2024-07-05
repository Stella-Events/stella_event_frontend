import axios from 'axios';
import React, { useState } from 'react';

const ContactForm = () => {
  //Post events to backend
  const postEvent = async(event) => {
    event.preventDefault();
    //Collect all inputs from form
    const formData = new FormData(event.target);
    // Post data to backend
    const response =await axios.post('https://stella-event-backend.onrender.com/events', formData)
    console.log(response)
  }

  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventMedia, setEventMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      eventName,
      eventDate,
      eventLocation,
      eventDescription,
      eventMedia,
    });
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-[200px]">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#F59E0B]">CONTACT US    </h2>
        <form onSubmit={postEvent} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventName">
               Your Name
            </label>
            <input
              type="text"
              id="yourName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className=''>

          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventDate">
              Your Email Address
            </label>
            <input
              type="email"
              id="email"
              value= 'type your email'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventLocation">
Phone Number            </label>
            <input
              type="text"
              id="phone number"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventDescription">
              Your Message
            </label>
            <textarea
              id="eventDescription"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              required
            ></textarea>
          </div>
          
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#FE9C25] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
