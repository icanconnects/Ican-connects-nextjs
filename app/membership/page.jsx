'use client';

import { useState } from 'react';

export default function Membership() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Collect form data
    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      message: formData.get('message'),
      submittedAt: new Date().toISOString(),
    };

    try {
      // TODO: Send to backend API endpoint
      // const response = await fetch('/api/membership', { method: 'POST', body: JSON.stringify(data) });
      console.log('Membership Data:', data);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      e.target.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='max-w-2xl mx-auto py-12 px-4'>
        <div className='bg-white rounded-lg p-8 border border-gray-200'>
          <h2 className='text-3xl font-bold text-slate-900 mb-2'>Become a Member</h2>
          <p className='text-gray-600 mb-6'>Join ICAN to get event discounts, volunteer opportunities, and monthly updates.</p>

          {submitted && (
            <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg'>
              <p className='text-green-800 font-semibold'>✓ Thank you for joining! We'll be in touch soon.</p>
            </div>
          )}

          <form className='space-y-4' onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name *</label>
              <input
                type='text'
                name='fullName'
                placeholder='Your full name'
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent'
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Email Address *</label>
              <input
                type='email'
                name='email'
                placeholder='your@email.com'
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent'
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Phone Number *</label>
              <input
                type='tel'
                name='phone'
                placeholder='(555) 123-4567'
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent'
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Address *</label>
              <input
                type='text'
                name='address'
                placeholder='Street address, city, postal code'
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent'
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Message (Optional)</label>
              <textarea
                name='message'
                placeholder='Tell us about yourself...'
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent'
                rows='4'
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={loading}
              className='w-full px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition disabled:bg-gray-400'
            >
              {loading ? 'Submitting...' : 'Submit Membership'}
            </button>
          </form>

          <p className='text-xs text-gray-500 mt-4 text-center'>
            💾 Your information is securely stored and will only be used for ICAN communications.
          </p>
        </div>
      </div>
    </main>
  )
}