// src/pages/ReviewsPage.jsx
import React from 'react';
import { testimonials } from '../data/testimonialsData';
import TestimonialCard from '../components/ui/TestimonialCard';

const ReviewsPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Customer Testimonials</h1>
          <p className="mt-2 text-lg text-gray-600">
            See what our satisfied customers in Jalandhar have to say about us.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                review={testimonial.review}
                city={testimonial.city}
              />
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default ReviewsPage;