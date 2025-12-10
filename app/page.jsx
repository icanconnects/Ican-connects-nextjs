import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-icanBlue to-icanDark text-white py-20 md:py-32'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>Connecting North York's Indian Community</h2>
          <p className='text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto'>Culture • Support • Events • Networking</p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Link href='/membership' className='px-6 py-3 bg-icanGold text-icanDark rounded-lg font-semibold hover:opacity-90 transition'>Become a Member</Link>
            <Link href='/events' className='px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-icanBlue transition'>See Events</Link>
          </div>
        </div>
      </section>

      {/* About Section - Minimalist Design */}
      <section id='about' className='max-w-6xl mx-auto py-20 px-4'>
        <div className='mb-12'>
          <h3 className='text-3xl md:text-4xl font-bold text-icanDark mb-4'>About ICAN</h3>
          <p className='text-lg text-gray-700 max-w-3xl'>ICAN is a volunteer-run non-profit dedicated to promoting Indian culture in North York. We organize community events, provide support services, and create spaces for networking and celebration.</p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {/* Card 1 */}
          <div className='p-6 border-l-4 border-icanGold bg-icanCream rounded-lg hover:shadow-lg transition'>
            <div className='text-3xl mb-3'>🎉</div>
            <h4 className='text-xl font-bold text-icanDark mb-2'>Community Events</h4>
            <p className='text-gray-700'>Cultural celebrations, festivals, and community gatherings throughout the year.</p>
          </div>

          {/* Card 2 */}
          <div className='p-6 border-l-4 border-icanBlue bg-icanCream rounded-lg hover:shadow-lg transition'>
            <div className='text-3xl mb-3'>📚</div>
            <h4 className='text-xl font-bold text-icanDark mb-2'>Educational Programs</h4>
            <p className='text-gray-700'>Wellness initiatives, cultural education, and youth engagement opportunities.</p>
          </div>

          {/* Card 3 */}
          <div className='p-6 border-l-4 border-icanGold bg-icanCream rounded-lg hover:shadow-lg transition'>
            <div className='text-3xl mb-3'>🤝</div>
            <h4 className='text-xl font-bold text-icanDark mb-2'>Support & Networking</h4>
            <p className='text-gray-700'>Connect with like-minded community members and build lasting relationships.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className='bg-icanCream border-t border-gray-200 py-20'>
        <div className='max-w-6xl mx-auto px-4'>
          <h3 className='text-3xl md:text-4xl font-bold text-center text-icanDark mb-12'>Upcoming Events</h3>
          <div className='grid md:grid-cols-3 gap-6'>
            {/* Event Card 1 */}
            <div className='bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition'>
              <div className='text-3xl mb-3'>🪔</div>
              <h4 className='font-bold text-lg text-icanDark mb-2'>Diwali Night</h4>
              <p className='text-gray-700 text-sm mb-3'>A celebration of lights, food, and performances.</p>
              <p className='text-xs text-icanBlue font-semibold'>Nov 1, 2025</p>
            </div>

            {/* Event Card 2 */}
            <div className='bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition'>
              <div className='text-3xl mb-3'>🤲</div>
              <h4 className='font-bold text-lg text-icanDark mb-2'>Community Meet</h4>
              <p className='text-gray-700 text-sm mb-3'>Monthly meet-up for new arrivals and families.</p>
              <p className='text-xs text-icanBlue font-semibold'>Monthly</p>
            </div>

            {/* Event Card 3 */}
            <div className='bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition'>
              <div className='text-3xl mb-3'>🧘</div>
              <h4 className='font-bold text-lg text-icanDark mb-2'>Yoga & Wellness</h4>
              <p className='text-gray-700 text-sm mb-3'>Free classes for all ages and fitness levels.</p>
              <p className='text-xs text-icanBlue font-semibold'>Dates vary</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-red-600 text-white py-16'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h3 className='text-3xl font-bold mb-4'>Join Our Community Today</h3>
          <p className='text-lg mb-6 opacity-90'>Get exclusive event updates, networking opportunities, and member benefits.</p>
          <Link href='/membership' className='inline-block px-8 py-3 bg-white text-red-600 rounded-lg font-bold hover:bg-gray-100 transition'>Become a Member</Link>
        </div>
      </section>
    </main>
  )
}