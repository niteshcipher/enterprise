import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// CHANGED: Imported FaPhone
import { FaArrowRight, FaPhone } from 'react-icons/fa';

const slideImages = [
  {
    src: '/assets/images/klogo.png',
    alt: 'Neat RO installation in a modern kitchen'
  },
  {
    src: '/assets/images/aosmithlogo.jpeg',
    alt: 'Showcase of the latest water purifiers'
  },
  {
    src: 'public/assets/images/pureit.jpg',
    alt: 'A happy family enjoying pure water'
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slideImages.length);
    }, 4000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section 
      className="relative bg-cover bg-center " 
      style={{ backgroundImage: 'url("/assets/images/hero-background.jpg")' }}
    >
      <div className="absolute inset-0 bg-[#121929] opacity-75"></div>

      <div 
        className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[60vh] lg:min-h-[65vh] py-12 lg:py-0"
      >
        
        {/* Left Side: Styled Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-500 to-cyan-300 text-transparent bg-clip-text leading-tight opacity-0 animate-fadeInUp">
            Pure Water for a Healthier, Happier Home.
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fadeInUp animation-delay-200">
            Discover unmatched purity with our state of the art RO systems. Built for your family's health.
          </p>
          
          {/* CHANGED: Wrapped buttons in a flex container */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fadeInUp animation-delay-400">
            <Link 
              to="/products"
              className="group inline-flex items-center justify-center gap-3 bg-blue-600 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Our Products
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* ADDED: New "Contact Us" button with tel: link */}
            <a 
              href="tel:+919911579856"
              className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-gray-200 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaPhone className="transition-transform duration-300 group-hover:scale-110" />
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Side: Image Slideshow */}
        <div 
          className="hidden lg:block relative w-11/12 mx-auto lg:w-full aspect-video lg:aspect-auto lg:h-[450px] p-2 bg-black/20 rounded-2xl backdrop-blur-sm"
        >
          {slideImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;