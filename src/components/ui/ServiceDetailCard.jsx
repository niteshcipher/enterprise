// src/components/ui/ServiceDetailCard.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Assuming you use this for benefits

const ServiceDetailCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 border border-gray-200">
      
      {/* Service Image (Conditionally rendered) */}
      {service.image && (
        <div className="md:w-1/3 flex-shrink-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-48 md:h-full object-cover rounded-md shadow-md" // Adjust height for mobile/desktop
          />
        </div>
      )}

      {/* Service Content */}
      <div className={`flex-grow ${service.image ? 'md:w-2/3' : 'w-full'}`}> {/* Adjust width based on image presence */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
        
        {service.benefits && service.benefits.length > 0 && (
          <ul className="space-y-2 mb-4">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}
        
        {service.costEstimate && (
          <p className="text-lg font-semibold text-blue-600 mt-4">
            {service.costEstimate}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailCard;