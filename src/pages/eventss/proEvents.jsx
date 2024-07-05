import EventsTile from "../../components/eventsTile"
import samaPartyImage from "../../assets/images/samaParty.jpg"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Vents = () => {
    // (fetching data)Define a state to store events
    const [events, setEvents] = useState([]);

    // Define a function to fetch events
    const getEvents = async () => {
        const response = await axios.get('https://stella-event-backend.onrender.com/events');
        if (response.status === 200) {
            setEvents(response.data);
        } else {
            setEvents([]);
        }
    }

    // Get events
    useEffect(() => {
        getEvents();
    }, []);

    return (
        <div className="flex flex-col gap-y-20">

            <div className="flex flex-col justify-center items-center gap-y-10">
                <div>
                    <h1 className="font-bold text-6xl">Upcoming Stella Events</h1>
                </div>

                          {/*  SEARCH TABS DIV*/}
                    <div className="flex flex-row gap-x-10">
                                {/* SEARCH BY DATE */}
                        <div className="flex items-center gap-x-4
                              bg-white h-10 rounded-lg border border-[#c57816] 
                                hover:border-4
                                w-80">

                            <input
                                type="date"
                                className="flex-grow bg-transparent border-none focus:outline-none"
                                placeholder="" />
                        </div>


                            {/* SEARCH BY EVENT */}
                        <div className="flex items-center gap-x-4
                       bg-white h-10 rounded-lg border border-[#c57816] hover:border-4
                       w-80">

                            <input
                                type="text"
                                className="flex-grow bg-transparent border-none focus:outline-none"
                                placeholder="Search Event Here" />
                        </div>

                    </div>    

            </div>

            <div className=" flex flex-wrap gap-4 justify-center items-center">

                {events.map(event => (
                    <EventsTile
                        card={`https://savefiles.org/${event.image}?shareable_link=281`}
                        name={event.name}
                        ticket={event.price}
                        time={event.time}
                        location={event.location}
                    />
                ))}

            </div>

        </div>
    )
}

export default Vents