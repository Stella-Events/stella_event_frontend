import { GalleryBg } from "../../../assets"

const GalleryHero = () => {
  return (
    <div className="relative h-1/5 py-20 bg-fixed">
        <img src= {GalleryBg} alt="gallery background image" className="h-[70vh] w-[100vw]" />
        <div className="py-3 absolute top-0 left-0 inset-0 flex bg-black/50 flex-col items-center justify-center text-white text-center z-20">
        <h3 className=" text-[#D1DADE] md:text-2xl py-3 tracking-wider font-semibold">EVENT GALLERY</h3>
        <span className=" text-[#D1DADE] text-4xl md:text-6xl py-2 font-bold">STELLA <span className=" text-amber-500 text-4xl md:text-6xl py-2">GALLERY</span></span>
        </div>
        <div className="flex flex-row justify-center gap-16 py-10 ">
         <a href=""> <span>
            All Gallery
            </span></a>
          <a href=""><span>Video Gallery</span> </a>
          <a href=""><span>Photo Gallery</span></a>
        </div>
    </div>
  )
}

export default GalleryHero