// src/components/ui/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="text-blue-600 text-5xl mb-4 flex justify-center">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <Link to={link} className="text-blue-600 hover:underline font-medium">
          Learn More
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;