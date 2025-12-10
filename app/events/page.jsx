export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Diwali Night',
      date: 'Nov 1, 2025',
      description: 'A grand celebration of lights, traditional food, cultural performances, and family gatherings.',
      emoji: '🪔',
    },
    {
      id: 2,
      title: 'Republic Day Celebration',
      date: 'Jan 26, 2026',
      description: 'Commemorate India\'s Republic Day with cultural performances and community pride.',
      emoji: '🇮🇳',
    },
    {
      id: 3,
      title: 'Holi Festival of Colors',
      date: 'Mar 14, 2026',
      description: 'Celebrate the festival of colors with music, food, and joyful celebrations.',
      emoji: '🎨',
    },
    {
      id: 4,
      title: 'Community Meet',
      date: 'Every Month',
      description: 'Monthly meet-ups for new arrivals, families, and community members to network.',
      emoji: '🤝',
    },
  ];

  return (
    <main className='min-h-screen bg-icanLight'>
      <div className='max-w-4xl mx-auto py-16 px-4'>
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-icanDark mb-4'>Events Calendar</h2>
          <p className='text-lg text-gray-700'>We host a variety of cultural and community events throughout the year.</p>
        </div>

        <div className='grid gap-6'>
          {events.map((event) => (
            <div key={event.id} className='bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition'>
              <div className='flex items-start gap-4'>
                <div className='text-4xl'>{event.emoji}</div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-bold text-icanDark mb-2'>{event.title}</h3>
                  <p className='text-gray-700 mb-3'>{event.description}</p>
                  <p className='text-sm font-semibold text-icanBlue'>📅 {event.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-12 p-8 bg-icanDark text-white rounded-lg text-center'>
          <h3 className='text-2xl font-bold mb-2'>Want to Host an Event?</h3>
          <p className='mb-4'>Contact us to organize your own community event.</p>
          <a href='mailto:ican.connects@outlook.com' className='inline-block px-6 py-2 bg-icanGold text-icanDark rounded-lg font-semibold hover:opacity-90 transition'>
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  )
}