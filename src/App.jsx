import React, { useState } from 'react';
import { siteContent } from './data/content';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Activities from './components/Activities';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Volunteer from './components/Volunteer';
import Donation from './components/Donation';
import Gallery from './components/Gallery';
import News from './components/News';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modals from './components/Modals';
import Toast from './components/Toast';

export default function App() {
  const [lang, setLang] = useState('bn'); // Primary: Bengali, Secondary: English
  const t = siteContent[lang];

  // Modals state
  const [activeModal, setActiveModal] = useState(null); // 'activity' | 'project' | 'news' | 'donateConfirm'
  const [modalData, setModalData] = useState(null);

  // Lightbox state
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    items: [],
    index: 0,
  });

  // Toasts state
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 4000);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOpenDonate = () => {
    const el = document.getElementById('donation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectActivity = (activity) => {
    setModalData(activity);
    setActiveModal('activity');
  };

  const handleSelectProject = (project) => {
    setModalData(project);
    setActiveModal('project');
  };

  const handleSelectNews = (newsItem) => {
    setModalData(newsItem);
    setActiveModal('news');
  };

  const handleOpenConfirmModal = (donateDetails) => {
    setModalData(donateDetails);
    setActiveModal('donateConfirm');
  };

  const handleOpenLightbox = (items, index) => {
    setLightboxState({
      isOpen: true,
      items,
      index,
    });
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  return (
    <div className={`app-root ${lang === 'en' ? 'font-en' : ''}`}>
      {/* 1. Header / Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenDonate={handleOpenDonate}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          t={t}
          onOpenDonate={handleOpenDonate}
        />

        {/* 3. Impact / Statistics Section */}
        <Stats
          t={t}
        />

        {/* 4. About Us Section */}
        <About
          t={t}
        />

        {/* 5. Our Activities Section */}
        <Activities
          t={t}
          onSelectActivity={handleSelectActivity}
        />

        {/* 6. Featured Projects Section */}
        <Projects
          t={t}
          onSelectProject={handleSelectProject}
        />

        {/* 7. Why Adommo Alo Foundation */}
        <WhyUs
          t={t}
        />

        {/* 8. Volunteer Registration Section */}
        <Volunteer
          t={t}
          onShowToast={showToast}
        />

        {/* 9. Donation & Support Section */}
        <Donation
          t={t}
          onShowToast={showToast}
          onOpenConfirmModal={handleOpenConfirmModal}
        />

        {/* 10. Photo Gallery Section */}
        <Gallery
          t={t}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 11. News & Updates Section */}
        <News
          t={t}
          onSelectNews={handleSelectNews}
        />

        {/* 12. Team Section */}
        <Team
          t={t}
        />

        {/* 13. Testimonials Section */}
        <Testimonials
          t={t}
        />

        {/* 14. Contact Section */}
        <Contact
          t={t}
          onShowToast={showToast}
        />
      </main>

      {/* 15. Footer */}
      <Footer
        t={t}
        onShowToast={showToast}
      />

      {/* Global Modals (Activity, Project, News, Lightbox, Donation) */}
      <Modals
        activeModal={activeModal}
        modalData={modalData}
        onClose={handleCloseModal}
        onOpenDonate={handleOpenDonate}
        onShowToast={showToast}
        lightboxState={lightboxState}
        setLightboxState={setLightboxState}
      />

      {/* Floating Toast System */}
      <Toast
        toasts={toasts}
        onDismiss={dismissToast}
      />
    </div>
  );
}
