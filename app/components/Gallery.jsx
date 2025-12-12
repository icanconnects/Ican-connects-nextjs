'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  { url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop', alt: 'Community Event 1' },
  { url: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&h=400&fit=crop', alt: 'Diwali Celebration' },
  { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop', alt: 'Yoga & Wellness' },
  { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Cultural Event' },
  { url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop', alt: 'Community Gathering' },
  { url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop', alt: 'Event Details' }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className='bg-white py-20'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-2 bg-icanGold bg-opacity-10 text-icanBlue rounded-full text-sm font-semibold mb-4'>🖼️ Gallery</span>
          <h3 className='text-4xl md:text-5xl font-bold text-icanDark mb-6'>Moments from Our Community</h3>
          <div className='h-1 w-16 bg-gradient-to-r from-icanBlue to-icanGold mx-auto'></div>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className='relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition'
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={400}
                height={300}
                className='w-full h-64 object-cover group-hover:scale-110 transition duration-300'
              />
              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center'>
                <button className='opacity-0 group-hover:opacity-100 transition bg-white text-icanBlue p-3 rounded-full text-2xl'>
                  🔍
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in' onClick={() => setSelectedImage(null)}>
          <div className='relative max-w-4xl w-full animate-scale-in'>
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition'
            >
              ✕
            </button>
            <Image
              src={selectedImage.url}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className='w-full h-auto rounded-2xl'
            />
            <p className='text-center text-white mt-4 text-lg'>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
