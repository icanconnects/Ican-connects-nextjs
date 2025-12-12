'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Community Member',
    message: 'ICAN has been instrumental in helping me connect with my roots while building new friendships. The events are always vibrant and inclusive!',
    avatar: '👩‍🦰'
  },
  {
    name: 'Raj Patel',
    role: 'Event Organizer',
    message: 'Being part of ICAN\'s organizing team has been rewarding. We\'re truly making a difference in our community.',
    avatar: '👨‍💼'
  },
  {
    name: 'Neha Kapoor',
    role: 'New Member',
    message: 'I just joined ICAN and felt welcomed immediately. The community spirit here is absolutely amazing!',
    avatar: '👩'
  },
  {
    name: 'Arjun Singh',
    role: 'Long-time Member',
    message: 'ICAN represents everything I believe in - culture, community, and connection. So proud to be part of this journey!',
    avatar: '👨'
  }
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  return (
    <section className='bg-gradient-to-r from-icanLight to-white py-20'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-2 bg-icanBlue bg-opacity-10 text-icanBlue rounded-full text-sm font-semibold mb-4'>💬 Testimonials</span>
          <h3 className='text-4xl md:text-5xl font-bold text-icanDark mb-6'>Voices from Our Community</h3>
          <div className='h-1 w-16 bg-gradient-to-r from-icanBlue to-icanGold mx-auto'></div>
        </div>

        <div className='relative max-w-3xl mx-auto'>
          <div className='relative overflow-hidden rounded-2xl'>
            <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className='w-full flex-shrink-0 p-8 md:p-12 bg-white rounded-2xl shadow-xl'
                >
                  <div className='flex items-center gap-4 mb-6'>
                    <div className='text-6xl'>{testimonial.avatar}</div>
                    <div>
                      <h4 className='text-xl font-bold text-icanDark'>{testimonial.name}</h4>
                      <p className='text-sm text-icanBlue font-semibold'>{testimonial.role}</p>
                    </div>
                  </div>
                  <p className='text-lg text-gray-700 italic'>"{testimonial.message}"</p>
                  <div className='flex gap-1 mt-6'>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className='text-2xl'>⭐</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-icanBlue text-white p-3 rounded-full hover:bg-icanDark transition hover:scale-110'
            aria-label='Previous testimonial'
          >
            ←
          </button>
          <button
            onClick={next}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-icanBlue text-white p-3 rounded-full hover:bg-icanDark transition hover:scale-110'
            aria-label='Next testimonial'
          >
            →
          </button>

          {/* Dots */}
          <div className='flex justify-center gap-2 mt-8'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoPlay(false);
                }}
                className={`w-3 h-3 rounded-full transition ${
                  index === current ? 'bg-icanBlue w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
