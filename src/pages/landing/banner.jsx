
import { LocateIcon } from "lucide-react"
import clubParty from "../../assets/images/clubParty.jpg"

const Banner = () => {
    return (
        <div>
            <div className="h-14 max-w-full bg-[#ffffff]"></div>

            <div className="h-56 max-w-full bg-[#000000] flex flex-row justify-evenly relative">

                <img src={clubParty} alt="party-flier" className="h-80 w-60 rounded-3xl absolute -top-12 left-14" />

                <div className="flex flex-row justify-evenly ml-20">
                    <div className="flex flex-col font-sans text-4xl mt-12 ml-30 text-white">
                        <span>30th July</span>
                        <span className="flex flex-row gap-x-5"> <LocateIcon className="size-[20px] mt-3"/> <span> | </span>Vienna City</span>
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