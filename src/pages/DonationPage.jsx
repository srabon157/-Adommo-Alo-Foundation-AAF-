import React from 'react';
import Donation from '../components/Donation';

export default function DonationPage({ t, onShowToast, onOpenConfirmModal }) {
  return (
    <main>
      <Donation t={t} onShowToast={onShowToast} onOpenConfirmModal={onOpenConfirmModal} />
    </main>
  );
}
