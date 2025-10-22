// src/pages/GalleryPage.jsx
import React from 'react';

// Image data is defined directly in this file
const galleryImages = [
  { id: 1, src: '/assets/images/IMG-20251021-WA0057.jpg', alt: 'RO installation in a modern kitchen' },

  { id: 5, src: 'public/assets/images/IMG-20251021-WA0061.jpg', alt: 'Under-the-sink RO system setup' },
  { id: 6, src: 'public/assets/images/IMG-20251021-WA0062.jpg', alt: 'Aquaguard water purifier model' },

  

];

const GalleryPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Our Gallery</h1>
          <p className="mt-2 text-lg text-gray-600">
            A glimpse into our products, installations, and our happy customers.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* This map function uses the local galleryImages array */}
            {galleryImages.map((image) => (
              <div key={image.id} className="group overflow-hidden rounded-lg shadow-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;