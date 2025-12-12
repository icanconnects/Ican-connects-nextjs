'use client';

import { useState } from 'react';
import MembershipCard from '../components/MembershipCard';

export default function Membership() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [memberData, setMemberData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Collect form data
    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Failed to submit membership');
        // If it's a duplicate but we have member data, show the card
        if (result.member && response.status === 409) {
          setMemberData(result.member);
        }
        return;
      }

      // Set member data to show card
      setMemberData(result.member);
      setSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseCard = () => {
    setMemberData(null);
    setSubmitted(false);
  };

  return (
    <main className='min-h-screen bg-icanLight'>
      <div className='max-w-2xl mx-auto py-12 px-4'>
        <div className='bg-white rounded-lg p-8 border border-gray-200'>
          <h2 className='text-3xl font-bold text-icanDark mb-2'>Become a Member</h2>
          <p className='text-gray-600 mb-6'>Join ICAN to get event discounts, volunteer opportunities, and monthly updates.</p>

          {error && (
            <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg'>
              <p className='text-red-800 font-semibold'>✗ {error}</p>
            </div>
          )}

          {submitted && !memberData && (
            <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg'>
              <p className='text-green-800 font-semibold'>✓ Processing your membership...</p>
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
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-icanBlue focus:border-transparent'
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
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-icanBlue focus:border-transparent'
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
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-icanBlue focus:border-transparent'
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
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-icanBlue focus:border-transparent'
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
              className='w-full px-6 py-3 bg-icanBlue text-white rounded-lg font-semibold hover:opacity-90 transition disabled:bg-gray-400'
            >
              {loading ? 'Submitting...' : 'Submit Membership'}
            </button>
          </form>

          <p className='text-xs text-gray-500 mt-4 text-center'>
            💾 Your information is securely stored and will only be used for ICAN communications.
          </p>
        </div>
      </div>

      {/* Membership Card Popup */}
      {memberData && (
        <MembershipCard member={memberData} onClose={handleCloseCard} />
      )}
    </main>
  )
}