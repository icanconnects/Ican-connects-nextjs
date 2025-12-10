
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'ICAN - Indian Community Association of North York',
  description: 'Connecting the Indian community in North York — culture, support, and celebration.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gray-50 text-gray-900'>
        <header className='shadow-sm bg-white'>
          <div className='max-w-6xl mx-auto flex items-center justify-between p-4'>
            <div className='flex items-center gap-3'>
              <Image src='/assets/logo.jpg' alt='ICAN logo' width={56} height={56} className='rounded-md object-cover' />
              <div>
                <h1 className='text-lg font-semibold'>ICAN</h1>
                <p className='text-sm text-gray-600'>Indian Community Association of North York</p>
              </div>
            </div>
            <nav className='hidden md:flex gap-6 text-sm text-gray-700'>
              <Link href='#about'>About</Link>
              <Link href='/events'>Events</Link>
              <Link href='/membership'>Membership</Link>
              <Link href='/contact'>Contact</Link>
            </nav>
            <div className='flex items-center gap-3'>
              <a href='https://vercel.com' className='px-3 py-2 rounded-md border text-sm hidden md:inline-block'>Donate</a>
              <button className='px-3 py-2 rounded-md bg-icanBlue text-white text-sm'>Join</button>
              <button className='md:hidden p-2 border rounded-md'>Menu</button>
            </div>
          </div>
        </header>
        {children}
        <footer className='bg-icanDark text-white mt-10'>
          <div className='max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4'>
            <div>
              <h3 className='font-semibold'>ICAN</h3>
              <p className='text-sm opacity-80'>Indian Community Association of North York</p>
            </div>
            <p className='text-sm opacity-80'>&copy; {new Date().getFullYear()} ICAN — All rights reserved</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
