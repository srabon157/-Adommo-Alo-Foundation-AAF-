import React from 'react';
import Activities from '../components/Activities';
import LeaderVoice from '../components/LeaderVoice';

export default function ActivitiesPage({ t, onSelectActivity }) {
  return (
    <main>
      <Activities t={t} onSelectActivity={onSelectActivity} />
      <LeaderVoice />
    </main>
  );
}

