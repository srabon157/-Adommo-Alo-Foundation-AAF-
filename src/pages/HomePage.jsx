import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FounderVoice from '../components/FounderVoice';

export default function HomePage({ t, onOpenDonate }) {
  return (
    <main>
      <Hero t={t} onOpenDonate={onOpenDonate} />
      <FounderVoice />
      <Stats t={t} />
    </main>
  );
}
