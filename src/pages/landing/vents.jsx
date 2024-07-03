import EventsTile from "../../components/eventsTile"
import samaPartyImage from "../../assets/images/samaParty.jpg"
import clubPartyImage from "../../assets/images/clubParty.jpg"

const Vents = () => {
    return (
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
    )
}

export default Vents