import React from 'react';
import News from '../components/News';

export default function NewsPage({ t, onSelectNews }) {
  return (
    <main>
      <News t={t} onSelectNews={onSelectNews} />
    </main>
  );
}
