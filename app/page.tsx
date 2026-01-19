'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import HeroSwiper from '../components/HeroSwiper';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Loader onLoadingComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <div className="min-h-screen bg-gray-50 animate-fade-in">
          <Navbar />
          <HeroSwiper />
        </div>
      )}
    </>
  );
}