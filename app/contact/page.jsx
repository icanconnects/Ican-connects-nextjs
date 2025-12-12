'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to send message');
        setLoading(false);
        return;
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-screen bg-icanLight'>
      <div className='max-w-4xl mx-auto py-16 px-4'>
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-icanDark mb-4'>Contact Us</h2>
          <p className='text-lg text-gray-700'>We'd love to hear from you. Get in touch with ICAN today.</p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Contact Info Cards */}
          <div className='bg-white p-8 rounded-lg border border-gray-200'>
            <h3 className='text-2xl font-bold text-icanDark mb-6'>Get In Touch</h3>

            <div className='space-y-6'>
              {/* Email */}
              <div>
                <h4 className='font-semibold text-icanDark mb-2'>📧 Email</h4>
                <a href='mailto:ican.connects@outlook.com' className='text-icanBlue hover:underline'>
                  ican.connects@outlook.com
                </a>
              </div>

              {/* Instagram */}
              <div>
                <h4 className='font-semibold text-icanDark mb-2 flex items-center gap-2'>
                  <svg className='w-5 h-5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                      <linearGradient id='instagramGradient' x1='0%' y1='100%' x2='100%' y2='0%'>
                        <stop offset='0%' style={{stopColor: '#FD1D1D', stopOpacity: 1}} />
                        <stop offset='25%' style={{stopColor: '#E1306C', stopOpacity: 1}} />
                        <stop offset='50%' style={{stopColor: '#C13584', stopOpacity: 1}} />
                        <stop offset='75%' style={{stopColor: '#833AB4', stopOpacity: 1}} />
                        <stop offset='100%' style={{stopColor: '#F77737', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.251-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z' fill='url(#instagramGradient)'/>
                  </svg>
                  Instagram
                </h4>
                <a href='https://www.instagram.com/ican.connects/' target='_blank' rel='noopener noreferrer' className='text-icanBlue hover:underline'>
                  @ican.connects
                </a>
              </div>

              {/* Location */}
              <div>
                <h4 className='font-semibold text-icanDark mb-2'>📍 Location</h4>
                <p className='text-gray-700'>North York, Ontario<br />Canada</p>
              </div>

              {/* Hours */}
              <div>
                <h4 className='font-semibold text-icanDark mb-2'>⏰ Hours</h4>
                <p className='text-gray-700'>Monday - Friday: 9 AM - 5 PM<br />Saturday & Sunday: By Appointment</p>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className='bg-white p-8 rounded-lg border border-gray-200'>
            <h3 className='text-2xl font-bold text-icanDark mb-6'>Business enquiries</h3>
            {success && (
              <div className='mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700'>
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {error && (
              <div className='mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700'>
                ✕ {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your name'
                  required
                  className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-icanBlue focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='your@email.com'
                  required
                  className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-icanBlue focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Your message...'
                  rows='4'
                  required
                  className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-icanBlue focus:border-transparent'
                ></textarea>
              </div>
              <button
                type='submit'
                disabled={loading}
                className='w-full px-4 py-2 bg-icanBlue text-white rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}