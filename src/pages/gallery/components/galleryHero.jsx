import { Image, Images, Play, Star } from "lucide-react"
import { GalleryBg, Gg1, Gg2, Gg3, Gg4, Gg5, Gg6, Gv1, Gv2, Gv3 } from "../../../assets"

const GalleryHero = () => {
  return (
    <div className="relative h-1/5 py-20 bg-fixed">
      <img src={GalleryBg} alt="gallery background image" className="h-[70vh] w-[100vw]" />
      <div className="py-3 absolute top-0 left-0 inset-0 flex bg-black/50 h-[84vh] flex-col items-center justify-center text-white text-center z-20">
        <h3 className=" text-[#D1DADE] md:text-2xl py-3 tracking-wider font-semibold">EVENT GALLERY</h3>
        <span className=" text-[#D1DADE] text-4xl md:text-6xl py-2 font-bold">STELLA <span className=" text-amber-500 text-4xl md:text-6xl py-2">GALLERY</span></span>
      </div>
      <div className="flex flex-row justify-center gap-16 py-24 ">
        <a href="" className="flex flex-row gap-2"> <Star className="stroke-amber-500"/> <span className="text-[#878787] font-bold text-[18px]"> All Gallery
        </span></a>
        <a href="" className="flex flex-row gap-2"> <Play className="stroke-amber-500"/> <span className="text-[#878787] font-bold text-[18px]">Video Gallery</span> </a>
        <a href="" className="flex flex-row gap-2"> <Images className="stroke-amber-500" /> <span className="text-[#878787] font-bold text-[18px]">Photo Gallery</span></a>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
      <img src={Gg1} alt="Gallery Image 1" className="w-full h-full object-cover" />
      <video src={Gv1} className="w-full h-full object-cover" autoPlay muted loop></video>
      <img src={Gg2} alt="Gallery Image 2" className="w-full h-full object-cover" />
      <img src={Gg3} alt="Gallery Image 3" className="w-full h-full object-cover" />
      <video src={Gv2} className="w-full h-full object-cover" autoPlay muted loop></video>
      <img src={Gg4} alt="Gallery Image 4" className="w-full h-full object-cover" />
      <img src={Gg5} alt="Gallery Image 5" className="w-full h-full object-cover" />
      <video src={Gv3} className="w-full h-full object-cover" autoPlay muted loop></video>
      <img src={Gg6} alt="Gallery Image 6" className="w-full h-full object-cover" />
    </div>
    <div className="bg-amber-500 p-16">
      <span className="text-6xl">30%</span>
      <span className="text-3xl">Off In June~July For</span>
      <span className="text-4xl"> Wedding Events</span>
    </div>
    </div>
  )
}

export default GalleryHero