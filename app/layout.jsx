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
      <body className='bg-icanLight text-icanDark'>
        <header className='border-b border-gray-200 sticky top-0 z-50 bg-white'>
          <div className='max-w-6xl mx-auto flex items-center p-4'>
            {/* Logo - Clickable to Home */}
            <Link href='/' className='flex items-center hover:opacity-80 transition'>
              <Image src='/assets/logo1.PNG' alt='ICAN logo' width={70} height={70} className='sm:w-20 sm:h-20 w-16 h-16 rounded-md object-cover' />
              <h1 className='text-xl sm:text-2xl font-bold -ml-2 sm:-ml-1' style={{color: '#1770afff'}}>ICAN</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex gap-6 items-center text-sm font-medium ml-auto'>
              <Link href='/' className='text-icanDark hover:text-icanBlue transition'>Home</Link>
              <Link href='/about' className='text-icanDark hover:text-icanBlue transition'>About</Link>
              <Link href='/contact' className='text-icanDark hover:text-icanBlue transition'>Contact</Link>
              <Link href='/membership' className='px-4 py-2 rounded-md bg-icanBlue text-white text-sm font-medium hover:opacity-90 transition'>Join</Link>
            </nav>

            {/* Mobile Menu */}
            <div className='md:hidden ml-auto'>
              <MobileMenu />
            </div>
          </div>
        </header>

        {children}

        <footer className='bg-icanDark text-white mt-16 border-t-4 border-icanGold'>
          <div className='max-w-6xl mx-auto px-4 py-12'>
            <div className='grid md:grid-cols-3 gap-8 mb-8'>
              <div>
                <h3 className='text-lg font-bold mb-3'>ICAN</h3>
                <p className='text-sm text-gray-300'>Indian Community Association of North York</p>
              </div>
              <div>
                <h4 className='font-semibold mb-3 text-icanGold'>Quick Links</h4>
                <ul className='text-sm text-gray-300 space-y-2'>
                  <li><Link href='/#about' className='hover:text-white transition'>About</Link></li>
                  <li><Link href='/membership' className='hover:text-white transition'>Membership</Link></li>
                  <li><Link href='/contact' className='hover:text-white transition'>Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-3 text-icanGold'>Contact</h4>
                <p className='text-sm text-gray-300'>Email: ican.connects@outlook.com</p>
                <a href='https://www.instagram.com/ican.connects/' target='_blank' rel='noopener noreferrer' className='text-sm text-gray-300 hover:text-white transition inline-flex items-center gap-2 mt-2'>
                  <svg className='w-5 h-5 hover:scale-110 transition' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
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
                  @ican.connects
                </a>
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