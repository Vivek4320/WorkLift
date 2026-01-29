'use client';

import { useState } from 'react';
import Navbar from '../components/landing-page/Navbar';
import Loader from '../components/landing-page/Loader';
import HeroSwiper from '../components/landing-page/HeroSwiper';
import RecentsOffers from '../components/landing-page/RecentsOffers';
import Housing from '../components/landing-page/HousingSec';
import Footer from '../components/landing-page/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Loader onLoadingComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <div className="min-h-screen bg-gray-50 animate-fade-in">
          <Navbar />
          <HeroSwiper />
          <RecentsOffers />
          <Housing />
          <Footer />
        </div>
      )}
    </>
  );
}