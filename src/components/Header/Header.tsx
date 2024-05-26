'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

  const bgClass = isScrolledDown ? 'bg-black' : 'bg-transparent';

  return (
    <div
      className={`flex p-6 justify-between items-center fixed w-full top-0 left-0 ${bgClass} duration-200 z-50`}>
      <Link href="/">
        <h1 className="text-xl">
          Cinema <span className="text-indigo-600">Hub</span>
        </h1>
      </Link>
      <nav>
        <Link href="/films" className="mr-4">
          Films
        </Link>
        <Link href="/tv-shows">TV shows</Link>
      </nav>
    </div>
  );
};
