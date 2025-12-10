export default function Contact() {
  return (
    <main className='min-h-screen bg-icanLight'>
      <div className='max-w-4xl mx-auto py-16 px-4'>
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-icanDark mb-4'>Contact Us</h2>
          <p className='text-lg text-gray-700'>We'd love to hear from you. Get in touch with ICAN today.</p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Contact Info Cards */}
          <div className='bg-white p-8 rounded-lg border border-gray-200'>
            <h3 className='text-2xl font-bold text-icanDark mb-6'>Get In Touch</h3>

            <div className='space-y-6'>
              {/* Email */}
              <div>
                <h4 className='font-semibold text-icanDark mb-2'>📧 Email</h4>
                <a href='mailto:info@ican-northyork.ca' className='text-icanBlue hover:underline'>
                  info@ican-northyork.ca
                </a>
              </div>

              {/* Phone */}
              <div>
                <h4 className='font-semibold text-icanDark mb-2'>📞 Phone</h4>
                <a href='tel:+15551234567' className='text-icanBlue hover:underline'>
                  (555) 555-0123
                </a>
              </div>

              {/* Location */}
              <div>
                <h4 className='font-semibold text-icanDark mb-2'>📍 Location</h4>
                <p className='text-gray-700'>North York, Ontario<br />Canada</p>
              </div>

              {/* Hours */}
              <div>
                <h4 className='font-semibold text-icanDark mb-2'>⏰ Hours</h4>
                <p className='text-gray-700'>Monday - Friday: 9 AM - 5 PM<br />Saturday & Sunday: By Appointment</p>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className='bg-white p-8 rounded-lg border border-gray-200'>
            <h3 className='text-2xl font-bold text-icanDark mb-6'>Send a Message</h3>
            <form className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                <input type='text' placeholder='Your name' className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-icanBlue focus:border-transparent' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                <input type='email' placeholder='your@email.com' className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-icanBlue focus:border-transparent' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
                <textarea placeholder='Your message...' rows='4' className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-icanBlue focus:border-transparent'></textarea>
              </div>
              <button type='submit' className='w-full px-4 py-2 bg-icanBlue text-white rounded-lg font-semibold hover:opacity-90 transition'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}