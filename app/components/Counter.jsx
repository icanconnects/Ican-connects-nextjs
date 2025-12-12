'use client';

import { useEffect, useRef, useState } from 'react';

export function Counter({ end, duration = 2, label, icon }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <div ref={countRef} className='text-center animate-fade-in-up'>
      <div className='text-5xl md:text-6xl font-bold text-icanBlue mb-2'>
        {icon && <span className='text-4xl block mb-2'>{icon}</span>}
        {count.toLocaleString()}+
      </div>
      <p className='text-lg text-gray-700 font-semibold'>{label}</p>
    </div>
  );
}
