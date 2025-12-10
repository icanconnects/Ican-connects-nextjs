import Image from 'next/image'
import Link from 'next/link'

export default function Mission() {
  return (
    <main className='bg-icanLight'>
      {/* Hero Section */}
      <section className='bg-icanDark text-white py-16'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Our Mission & Vision</h1>
          <p className='text-lg md:text-xl opacity-90'>Shaping the future of our community</p>
        </div>
      </section>

      {/* Main Content */}
      <section className='max-w-6xl mx-auto py-20 px-4'>
        {/* Mission */}
        <div className='grid md:grid-cols-2 gap-8 items-center mb-20'>
          <Image 
            src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop' 
            alt='Our Mission' 
            width={600} 
            height={400}
            className='rounded-lg shadow-lg'
          />
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-icanDark mb-6'>Our Mission</h2>
            <p className='text-gray-700 text-lg mb-4'>
              To build and nurture a vibrant, inclusive community that celebrates Indian culture and heritage while creating meaningful connections among individuals and families in North York.
            </p>
            <p className='text-gray-700 text-lg mb-4'>
              We are committed to:
            </p>
            <ul className='text-gray-700 text-lg space-y-3 mb-6'>
              <li className='flex items-start gap-3'>
                <span className='text-icanGold font-bold'>✓</span>
                <span>Preserving and promoting Indian cultural traditions and values</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-icanGold font-bold'>✓</span>
                <span>Creating safe, welcoming spaces for community members to connect and grow</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-icanGold font-bold'>✓</span>
                <span>Supporting education, wellness, and personal development initiatives</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-icanGold font-bold'>✓</span>
                <span>Building bridges between generations and diverse backgrounds</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Vision */}
        <div className='grid md:grid-cols-2 gap-8 items-center mb-20'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-icanDark mb-6'>Our Vision</h2>
            <p className='text-gray-700 text-lg mb-4'>
              To be the most vibrant and inclusive Indian community organization in North York, recognized for fostering cultural pride, personal growth, and meaningful connections.
            </p>
            <p className='text-gray-700 text-lg mb-4'>
              We envision a future where:
            </p>
            <ul className='text-gray-700 text-lg space-y-3'>
              <li className='flex items-start gap-3'>
                <span className='text-icanBlue font-bold'>→</span>
                <span>Every community member feels valued, supported, and empowered</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-icanBlue font-bold'>→</span>
                <span>Cultural traditions are celebrated and passed to future generations</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-icanBlue font-bold'>→</span>
                <span>Education and wellness are accessible to all community members</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-icanBlue font-bold'>→</span>
                <span>Our community thrives through unity, diversity, and mutual support</span>
              </li>
            </ul>
          </div>
          <Image 
            src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop' 
            alt='Our Vision' 
            width={600} 
            height={400}
            className='rounded-lg shadow-lg'
          />
        </div>

        {/* Impact */}
        <div className='bg-white p-12 rounded-lg shadow-md mb-20'>
          <h2 className='text-3xl md:text-4xl font-bold text-icanDark mb-12 text-center'>Our Impact</h2>
          <div className='grid md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-5xl font-bold text-icanBlue mb-4'>500+</div>
              <p className='text-gray-700 font-semibold'>Community Members</p>
            </div>
            <div>
              <div className='text-5xl font-bold text-icanGold mb-4'>50+</div>
              <p className='text-gray-700 font-semibold'>Annual Events</p>
            </div>
            <div>
              <div className='text-5xl font-bold text-icanBlue mb-4'>100+</div>
              <p className='text-gray-700 font-semibold'>Volunteer Hours</p>
            </div>
            <div>
              <div className='text-5xl font-bold text-icanGold mb-4'>10+</div>
              <p className='text-gray-700 font-semibold'>Years of Service</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <h3 className='text-2xl font-bold text-icanDark mb-6'>Ready to Be Part of Our Journey?</h3>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/membership' className='px-8 py-3 bg-icanBlue text-white rounded-lg font-bold hover:opacity-90 transition'>
              Join Our Community
            </Link>
            {/* <Link href='/events' className='px-8 py-3 border-2 border-icanBlue text-icanBlue rounded-lg font-bold hover:bg-icanCream transition'>
              Explore Events
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  )
}
