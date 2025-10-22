import React from 'react';
import { Link } from 'react-router-dom';

// Home-specific components
import HeroSection from '../components/home/HeroSection';
import CoreServicesSection from '../components/home/CoreServicesSection';

// UI components
import TestimonialCard from '../components/ui/TestimonialCard';
import ProductCard from '../components/ui/ProductCard'; // <-- IMPORT YOUR CARD

// Data
import { testimonials } from '../data/testimonialsData';
import { products } from '../data/productsData'; // <-- IMPORT YOUR PRODUCTS

const HomePage = () => {
  // Get the first 3 products to feature on the homepage
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="overflow-hidden"> {/* Add overflow-hidden to handle potential layout issues */}
      <HeroSection />
      <CoreServicesSection />

      {/* --- NEW Featured Products Section --- */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-3 ">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            View Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Loop over the featured products */}
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/products" // Button to redirect to products page
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
      {/* --- End of New Section --- */}


      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map(testimonial => ( // Show 3-4 testimonials
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                review={testimonial.review}
                city={testimonial.city}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/reviews" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Get Expert Consultation */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Expert Advice for Your Water Purification Needs?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our team is ready to provide tailored solutions for your home or business in Jalandhar.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Get Expert Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;