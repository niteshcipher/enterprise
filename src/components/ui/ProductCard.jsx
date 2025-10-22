import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 border border-gray-200">
      
      {/* Image Section - Removed gray background */}
      <div className="p-4 w-full flex justify-center items-center bg-white ">
        <img 
          src={product.image} 
          alt={product.name} 
          // CHANGED: Adjusted height to h-52 for better proportions
          className="w-full h-52 object-contain" 
        />
      </div>
      
      {/* Content Section - CHANGED: Reduced padding to p-4 */}
      <div className="p-4 flex-grow flex flex-col">
        
        {/* Name */}
        <h3 className="text-xl font-bold text-gray-800 text-center mb-1">{product.name}</h3>
        
        {/* Tagline (e.g., "RO+UV+UF+TDS 9 L") - CHANGED: Removed bottom margin */}
        <p className="text-sm text-gray-600 font-medium text-center mb-0">{product.tagline}</p>
        
        {/* Button Section - Kept 'mt-auto' to align buttons at the bottom.
          CHANGED: 'pt-5' (20px) now precisely controls the space between the tagline and the button.
        */}
        <div className="mt-auto pt-5"> 
          <a 
            href="tel:+919911579856" 
            className="w-full block text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Call for Inquiry
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;