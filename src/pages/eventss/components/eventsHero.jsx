
import { GalleryBg} from "../../../assets"

const EventsHero = () => {
    return (
        <div className="relative h-1/5 py-20 bg-fixed">
            <img src={GalleryBg} alt="gallery background image" className="h-[70vh] w-[100vw]" />
            <div className="py-3 absolute top-0 left-0 inset-0 flex bg-black/50 h-[84vh] flex-col items-center justify-center text-white text-center z-20">
                <h3 className=" text-[#D1DADE] md:text-2xl py-3 tracking-wider font-semibold">UPCOMING EVENTS</h3>
                <span className=" text-[#D1DADE] text-4xl md:text-6xl py-2 font-bold">STELLA <span className=" text-amber-500 text-4xl md:text-6xl py-2">EVENTS</span></span>
            </div>
        </div>
    )
}

export default EventsHero