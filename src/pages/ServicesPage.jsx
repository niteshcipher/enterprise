// src/pages/ServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceDetailCard from '../components/ui/ServiceDetailCard';
import { detailedServices } from '../data/servicesData'; // This file is now updated

const ServicesPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Our Services</h1>
          <p className="mt-2 text-lg text-gray-600">
            Professional solutions to keep your water pure and your system running perfectly.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-4xl mx-auto">
            {detailedServices.map((service) => (
              <ServiceDetailCard key={service.id} service={service} /> // This component now handles images
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a new installation, a quick repair, or a reliable AMC, we're here to help.
          </p>
          <a
            href="tel:+919911579856" 
            className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Book Service / Call Now
          </a>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;