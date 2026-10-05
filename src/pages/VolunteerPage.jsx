import React from 'react';
import Volunteer from '../components/Volunteer';

export default function VolunteerPage({ t, onShowToast }) {
  return (
    <main>
      <Volunteer t={t} onShowToast={onShowToast} />
    </main>
  );
}
