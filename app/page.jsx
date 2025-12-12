import Link from 'next/link'
import Image from 'next/image'
import { Counter } from './components/Counter'
import { TestimonialCarousel } from './components/TestimonialCarousel'
import { NewsletterModal } from './components/NewsletterModal'
import { Gallery } from './components/Gallery'
import { EventCountdown } from './components/EventCountdown'

export default function Home() {
  return (
    <main>
      <NewsletterModal />
      {/* Hero Section with Image */}
      <section className='relative bg-gradient-to-br from-icanBlue via-purple-600 to-icanDark text-white py-24 md:py-40 overflow-hidden'>
        {/* Animated background gradient */}
        <div className='absolute inset-0 opacity-30'>
          <Image 
            src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=400&fit=crop' 
            alt='Community Together' 
            fill 
            className='object-cover'
            priority
          />
        </div>
        {/* Decorative circles */}
        <div className='absolute top-10 right-10 w-40 h-40 bg-icanGold opacity-10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 left-20 w-60 h-60 bg-purple-400 opacity-10 rounded-full blur-3xl'></div>
        
        <div className='relative max-w-6xl mx-auto px-4 text-center z-10'>
          <div className='mb-6 animate-fade-in'>
            <span className='inline-block px-4 py-2 bg-icanGold bg-opacity-20 text-icanGold rounded-full text-sm font-semibold'>✨ Welcome to ICAN</span>
          </div>
          <h2 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>Building a Space to Connect, Celebrate & Grow</h2>
          <p className='text-xl md:text-2xl opacity-95 mb-10 max-w-3xl mx-auto leading-relaxed'>ICAN was created with a simple intention to build a vibrant space where our community can connect, celebrate culture, and grow together.</p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Link href='/mission' className='px-8 py-4 bg-gradient-to-r from-icanGold to-yellow-500 text-icanDark rounded-lg font-bold hover:shadow-xl transition transform hover:scale-105'>Learn More →</Link>
            <Link href='/membership' className='px-8 py-4 bg-white bg-opacity-20 text-white rounded-lg font-bold border-2 border-white hover:bg-white hover:text-icanDark transition'>Join Now</Link>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced Design */}
      <section id='about' className='relative py-24 px-4 bg-gradient-to-b from-white to-icanLight'>
        {/* Decorative element */}
        <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-icanGold to-transparent'></div>
        
        <div className='max-w-6xl mx-auto'>
          <div className='mb-16 text-center'>
            <span className='inline-block px-4 py-2 bg-icanGold bg-opacity-10 text-icanBlue rounded-full text-sm font-semibold mb-4'>🎯 About Us</span>
            <h3 className='text-4xl md:text-5xl font-bold text-icanDark mb-6'>Who We Are</h3>
            <div className='h-1 w-16 bg-gradient-to-r from-icanBlue to-icanGold mx-auto mb-6'></div>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>ICAN is a volunteer-run non-profit dedicated to promoting Indian culture. We organize community events, provide support services, and create spaces for networking and celebration.</p>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-12 mb-16'>
            <div className='md:w-1/2 flex items-center justify-center'>
              <div className='relative rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:scale-105'>
                <div className='absolute inset-0 bg-gradient-to-r from-icanBlue to-icanGold opacity-0 hover:opacity-20 rounded-2xl transition'></div>
                <Image 
                  src='/assets/logo1.PNG' 
                  alt='ICAN Logo' 
                  width={320} 
                  height={320} 
                  className='mx-auto relative z-10'
                />
              </div>
            </div>
            <div className='md:w-1/2'>
              <h4 className='text-3xl font-bold text-icanDark mb-8'>Our Core Values</h4>
              <ul className='space-y-5 text-gray-700'>
                <li className='flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-lg transition hover:bg-icanLight'>
                  <span className='text-2xl'>🎨</span>
                  <div>
                    <p className='font-bold text-icanDark'>Cultural Pride</p>
                    <p className='text-sm'>Celebrating Indian heritage with authenticity and respect</p>
                  </div>
                </li>
                <li className='flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-lg transition hover:bg-icanLight'>
                  <span className='text-2xl'>🤝</span>
                  <div>
                    <p className='font-bold text-icanDark'>Community First</p>
                    <p className='text-sm'>Building strong bonds and meaningful relationships</p>
                  </div>
                </li>
                <li className='flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-lg transition hover:bg-icanLight'>
                  <span className='text-2xl'>🚀</span>
                  <div>
                    <p className='font-bold text-icanDark'>Inclusive Growth</p>
                    <p className='text-sm'>Creating opportunities for all members to thrive</p>
                  </div>
                </li>
                <li className='flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-lg transition hover:bg-icanLight'>
                  <span className='text-2xl'>💪</span>
                  <div>
                    <p className='font-bold text-icanDark'>Social Impact</p>
                    <p className='text-sm'>Making a positive difference in our community</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className='bg-gradient-to-b from-gray-50 to-white py-24'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center mb-20'>
            <span className='inline-block px-4 py-2 bg-icanGold bg-opacity-10 text-icanBlue rounded-full text-sm font-semibold mb-4'>💫 Our Purpose</span>
            <h3 className='text-4xl md:text-5xl font-bold text-icanDark mb-6'>What We Stand For</h3>
            <div className='h-1 w-16 bg-gradient-to-r from-icanBlue to-icanGold mx-auto'></div>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Purpose 1 */}
            <div className='group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-100 hover:border-icanGold'>
              <div className='flex items-start gap-4 mb-4'>
                <div className='text-5xl'>🎨</div>
                <div>
                  <h4 className='text-2xl font-bold text-icanDark mb-2 group-hover:text-icanBlue transition'>Honour Culture</h4>
                  <p className='text-gray-600'>To honour and share Indian culture in meaningful, modern ways that resonate with our diverse community.</p>
                </div>
              </div>
            </div>

            {/* Purpose 2 */}
            <div className='group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-100 hover:border-icanGold'>
              <div className='flex items-start gap-4 mb-4'>
                <div className='text-5xl'>🤝</div>
                <div>
                  <h4 className='text-2xl font-bold text-icanDark mb-2 group-hover:text-icanBlue transition'>Bring Together</h4>
                  <p className='text-gray-600'>To bring people together through community gatherings, cultural events, and meaningful experiences.</p>
                </div>
              </div>
            </div>

            {/* Purpose 3 */}
            <div className='group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-100 hover:border-icanGold'>
              <div className='flex items-start gap-4 mb-4'>
                <div className='text-5xl'>💡</div>
                <div>
                  <h4 className='text-2xl font-bold text-icanDark mb-2 group-hover:text-icanBlue transition'>Create Opportunities</h4>
                  <p className='text-gray-600'>To create opportunities for collaboration, support, personal growth, and strong community belonging.</p>
                </div>
              </div>
            </div>

            {/* Purpose 4 */}
            <div className='group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-100 hover:border-icanGold'>
              <div className='flex items-start gap-4 mb-4'>
                <div className='text-5xl'>📣</div>
                <div>
                  <h4 className='text-2xl font-bold text-icanDark mb-2 group-hover:text-icanBlue transition'>Uplift Voices</h4>
                  <p className='text-gray-600'>To uplift and amplify every voice within our growing Indian community with respect and pride.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className='bg-gradient-to-br from-icanBlue to-icanDark py-24 text-white relative overflow-hidden'>
        {/* Decorative elements */}
        <div className='absolute top-20 right-20 w-40 h-40 bg-icanGold opacity-10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 left-20 w-60 h-60 bg-purple-400 opacity-10 rounded-full blur-3xl'></div>
        
        <div className='max-w-6xl mx-auto px-4 relative z-10'>
          <div className='text-center mb-16'>
            <span className='inline-block px-4 py-2 bg-icanGold bg-opacity-20 text-icanGold rounded-full text-sm font-semibold mb-4'>🎯 Our Vision</span>
          </div>
          
          <div className='grid md:grid-cols-2 gap-12'>
            <div className='group p-10 bg-white bg-opacity-10 backdrop-blur rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition hover:shadow-2xl'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='text-4xl'>🎯</span>
                <h3 className='text-3xl font-bold'>Our Mission</h3>
              </div>
              <p className='text-lg mb-4 opacity-95'>
                To build and nurture a vibrant, inclusive community that celebrates Indian culture and heritage while creating meaningful connections among individuals and families.
              </p>
              <p className='opacity-90'>
                We are committed to preserving and promoting Indian cultural traditions, creating safe spaces for connection and growth, supporting education and wellness, and building bridges between generations.
              </p>
            </div>

            <div className='group p-10 bg-white bg-opacity-10 backdrop-blur rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition hover:shadow-2xl'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='text-4xl'>✨</span>
                <h3 className='text-3xl font-bold'>Our Vision</h3>
              </div>
              <p className='text-lg mb-4 opacity-95'>
                To create a thriving space where Indian heritage is celebrated, and community members of all ages feel a sense of belonging, pride, and purpose.
              </p>
              <p className='opacity-90'>
                We envision ICAN as a bridge connecting past traditions with present opportunities, fostering stronger relationships, economic empowerment, and social well-being for all.
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

      {/* Statistics Section */}
      <section className='bg-gradient-to-b from-white to-icanLight py-24'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center mb-20'>
            <span className='inline-block px-4 py-2 bg-icanBlue bg-opacity-10 text-icanBlue rounded-full text-sm font-semibold mb-4'>📊 By The Numbers</span>
            <h3 className='text-4xl md:text-5xl font-bold text-icanDark mb-6'>Our Impact</h3>
            <div className='h-1 w-16 bg-gradient-to-r from-icanBlue to-icanGold mx-auto'></div>
          </div>

          <div className='grid md:grid-cols-4 gap-8'>
            <Counter end={500} duration={2} label='Community Members' icon='👥' />
            <Counter end={50} duration={2} label='Events Organized' icon='🎉' />
            <Counter end={15} duration={2} label='Years Active' icon='📅' />
            <Counter end={100} duration={2} label='% Volunteer Run' icon='💪' />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Event Countdown */}
      <section className='bg-icanLight py-20'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl md:text-4xl font-bold text-icanDark mb-4'>Next Big Event</h3>
          </div>
          <div className='max-w-2xl mx-auto'>
            <EventCountdown 
              eventDate='2025-12-31T18:00:00' 
              eventName='New Year Celebration 2026' 
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className='relative bg-gradient-to-r from-icanGold via-yellow-500 to-orange-400 py-20 overflow-hidden'>
        {/* Decorative background pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full'></div>
          <div className='absolute bottom-20 right-20 w-60 h-60 border-4 border-white rounded-full'></div>
        </div>
        
        <div className='relative max-w-4xl mx-auto px-4 text-center z-10'>
          <h3 className='text-4xl md:text-5xl font-bold text-icanDark mb-4'>Join Our Community Today</h3>
          <p className='text-lg md:text-xl text-icanDark opacity-90 mb-8 max-w-2xl mx-auto'>Get exclusive event updates, networking opportunities, and member benefits. Be part of something special.</p>
          <Link href='/membership' className='inline-block px-10 py-4 bg-icanDark text-white rounded-lg font-bold hover:shadow-2xl transition transform hover:scale-105'>Become a Member Now →</Link>
        </div>
      </section>
    </main>
  )
}