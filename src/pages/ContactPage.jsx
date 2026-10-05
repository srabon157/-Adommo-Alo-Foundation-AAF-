import React from 'react';
import Contact from '../components/Contact';

export default function ContactPage({ t, onShowToast }) {
  return (
    <main>
      <Contact t={t} onShowToast={onShowToast} />
    </main>
  );
}
