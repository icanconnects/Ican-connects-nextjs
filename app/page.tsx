
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className='relative'>
        <div className='h-96 w-full relative'>
          <Image src='/assets/background.jpg' alt='Background' fill style={{ objectFit: 'cover', filter: 'brightness(0.6)' }} />
          <div className='absolute inset-0 flex items-center'>
            <div className='max-w-4xl mx-auto text-center text-white px-4'>
              <h2 className='text-4xl font-bold'>Connecting North York's Indian Community</h2>
              <p className='mt-4 text-lg opacity-90'>Culture • Support • Events • Networking</p>
              <div className='mt-6 flex items-center justify-center gap-4'>
                <Link href='/membership' className='px-5 py-3 bg-icanAccent rounded-md font-semibold text-icanDark'>Become a Member</Link>
                <Link href='/events' className='px-5 py-3 border rounded-md text-white/90'>See Events</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='max-w-6xl mx-auto py-16 px-4'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h3 className='text-2xl font-semibold'>About ICAN</h3>
            <p className='mt-4 text-gray-700'>ICAN is a volunteer-run non-profit dedicated to promoting Indian culture in North York. We organize community events, provide support services, and create spaces for networking and celebration.</p>
            <ul className='mt-4 space-y-2 text-gray-700'>
              <li>• Community events and festivals</li>
              <li>• Educational and wellness programs</li>
              <li>• Volunteer and youth engagement</li>
            </ul>
          </div>
          <div className='rounded-lg overflow-hidden shadow-lg'>
            <Image src='/assets/background.jpg' alt='About image' width={800} height={500} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className='bg-white border-t py-12'>
        <div className='max-w-6xl mx-auto px-4'>
          <h3 className='text-2xl font-semibold text-center'>Upcoming Events</h3>
          <div className='mt-6 grid md:grid-cols-3 gap-6'>
            <div className='p-4 border rounded-lg bg-gray-50'>
              <h4 className='font-semibold'>Diwali Night</h4>
              <p className='text-sm text-gray-600'>A celebration of lights, food and performances.</p>
              <p className='mt-2 text-xs text-gray-500'>Nov 1, 2025</p>
            </div>
            <div className='p-4 border rounded-lg bg-gray-50'>
              <h4 className='font-semibold'>Community Meet</h4>
              <p className='text-sm text-gray-600'>Monthly meet-up for new arrivals and families.</p>
              <p className='mt-2 text-xs text-gray-500'>Monthly</p>
            </div>
            <div className='p-4 border rounded-lg bg-gray-50'>
              <h4 className='font-semibold'>Yoga & Wellness</h4>
              <p className='text-sm text-gray-600'>Free classes for all ages.</p>
              <p className='mt-2 text-xs text-gray-500'>Dates vary</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
