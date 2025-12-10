'use client';

import { useState } from 'react';
import Link from 'next/link';

export function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className='md:hidden p-2 border border-gray-300 rounded-md hover:bg-gray-50'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className='md:hidden border-t border-gray-200 bg-white absolute top-full left-0 right-0'>
          <div className='max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3'>
            <Link href='/#about' className='text-gray-700 hover:text-red-600 py-2 font-medium' onClick={() => setMenuOpen(false)}>About</Link>
            <Link href='/events' className='text-gray-700 hover:text-red-600 py-2 font-medium' onClick={() => setMenuOpen(false)}>Events</Link>
            <Link href='/membership' className='text-gray-700 hover:text-red-600 py-2 font-medium' onClick={() => setMenuOpen(false)}>Membership</Link>
            <Link href='/contact' className='text-gray-700 hover:text-red-600 py-2 font-medium' onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href='/membership' className='px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium text-center hover:bg-red-700 transition' onClick={() => setMenuOpen(false)}>Join ICAN</Link>
          </div>
        </div>
      )}
    </>
  );
}
