import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { ConcertOne, ConcertTwo, ConferenceOne, TourOne, WedOne } from '../../../assets';

const Hero = () => {
  return (
    <div className='relative h-screen'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="h-full"
      >
        {[WedOne, ConcertOne, TourOne, ConferenceOne, ConcertTwo].map((image, index) => (
          <SwiperSlide key={index} className="relative h-full">
            <img src={image} alt={`slide${index + 1}`} className="w-full h-full object-cover" />
            
          </SwiperSlide>
        ))}
      </Swiper>
      
            <div className="py-3 absolute top-0 left-0 inset-0 flex bg-black/50 flex-col items-center justify-center text-white text-center z-20">
            <h1 className=" text-[#D1DADE] text-4xl md:text-6xl py-2">One Stop</h1>
              <h1 className=" text-4xl md:text-6xl font-bold py-2">Event Planner</h1>
              <p className=" mt-4 text-lg md:text-2xl w-3/5">
EVERY EVENT SHOULD BE PERFECT              </p>
              <div className='flex flex-row'>
                <div className='flex gap-x-10'>
              <button className=" mt-8 px-6 py-3 bg-amber-500 hover:bg-[#333333] text-white font-bold rounded">About Us</button>
              <button className="mt-8 px-6 py-3 bg-amber-500 hover:bg-[#333333] text-white font-bold rounded">Get Started</button>
              </div>
              </div>
            </div>
    </div>
  )
}

export default Hero;
