import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';

export default function HomePage({ t, onOpenDonate }) {
  return (
    <main>
      <Hero t={t} onOpenDonate={onOpenDonate} />
      <Stats t={t} />
    </main>
  );
}
