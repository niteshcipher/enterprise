import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Company Info & Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Shree Shahi Ro System</h3>
            <p className="mb-4 text-gray-400">
              Your trusted partner for pure and safe drinking water solutions in New Delhi.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-3 text-blue-400" />
                <span>Rajokari New Delhi 110038 </span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-3 text-blue-400" />
                <a href="tel:+919911579856" className="hover:text-white">+91 9911579856</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a href="mailto:kumarpritam284@gmail.com" className="hover:text-white">kumarpritam284@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <p className="mb-4 text-gray-400">
              Stay updated with our latest products and offers.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-2xl hover:text-blue-500"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-sky-400"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-pink-500"><FaInstagram /></a>
            </div>
          </div>
          
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p>&copy; {currentYear} Shree Shahi Ro System. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;