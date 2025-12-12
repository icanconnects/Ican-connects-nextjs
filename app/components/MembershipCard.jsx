'use client';

import { useEffect } from 'react';

export default function MembershipCard({ member, onClose }) {
  useEffect(() => {
    // Auto-close after 8 seconds
    const timer = setTimeout(onClose, 8000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='relative w-full max-w-md'>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute -top-8 right-0 text-white hover:text-gray-300 text-2xl font-bold'
        >
          ✕
        </button>

        {/* Wallet Card */}
        <div className='bg-gradient-to-br from-icanBlue to-icanDark text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden'>
          {/* Decorative elements */}
          <div className='absolute top-0 right-0 opacity-10'>
            <div className='w-40 h-40 bg-icanGold rounded-full'></div>
          </div>
          <div className='absolute bottom-0 left-0 opacity-10'>
            <div className='w-32 h-32 bg-icanGold rounded-full'></div>
          </div>

          {/* Content */}
          <div className='relative z-10'>
            {/* Header */}
            <div className='mb-8'>
              <p className='text-icanGold text-sm font-semibold tracking-wider uppercase'>ICAN Member</p>
              <h3 className='text-2xl font-bold mt-1'>Community Member Card</h3>
            </div>

            {/* Member Info */}
            <div className='space-y-4 mb-8'>
              <div>
                <p className='text-gray-300 text-xs uppercase tracking-wider opacity-75'>Name</p>
                <p className='text-xl font-semibold'>{member.fullName}</p>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-gray-300 text-xs uppercase tracking-wider opacity-75'>Email</p>
                  <p className='text-sm font-mono truncate'>{member.email}</p>
                </div>
                <div>
                  <p className='text-gray-300 text-xs uppercase tracking-wider opacity-75'>Phone</p>
                  <p className='text-sm font-mono'>{member.phone}</p>
                </div>
              </div>
              <div>
                <p className='text-gray-300 text-xs uppercase tracking-wider opacity-75'>Address</p>
                <p className='text-sm'>{member.address}</p>
              </div>
            </div>

            {/* Member ID */}
            <div className='border-t border-gray-400 border-opacity-30 pt-4'>
              <p className='text-gray-300 text-xs uppercase tracking-wider opacity-75 mb-2'>Member ID</p>
              <div className='bg-black bg-opacity-20 rounded px-3 py-2'>
                <p className='text-lg font-mono font-bold tracking-wider'>{member.id}</p>
              </div>
            </div>

            {/* Join Date */}
            <div className='mt-4 text-right text-xs text-gray-300 opacity-75'>
              Member since {new Date(member.joinDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>

        {/* Card hint */}
        <p className='text-center text-gray-400 text-sm mt-4'>
          Save this card for your records
        </p>
      </div>
    </div>
  );
}
