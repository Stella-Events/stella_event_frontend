import EventsTile from "../../components/eventsTile"
import samaPartyImage from "../../assets/images/samaParty.jpg"
import clubPartyImage from "../../assets/images/clubParty.jpg"
import { LocateIcon } from "lucide-react"
import clubParty from "../../assets/images/clubParty.jpg"

const ProEvents = () => {
    return (
        <div>
            <div>
                <div className="h-14 max-w-full bg-[#ffffff]"></div>

                <div className="h-56 max-w-full bg-[#000000] flex flex-row justify-evenly relative">

                    <img src={clubParty} alt="party-flier" className="h-80 w-60 rounded-3xl absolute -top-12 left-14" />

                    <div className="flex flex-row justify-evenly ml-20">
                        <div className="flex flex-col font-sans text-4xl mt-12 ml-30 text-white">
                            <span>30th July</span>
                            <span className="flex flex-row gap-x-5"> <LocateIcon className="size-[20px] mt-3" /> <span> | </span>Vienna City</span>
                        </div>

                        <div className="text-[#c57816] font-bold flex flex-col text-center text-4xl font-sans mt-12 ml-20">
                            <span>Chale Wote</span>
                            <span>Street Art </span>
                            <span>Festival </span>
                        </div>
                    </div>
                </div>

                <button className="h-10 w-60 bg-[#c57816] text-white font-sans font-bold absolute bottom-80 ml-96 rounded-3xl">
                    Ticket  &  Details </button>

                <div className="h-10 max-w-full bg-[#ffffff]"></div>
            </div>

            <div className="flex flex-col gap-y-20">

                <div className="flex flex-col justify-center items-center gap-y-10">
                    <div>
                        <h1 className="font-bold text-6xl">Upcoming Stella Events</h1>
                    </div>

                    <div className="flex items-center gap-x-4
                       bg-white h-10 rounded-lg border border-[#c57816] hover:border-4
                       w-80">

                        <input
                            type="text"
                            className="flex-grow bg-transparent border-none focus:outline-none"
                            placeholder="Search Event Here" />
                    </div>

                </div>

                <div className=" flex flex-wrap gap-4 justify-center items-center">

                    <EventsTile card={samaPartyImage} name="Dirty Rave" ticket="500cedis" time="8pm - 2am" location="THE GROOVE" />
                    <EventsTile card={clubPartyImage} name="Clean Rave" ticket="500cedis" time="8pm - 2am" location="THE GROOVE" />
                    <EventsTile card={clubPartyImage} name="Clean Rave" ticket="500cedis" time="8pm - 2am" location="THE GROOVE" />
                    <EventsTile card={clubPartyImage} name="Clean Rave" ticket="500cedis" time="8pm - 2am" location="THE GROOVE" />
                    <EventsTile card={clubPartyImage} name="Clean Rave" ticket="500cedis" time="8pm - 2am" location="THE GROOVE" />
                    <EventsTile card={clubPartyImage} name="Clean Rave" ticket="500cedis" time="8pm - 2am" location="THE GROOVE" />
                </div>

            </div>
        </div>
    )
}

export default ProEvents