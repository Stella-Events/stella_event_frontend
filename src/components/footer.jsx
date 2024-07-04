import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-12 mt-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">123 Celebration Lane, Accra, Ghana</p>
            <p className="mb-2">Phone: +233 24 123 4567</p>
            <p className="mb-2">Email: <a href="mailto:info@stellaevents.com" className="text-[#C57816]">info@stellaevents.com</a></p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#home" className="text-[#C57816] hover:underline">Home</a></li>
              <li><a href="#services" className="text-[#C57816] hover:underline">Services</a></li>
              <li><a href="#about" className="text-[#C57816] hover:underline">About </a></li>
              <li><a href="#contact" className="text-[#C57816] hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <ul className="space-y-2">
              <li><a href="https://facebook.com" className="text-[#C57816] hover:underline">Facebook</a></li>
              <li><a href="https://instagram.com" className="text-[#C57816] hover:underline">Instagram</a></li>
              <li><a href="https://twitter.com" className="text-[#C57816] hover:underline">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap mt-8 -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 w-full md:w-3/4 rounded-l bg-gray-800 text-white focus:outline-double outline-[#C57816]"
              />
              <button type="button" className="px-4 py-2 bg-white hover:bg-[#C57816] text-black font-bold rounded-r">Subscribe</button>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">About Stella Events</h2>
            <p>
              At Stella Events, we pride ourselves on delivering exceptional event management services. Our team of dedicated professionals is committed to turning your visions into reality, ensuring every detail is perfect and every moment memorable. Whether it’s a corporate event, wedding, or private party, we handle it all with grace and expertise.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Stella Events. All Rights Reserved.</p>
          <div className="mt-2">
            <a href="#terms" className="text-[#C57816] hover:underline">Terms & Conditions</a> | <a href="#privacy" className="text-[#C57816] hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
