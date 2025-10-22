// src/pages/ProductsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/productsData'; // <-- Check for the curly braces!
const ProductsPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Water Purifiers</h1>
          <p className="mt-2 text-lg text-gray-600">
            Find the perfect water purification system for your home.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">See Our Products in Action</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a hands-on experience and expert advice to help you choose the right model.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Visit Our Shop for a Live Demo
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;