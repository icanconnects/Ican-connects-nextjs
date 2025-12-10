import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { MobileMenu } from './components/MobileMenu'

export const metadata = {
  title: 'ICAN - Indian Community Association of North York',
  description: 'Connecting the Indian community in North York — culture, support, and celebration.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className='bg-white text-gray-900'>
        <header className='border-b border-gray-200 sticky top-0 z-50 bg-white'>
          <div className='max-w-6xl mx-auto flex items-center justify-between p-4'>
            {/* Logo - Clickable to Home */}
            <Link href='/' className='flex items-center gap-3 hover:opacity-80 transition'>
              <Image src='/assets/logo.jpg' alt='ICAN logo' width={48} height={48} className='rounded-md object-cover' />
              <div className='hidden sm:block'>
                <h1 className='text-lg font-bold text-blue-900'>ICAN</h1>
                <p className='text-xs text-gray-600'>Indian Community Association</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex gap-8 text-sm font-medium'>
              <Link href='/#about' className='text-gray-700 hover:text-red-600 transition'>About</Link>
              <Link href='/events' className='text-gray-700 hover:text-red-600 transition'>Events</Link>
              <Link href='/membership' className='text-gray-700 hover:text-red-600 transition'>Membership</Link>
              <Link href='/contact' className='text-gray-700 hover:text-red-600 transition'>Contact</Link>
            </nav>

            {/* Right Actions */}
            <div className='flex items-center gap-3 relative'>
              <a href='mailto:info@ican-northyork.ca' className='px-4 py-2 rounded-md border border-gray-300 text-sm font-medium hidden md:inline-block hover:bg-gray-50 transition'>Donate</a>
              <Link href='/membership' className='px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition hidden md:inline-block'>Join</Link>

              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </div>
        </header>

        {children}

        <footer className='bg-slate-900 text-white mt-16 border-t-4 border-amber-600'>
          <div className='max-w-6xl mx-auto px-4 py-12'>
            <div className='grid md:grid-cols-3 gap-8 mb-8'>
              <div>
                <h3 className='text-lg font-bold mb-3'>ICAN</h3>
                <p className='text-sm text-gray-300'>Indian Community Association of North York</p>
              </div>
              <div>
                <h4 className='font-semibold mb-3 text-amber-600'>Quick Links</h4>
                <ul className='text-sm text-gray-300 space-y-2'>
                  <li><Link href='/#about' className='hover:text-white transition'>About</Link></li>
                  <li><Link href='/events' className='hover:text-white transition'>Events</Link></li>
                  <li><Link href='/membership' className='hover:text-white transition'>Membership</Link></li>
                  <li><Link href='/contact' className='hover:text-white transition'>Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-3 text-amber-600'>Contact</h4>
                <p className='text-sm text-gray-300'>Email: info@ican-northyork.ca</p>
                <p className='text-sm text-gray-300'>Phone: (555) 555-0123</p>
              </div>
            </div>
            <div className='border-t border-gray-700 pt-6'>
              <p className='text-sm text-gray-400 text-center'>&copy; {new Date().getFullYear()} ICAN — All rights reserved</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}