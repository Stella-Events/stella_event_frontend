

import { Clock8Icon, LocateIcon, TicketIcon } from 'lucide-react'


const EventsTile = ({ card, name, ticket, time, location }) => {
    
    return (
        <div className="h-80 w-2/5 bg-black place-content-center 
                        px-5 py-5 border border-[#c57816] hover:border-4 shadow-xl rounded-xl">

            <div className="flex flex-row justify-center relative gap-10">
                <div>
                    <img src={card} alt="" className="h-60 w-30 border border-[#c57816]" />
                    <div className="h-18 w-16 bg-[#c57816] absolute -top-10 right-0 flex flex-col text-2xl font-bold text-center rounded-b-lg">
                        <span>30th</span>
                        <span>JULY</span>
                    </div>

                </div>

                <div className="flex flex-col gap-y-3 justify-center">
                    <div className="text-4xl font-bold  text-[#c57816] ">{name}</div>
                    <div className= "text-white flex flex-row justify-evenly"><TicketIcon/>{ticket}</div>
                    <div className= "text-white flex flex-row justify-evenly"><Clock8Icon/> {time}</div>
                    <div className= "text-white flex flex-row justify-evenly"><LocateIcon/>{location}</div>

                </div>
            </div>
        </div>

    )
}

export default EventsTile