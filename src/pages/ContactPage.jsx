// src/pages/ContactPage.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-600">
            We're here to help. Reach out to us for any inquiries or service requests.
          </p>
        </div>
      </section>

      {/* Main Content: Form and Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Our Address</h3>
                  <p className="text-gray-600">Shop No 1, near Desh Raj Public School, Rajokri Village, Rajokri, New Delhi, Delhi 110038, India </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-blue-600 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a href="tel:+919911579856" className="text-gray-600 hover:text-blue-600">+91 9911579856</a>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-blue-600 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:kumarpritam284@gmail.com" className="text-gray-600 hover:text-blue-600">kumarpritam284@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section>
        <div className="w-full h-[400px]">
          {/* Instructions to get this are below */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.9856720535663!2d77.1076452!3d28.510078799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fc198d78be1%3A0xf0e83ade4155d4eb!2sShree%20Shahi%20RO%20System!5e0!3m2!1sen!2sin!4v1761119868553!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;