// src/components/ui/TestimonialCard.jsx
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // Assuming react-icons is installed

const TestimonialCard = ({ name, review, city }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col justify-between h-full">
      <FaQuoteLeft className="text-blue-400 text-3xl mb-4" />
      <p className="text-gray-700 mb-4 flex-grow italic">"{review}"</p>
      <div>
        <h4 className="font-semibold text-gray-800 text-lg">{name}</h4>
        <p className="text-sm text-gray-500">{city}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;