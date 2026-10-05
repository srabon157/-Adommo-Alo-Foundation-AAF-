import React from 'react';
import Activities from '../components/Activities';

export default function ActivitiesPage({ t, onSelectActivity }) {
  return (
    <main>
      <Activities t={t} onSelectActivity={onSelectActivity} />
    </main>
  );
}
