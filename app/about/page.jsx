import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className='bg-icanLight'>
      {/* Hero Section */}
      <section className='bg-icanBlue text-white py-16'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>About ICAN</h1>
          <p className='text-lg md:text-xl opacity-90'>Building a thriving Indian community in North York</p>
        </div>
      </section>

      {/* Main Content */}
      <section className='max-w-6xl mx-auto py-20 px-4'>
        <div className='grid md:grid-cols-2 gap-8 items-center mb-16'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-icanDark mb-6'>Our Story</h2>
            <p className='text-gray-700 text-lg mb-4'>
              ICAN (Indian Community Association of North York) was created with a simple intention: to build a space where our community can connect, celebrate, and grow together.
            </p>
            <p className='text-gray-700 text-lg mb-4'>
              What started as a vision has grown into a vibrant community initiative that brings together individuals and families from diverse backgrounds within the Indian diaspora. We believe in the power of community, culture, and collective growth.
            </p>
            <p className='text-gray-700 text-lg'>
              Through our events, programs, and initiatives, we've created meaningful connections and fostered a sense of belonging for hundreds of families in North York.
            </p>
          </div>
          <Image 
            src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop' 
            alt='ICAN Community' 
            width={600} 
            height={400}
            className='rounded-lg shadow-lg'
          />
        </div>

        {/* Values Section */}
        <div className='mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-icanDark mb-12 text-center'>Our Core Values</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Value 1 */}
            <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition'>
              <div className='text-5xl mb-4'>🤝</div>
              <h3 className='text-2xl font-bold text-icanDark mb-3'>Community</h3>
              <p className='text-gray-700'>We believe in the strength of unity and collective support. Together, we are stronger and can achieve more.</p>
            </div>

            {/* Value 2 */}
            <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition'>
              <div className='text-5xl mb-4'>🎨</div>
              <h3 className='text-2xl font-bold text-icanDark mb-3'>Culture</h3>
              <p className='text-gray-700'>We celebrate and preserve the rich heritage, traditions, and values of Indian culture for current and future generations.</p>
            </div>

            {/* Value 3 */}
            <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition'>
              <div className='text-5xl mb-4'>📈</div>
              <h3 className='text-2xl font-bold text-icanDark mb-3'>Growth</h3>
              <p className='text-gray-700'>We empower our community members to develop personally, professionally, and socially through education and networking.</p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className='bg-white p-12 rounded-lg shadow-md'>
          <h2 className='text-3xl md:text-4xl font-bold text-icanDark mb-8'>What We Do</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-bold text-icanBlue mb-4'>🎉 Cultural Events</h3>
              <p className='text-gray-700 mb-6'>We organize festivals, celebrations, and cultural programs that bring our community together and showcase Indian traditions.</p>

              <h3 className='text-xl font-bold text-icanBlue mb-4'>📚 Educational Programs</h3>
              <p className='text-gray-700'>We provide workshops, seminars, and classes focused on cultural education, wellness, and youth development.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-icanBlue mb-4'>🤲 Community Support</h3>
              <p className='text-gray-700 mb-6'>We offer resources and assistance to community members, supporting various charitable causes and social initiatives.</p>

              <h3 className='text-xl font-bold text-icanBlue mb-4'>🌐 Networking</h3>
              <p className='text-gray-700'>We create platforms for professional and social networking, helping members build meaningful connections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-icanBlue text-white py-16 mt-20'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h3 className='text-3xl font-bold mb-4'>Join Our Community</h3>
          <p className='text-lg mb-8 opacity-90'>Be part of something meaningful. Connect, celebrate, and grow with us.</p>
          <Link href='/membership' className='inline-block px-8 py-3 bg-icanGold text-icanDark rounded-lg font-bold hover:opacity-90 transition'>
            Become a Member
          </Link>
        </div>
      </section>
    </main>
  )
}
