
// import { LocateIcon } from "lucide-react"
import clubParty from "../../assets/images/clubParty.jpg"

const Banner = () => {
    return (
        <div>
            <div className="h-14 max-w-full bg-[#ffffff]"></div>

            <div className="h-56 max-w-full bg-[#000000] flex flex-row justify-evenly relative">

                <img src={clubParty} alt="party-flier" className="h-80 w-60 rounded-3xl absolute -top-12 left-14" />

                <div className="flex flex-row justify-evenly ml-20">
                    <div>
                    <div className="h-1 w-80 bg-[#c57816] absolute inset-x-0 -bottom-40 "></div>
                    <div className="h-1 w-80 bg-[#c57816] absolute -bottom-40 right-0"></div> 
                    </div>

                    <div className="flex flex-col font-sans text-center text-4xl mt-12 ml-30 text-white">
                        <span className="font-bold">30th July</span>
                        <span className="flex flex-row font-bold gap-x-5 break-word"> Vienna  City</span>
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
    )
}

export default Banner