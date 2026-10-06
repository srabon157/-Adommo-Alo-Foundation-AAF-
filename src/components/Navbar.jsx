import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, Menu, X, Globe } from 'lucide-react';

export default function Navbar({ lang, setLang, t, onOpenDonate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t.nav.home, id: 'home' },
    { to: '/about', label: t.nav.about, id: 'about' },
    { to: '/activities', label: t.nav.activities, id: 'activities' },
    { to: '/projects', label: t.nav.projects, id: 'projects' },
    { to: '/why-us', label: t.nav.whyUs, id: 'why-us' },
    { to: '/volunteer', label: t.nav.volunteer, id: 'volunteer' },
    { to: '/gallery', label: t.nav.gallery, id: 'gallery' },
    { to: '/news', label: t.nav.news, id: 'news' },
    { to: '/team', label: t.nav.team, id: 'team' },
    { to: '/contact', label: t.nav.contact, id: 'contact' },
  ];

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <>
      <header className={`site-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Brand Logo */}
            <Link to="/" className="brand-logo-link">
              <img src="/images/aaf-logo.png" alt="Adommo Alo Foundation Logo" className="brand-logo-svg" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav>
              <ul className="nav-menu">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.to}
                      className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side Actions */}
            <div className="nav-actions">
              {/* Language Switcher */}
              <div className="lang-switch" title="Language Switcher">
                <button
                  type="button"
                  className={`lang-btn ${lang === 'bn' ? 'active' : ''}`}
                  onClick={() => setLang('bn')}
                >
                  বাং
                </button>
                <button
                  type="button"
                  className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => setLang('en')}
                >
                  EN
                </button>
              </div>

              {/* Prominent Donate Button */}
              <button
                type="button"
                className="btn btn-primary btn-sm btn-donate"
                onClick={() => navigate('/donation')}
              >
                <Heart size={16} className="donate-pulse-icon" fill="#dc2626" />
                <span>{t.nav.donateBtn}</span>
              </button>

              {/* Hamburger Button for Mobile */}
              <button
                type="button"
                className="hamburger-btn"
                onClick={() => setMobileOpen(true)}
                aria-label="Open Navigation Menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <img src="/images/aaf-logo.png" alt="AAF Logo" style={{ height: '44px', width: 'auto' }} />
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Language Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', padding: '0 4px' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Globe size={16} /> ভাষা / Language:
          </span>
          <div className="lang-switch">
            <button
              type="button"
              className={`lang-btn ${lang === 'bn' ? 'active' : ''}`}
              onClick={() => setLang('bn')}
            >
              বাংলা
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              English
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        <ul className="mobile-nav-links">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.to}
                className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Donate CTA */}
        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileOpen(false);
              navigate('/donation');
            }}
          >
            <Heart size={18} className="donate-pulse-icon" fill="#dc2626" />
            <span>{t.nav.donateBtn}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
