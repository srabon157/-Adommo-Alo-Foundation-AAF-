import React from 'react';
import News from '../components/News';
import ManagerVoice from '../components/ManagerVoice';

export default function NewsPage({ t, onSelectNews }) {
  return (
    <main>
      <ManagerVoice />
      <News t={t} onSelectNews={onSelectNews} />
    </main>
  );
}

