import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { siteContent } from './data/content';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modals from './components/Modals';
import Toast from './components/Toast';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ProjectsPage from './pages/ProjectsPage';
import WhyUsPage from './pages/WhyUsPage';
import VolunteerPage from './pages/VolunteerPage';
import DonationPage from './pages/DonationPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

function AppInner() {
  const [lang, setLang] = useState('bn');
  const t = siteContent[lang];
  const location = useLocation();

  // Modals state
  const [activeModal, setActiveModal] = useState(null);
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
    window.location.href = '/donation';
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

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className={`app-root ${lang === 'en' ? 'font-en' : ''}`}>
      {/* Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenDonate={handleOpenDonate}
      />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage t={t} onOpenDonate={handleOpenDonate} />} />
        <Route path="/about" element={<AboutPage t={t} />} />
        <Route path="/activities" element={<ActivitiesPage t={t} onSelectActivity={handleSelectActivity} />} />
        <Route path="/projects" element={<ProjectsPage t={t} onSelectProject={handleSelectProject} />} />
        <Route path="/why-us" element={<WhyUsPage t={t} />} />
        <Route path="/volunteer" element={<VolunteerPage t={t} onShowToast={showToast} />} />
        <Route path="/donation" element={<DonationPage t={t} onShowToast={showToast} onOpenConfirmModal={handleOpenConfirmModal} />} />
        <Route path="/gallery" element={<GalleryPage t={t} onOpenLightbox={handleOpenLightbox} />} />
        <Route path="/news" element={<NewsPage t={t} onSelectNews={handleSelectNews} />} />
        <Route path="/team" element={<TeamPage t={t} />} />
        <Route path="/contact" element={<ContactPage t={t} onShowToast={showToast} />} />
        {/* Catch-all: redirect to home */}
        <Route path="*" element={<HomePage t={t} onOpenDonate={handleOpenDonate} />} />
      </Routes>

      {/* Footer */}
      <Footer t={t} onShowToast={showToast} />

      {/* Global Modals */}
      <Modals
        activeModal={activeModal}
        modalData={modalData}
        onClose={handleCloseModal}
        onOpenDonate={handleOpenDonate}
        onShowToast={showToast}
        lightboxState={lightboxState}
        setLightboxState={setLightboxState}
      />

      {/* Toast System */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
