import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Globe, ChevronRight } from 'lucide-react';

export default function Navbar({ lang, setLang, t, onOpenDonate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'activities', 'projects', 'why-us', 'volunteer', 'donation', 'gallery', 'news', 'team', 'contact'];
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home, id: 'home' },
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#activities', label: t.nav.activities, id: 'activities' },
    { href: '#projects', label: t.nav.projects, id: 'projects' },
    { href: '#why-us', label: t.nav.whyUs, id: 'why-us' },
    { href: '#volunteer', label: t.nav.volunteer, id: 'volunteer' },
    { href: '#gallery', label: t.nav.gallery, id: 'gallery' },
    { href: '#news', label: t.nav.news, id: 'news' },
    { href: '#team', label: t.nav.team, id: 'team' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Brand Logo */}
            <a href="#home" className="brand-logo-link" onClick={(e) => handleNavClick(e, '#home')}>
              <img src="/images/aaf-logo.svg" alt="Adommo Alo Foundation Logo" className="brand-logo-svg" />
            </a>

            {/* Desktop Navigation Links */}
            <nav>
              <ul className="nav-menu">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
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
              <a
                href="#donation"
                className="btn btn-primary btn-sm btn-donate"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenDonate ? onOpenDonate() : handleNavClick(e, '#donation');
                }}
              >
                <Heart size={16} className="donate-pulse-icon" fill="#dc2626" />
                <span>{t.nav.donateBtn}</span>
              </a>

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

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <img src="/images/aaf-logo.svg" alt="AAF Logo" style={{ height: '42px' }} />
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
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Donate CTA */}
        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
          <a
            href="#donation"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={(e) => {
              setMobileOpen(false);
              onOpenDonate ? onOpenDonate() : handleNavClick(e, '#donation');
            }}
          >
            <Heart size={18} className="donate-pulse-icon" fill="#dc2626" />
            <span>{t.nav.donateBtn}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
