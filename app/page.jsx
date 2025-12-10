import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Hero Section with Image */}
      <section className='relative bg-gradient-to-r from-icanBlue to-icanDark text-white py-20 md:py-32 overflow-hidden'>
        {/* Community image overlay */}
        <div className='absolute inset-0 opacity-20'>
          <Image 
            src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=400&fit=crop' 
            alt='Community Together' 
            fill 
            className='object-cover'
            priority
          />
        </div>
        <div className='relative max-w-6xl mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>Building a Space to Connect, Celebrate & Grow</h2>
          <p className='text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto'>ICAN was created with a simple intention to build a space where our community can connect, celebrate, and grow together.</p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Link href='/mission' className='px-6 py-3 bg-icanGold text-icanDark rounded-lg font-semibold hover:opacity-90 transition'>Learn More</Link>
          </div>
        </div>
      </section>

      {/* About Section - Minimalist Design */}
      <section id='about' className='max-w-6xl mx-auto py-20 px-4'>
        <div className='mb-12'>
          <h3 className='text-3xl md:text-4xl font-bold text-icanDark mb-4'>About ICAN</h3>
          <p className='text-lg text-gray-700 mb-4'>ICAN is a volunteer-run non-profit dedicated to promoting Indian culture in North York. We organize community events, provide support services, and create spaces for networking and celebration.</p>
          <p className='text-gray-700'>Our mission is to strengthen the Indian community through cultural celebrations, educational programs, and meaningful connections.</p>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-8 mb-12 md:max-w-4xl'>
          <div className='md:w-1/2 flex items-center justify-center'>
            <div className='rounded-xl text-center'>
              <Image 
                src='/assets/logo1.png' 
                alt='ICAN Logo' 
                width={320} 
                height={320} 
                className='mx-auto'
              />
            </div>
          </div>
          <div className='md:w-1/2'>
            <h4 className='text-2xl font-bold text-icanDark mb-4'>Our Values</h4>
            <ul className='space-y-3 text-gray-700'>
              <li className='flex items-start gap-3'>
                <span className='text-icanBlue font-bold'>✓</span>
                <span>Cultural Pride: Celebrating Indian heritage with authenticity and respect</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-icanBlue font-bold'>✓</span>
                <span>Community First: Building strong bonds and meaningful relationships</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-icanBlue font-bold'>✓</span>
                <span>Inclusive Growth: Creating opportunities for all members to thrive</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-icanBlue font-bold'>✓</span>
                <span>Social Impact: Making a positive difference in our community</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className='bg-white py-20'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <p className='text-icanGold font-semibold text-lg mb-2'>OUR PURPOSE</p>
            <h3 className='text-4xl md:text-5xl font-bold text-icanDark'>What We Stand For</h3>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Purpose 1 */}
            <div className='p-8 bg-gray-50 rounded-lg hover:shadow-lg transition'>
              <div className='flex items-start gap-4 mb-4'>
                <div className='text-4xl text-icanBlue'>❤️</div>
                <div>
                  <h4 className='text-2xl font-bold text-icanDark mb-2'>Honour Culture</h4>
                  <p className='text-gray-700'>To honour and share Indian culture in meaningful, modern ways.</p>
                </div>
              </div>
            </div>

            {/* Purpose 2 */}
            <div className='p-8 bg-gray-50 rounded-lg hover:shadow-lg transition'>
              <div className='flex items-start gap-4 mb-4'>
                <div className='text-4xl text-icanBlue'>👥</div>
                <div>
                  <h4 className='text-2xl font-bold text-icanDark mb-2'>Bring Together</h4>
                  <p className='text-gray-700'>To bring people together through community gatherings and events.</p>
                </div>
              </div>
            </div>

            {/* Purpose 3 */}
            <div className='p-8 bg-gray-50 rounded-lg hover:shadow-lg transition'>
              <div className='flex items-start gap-4 mb-4'>
                <div className='text-4xl text-icanBlue'>📅</div>
                <div>
                  <h4 className='text-2xl font-bold text-icanDark mb-2'>Create Opportunities</h4>
                  <p className='text-gray-700'>To create opportunities for collaboration, support, and belonging.</p>
                </div>
              </div>
            </div>

            {/* Purpose 4 */}
            <div className='p-8 bg-gray-50 rounded-lg hover:shadow-lg transition'>
              <div className='flex items-start gap-4 mb-4'>
                <div className='text-4xl text-icanBlue'>📍</div>
                <div>
                  <h4 className='text-2xl font-bold text-icanDark mb-2'>Uplift Voices</h4>
                  <p className='text-gray-700'>To uplift every voice within our growing Indian community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className='bg-icanLight py-20'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 mb-20'>
            <div>
              <h3 className='text-3xl md:text-4xl font-bold text-icanDark mb-6'>Our Mission</h3>
              <p className='text-lg text-gray-700 mb-4'>
                To build and nurture a vibrant, inclusive community that celebrates Indian culture and heritage while creating meaningful connections among individuals and families in North York.
              </p>
              <p className='text-gray-700 mb-4'>
                We are committed to preserving and promoting Indian cultural traditions, creating safe spaces for connection and growth, supporting education and wellness, and building bridges between generations.
              </p>
            </div>
            <div>
              <h3 className='text-3xl md:text-4xl font-bold text-icanDark mb-6'>Our Vision</h3>
              <p className='text-lg text-gray-700 mb-4'>
                To create a thriving space where Indian heritage is celebrated, and community members of all ages feel a sense of belonging, pride, and purpose.
              </p>
              <p className='text-gray-700'>
                We envision ICAN as a bridge connecting past traditions with present opportunities, fostering stronger relationships, economic empowerment, and social well-being for all members of our North York community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section - COMMENTED OUT */}
      {/*
      <section className='bg-icanCream border-t border-gray-200 py-20'>
        <div className='max-w-6xl mx-auto px-4'>
          <h3 className='text-3xl md:text-4xl font-bold text-center text-icanDark mb-12'>Upcoming Events</h3>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='bg-white rounded-lg border border-gray-200 hover:shadow-lg transition overflow-hidden'>
              <Image 
                src='https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&h=250&fit=crop' 
                alt='Diwali Night' 
                width={400} 
                height={250}
                className='w-full h-40 object-cover'
              />
              <div className='p-6'>
                <div className='text-3xl mb-3'>🪔</div>
                <h4 className='font-bold text-lg text-icanDark mb-2'>Diwali Night</h4>
                <p className='text-gray-700 text-sm mb-3'>A celebration of lights, food, and performances.</p>
                <p className='text-xs text-icanBlue font-semibold'>Nov 1, 2025</p>
              </div>
            </div>

            <div className='bg-white rounded-lg border border-gray-200 hover:shadow-lg transition overflow-hidden'>
              <Image 
                src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop' 
                alt='Community Meet' 
                width={400} 
                height={250}
                className='w-full h-40 object-cover'
              />
              <div className='p-6'>
                <div className='text-3xl mb-3'>🤲</div>
                <h4 className='font-bold text-lg text-icanDark mb-2'>Community Meet</h4>
                <p className='text-gray-700 text-sm mb-3'>Monthly meet-up for new arrivals and families.</p>
                <p className='text-xs text-icanBlue font-semibold'>Monthly</p>
              </div>
            </div>

            <div className='bg-white rounded-lg border border-gray-200 hover:shadow-lg transition overflow-hidden'>
              <Image 
                src='https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop' 
                alt='Yoga & Wellness' 
                width={400} 
                height={250}
                className='w-full h-40 object-cover'
              />
              <div className='p-6'>
                <div className='text-3xl mb-3'>🧘</div>
                <h4 className='font-bold text-lg text-icanDark mb-2'>Yoga & Wellness</h4>
                <p className='text-gray-700 text-sm mb-3'>Free classes for all ages and fitness levels.</p>
                <p className='text-xs text-icanBlue font-semibold'>Dates vary</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className='bg-icanBlue text-white py-16'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h3 className='text-3xl font-bold mb-4'>Join Our Community Today</h3>
          <p className='text-lg mb-6 opacity-90'>Get exclusive event updates, networking opportunities, and member benefits.</p>
          <Link href='/membership' className='inline-block px-8 py-3 bg-icanGold text-icanDark rounded-lg font-bold hover:opacity-90 transition'>Become a Member</Link>
        </div>
      </section>
    </main>
  )
}