'use client';

import { useEffect, useState } from 'react';

export function EventCountdown({ eventDate, eventName }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(eventDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  const TimeUnit = ({ value, label }) => (
    <div className='flex flex-col items-center animate-fade-in-up'>
      <div className='bg-gradient-to-br from-icanBlue to-icanDark text-white p-4 rounded-lg min-w-20'>
        <span className='text-3xl font-bold'>{String(value).padStart(2, '0')}</span>
      </div>
      <span className='text-sm font-semibold text-gray-600 mt-2'>{label}</span>
    </div>
  );

  return (
    <div className='bg-gradient-to-r from-icanLight to-white p-8 rounded-2xl shadow-lg'>
      <h4 className='text-2xl font-bold text-icanDark mb-6 text-center'>{eventName}</h4>
      <div className='flex justify-center gap-4'>
        <TimeUnit value={timeLeft.days} label='Days' />
        <TimeUnit value={timeLeft.hours} label='Hours' />
        <TimeUnit value={timeLeft.minutes} label='Minutes' />
        <TimeUnit value={timeLeft.seconds} label='Seconds' />
      </div>
    </div>
  );
}
