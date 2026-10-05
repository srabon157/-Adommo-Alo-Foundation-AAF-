import React from 'react';
import Gallery from '../components/Gallery';

export default function GalleryPage({ t, onOpenLightbox }) {
  return (
    <main>
      <Gallery t={t} onOpenLightbox={onOpenLightbox} />
    </main>
  );
}
