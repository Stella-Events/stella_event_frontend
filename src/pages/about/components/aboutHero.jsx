import { GalleryBg } from "../../../assets";

const AboutHero = () => {
  return (
    
    <div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-[60px] bg-white shadow-lg rounded-lg z-10 mx-auto mt-16">
        
        <div className="flex flex-col items-center md:items-start py-10">
          <h2 className="text-[18px] text-[#878787] uppercase tracking-wide">We Are Stella Events</h2>
          <span className="text-[54px] font-extrabold">No. 1 <span className="font-medium">Event Management</span></span>
          <button className="mt-8 px-6 py-3 bg-amber-500 hover:bg-[#333333] text-white font-bold rounded-2xl">Get Started</button>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[20px] font-bold relative block mb-2">Our Mission</span>
          <div className="bg-amber-500 h-2 w-12 mb-4"></div>
          <p className="mb-4">
            At Stella Events, we are dedicated to transforming visions into unforgettable experiences. Our mission is to deliver meticulously planned, creatively designed, and flawlessly executed events that exceed our clients' expectations.
          </p>
          <p className="italic font-bold py-3">
            We believe in the power of meticulous attention to detail, innovative solutions, and personalized service to bring each event to life in a unique and impactful way.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[20px] font-bold relative block mb-2">Our Vision</span>
          <div className="bg-amber-500 h-2 w-12 mb-4"></div>
          <p className="mb-4">
            Our vision at Stella Events is to be the leading name in event management, renowned for our ability to craft extraordinary experiences that leave a lasting impression. We aim to set new standards in the industry by continually pushing the boundaries of creativity, innovation, and excellence.
          </p>
          <p className="italic font-bold py-3">
            We envision a world where every event we manage becomes a cherished memory, where our clients can fully immerse themselves in the joy of the moment while we take care of every detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
