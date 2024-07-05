import { GalleryBg } from "../../../assets"

const AboutFirst = () => {
  return (
       <div className="relative h-screen py-20 bg-fixed">
      <img src={GalleryBg} alt="gallery background image" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
        <h3 className="text-[#D1DADE] md:text-2xl py-4 tracking-wider font-semibold">ALL YOU NEED TO KNOW</h3>
        <span className="text-[#D1DADE] text-4xl md:text-6xl py-2 font-bold">
          ABOUT <span className="text-amber-500 text-4xl md:text-6xl px-5">STELLA EVENTS</span>
        </span>
      </div> 
    </div>
  )
}

export default AboutFirst