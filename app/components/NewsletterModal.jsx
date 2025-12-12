'use client';

import { useState, useEffect } from 'react';

export function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show modal after 10 seconds
    const timer = setTimeout(() => {
      if (!localStorage.getItem('newsletterDismissed')) {
        setIsOpen(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Here you can add your newsletter service integration
      // For now, just simulate success
      await new Promise(resolve => setTimeout(resolve, 500));
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        localStorage.setItem('newsletterDismissed', 'true');
      }, 2000);
    } catch (error) {
      console.error('Newsletter signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('newsletterDismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in'>
      <div className='bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in'>
        {/* Close button */}
        <button
          onClick={handleClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl'
        >
          ✕
        </button>

        <div className='text-center mb-6'>
          <div className='text-5xl mb-4'>📬</div>
          <h3 className='text-2xl font-bold text-icanDark mb-2'>Stay Updated!</h3>
          <p className='text-gray-600'>Get exclusive event updates and community news delivered to your inbox.</p>
        </div>

        {submitted ? (
          <div className='text-center p-4 bg-green-50 rounded-lg border border-green-200'>
            <div className='text-4xl mb-2'>✓</div>
            <p className='text-green-700 font-semibold'>Thank you! Check your email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-icanBlue focus:border-transparent'
            />
            <button
              type='submit'
              disabled={loading}
              className='w-full px-4 py-3 bg-gradient-to-r from-icanBlue to-icanDark text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50'
            >
              {loading ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>
        )}

        <p className='text-xs text-gray-500 text-center mt-4'>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
