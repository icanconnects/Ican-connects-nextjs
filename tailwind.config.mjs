/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        icanBlue: '#1e3a8a',      // Deep navy blue (professional)
        icanAccent: '#dc2626',    // Deep red (cultural, Indian)
        icanDark: '#0f172a',      // Almost black (elegant)
        icanGold: '#d97706',      // Gold (cultural accent)
        icanCream: '#fef3c7',     // Warm cream (subtle)
      },
    },
  },
  plugins: [],
}
              <a href='mailto:info@ican-northyork.ca' className='px-4 py-2 rounded-md border border-gray-300 text-sm font-medium hidden md:inline-block hover:bg-gray-50 transition'>Donate</a>
              <Link href='/membership' className='px-4 py-2 rounded-md bg-icanAccent text-white text-sm font-medium hover:bg-red-700 transition hidden md:inline-block'>Join</Link>

              {/* Mobile Menu Button */}
              <button
                className='md:hidden p-2 border border-gray-300 rounded-md hover:bg-gray-50'
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <div className='md:hidden border-t border-gray-200 bg-white'>
              <div className='max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3'>
                <Link href='/#about' className='text-gray-700 hover:text-icanAccent py-2 font-medium' onClick={() => setMenuOpen(false)}>About</Link>
                <Link href='/events' className='text-gray-700 hover:text-icanAccent py-2 font-medium' onClick={() => setMenuOpen(false)}>Events</Link>
                <Link href='/membership' className='text-gray-700 hover:text-icanAccent py-2 font-medium' onClick={() => setMenuOpen(false)}>Membership</Link>
                <Link href='/contact' className='text-gray-700 hover:text-icanAccent py-2 font-medium' onClick={() => setMenuOpen(false)}>Contact</Link>
                <Link href='/membership' className='px-4 py-2 rounded-md bg-icanAccent text-white text-sm font-medium text-center hover:bg-red-700 transition' onClick={() => setMenuOpen(false)}>Join ICAN</Link>
              </div>
            </div>
          )}
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
                  <li><Link href='/events' className='hover:text-white transition'>Events</Link></li>
                  <li><Link href='/membership' className='hover:text-white transition'>Membership</Link></li>
                  <li><Link href='/contact' className='hover:text-white transition'>Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-3 text-icanGold'>Contact</h4>
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