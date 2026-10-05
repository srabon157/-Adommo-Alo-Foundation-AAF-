import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Heart, Facebook, Instagram, Youtube, Linkedin, Send } from 'lucide-react';

export default function Footer({ t, onShowToast }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      onShowToast('অনুগ্রহ করে সঠিক ইমেইল ঠিকানা দিন।', 'error');
      return;
    }
    onShowToast(t.footer.newsletterSuccess, 'success');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div>
            <img src="/images/aaf-logo.svg" alt="AAF Logo" className="footer-logo" />
            <p className="footer-desc">
              {t.footer.aboutText}
            </p>
            <div className="footer-social-row">
              <a href="#" className="footer-social-btn" title="Facebook Placeholder" onClick={(e) => e.preventDefault()}>
                <Facebook size={18} />
              </a>
              <a href="#" className="footer-social-btn" title="Instagram Placeholder" onClick={(e) => e.preventDefault()}>
                <Instagram size={18} />
              </a>
              <a href="#" className="footer-social-btn" title="YouTube Placeholder" onClick={(e) => e.preventDefault()}>
                <Youtube size={18} />
              </a>
              <a href="#" className="footer-social-btn" title="LinkedIn Placeholder" onClick={(e) => e.preventDefault()}>
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">{t.footer.quickLinksTitle}</h4>
            <ul className="footer-links-list">
              <li><Link to="/">{t.nav.home}</Link></li>
              <li><Link to="/about">{t.nav.about}</Link></li>
              <li><Link to="/activities">{t.nav.activities}</Link></li>
              <li><Link to="/projects">{t.nav.projects}</Link></li>
              <li><Link to="/volunteer">{t.nav.volunteer}</Link></li>
              <li><Link to="/gallery">{t.nav.gallery}</Link></li>
              <li><Link to="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="footer-col-title">{t.footer.activitiesTitle}</h4>
            <ul className="footer-links-list">
              <li><Link to="/activities">শিক্ষা ও দক্ষতা উন্নয়ন</Link></li>
              <li><Link to="/activities">মানবিক সহায়তা ও ত্রাণ</Link></li>
              <li><Link to="/activities">পরিবেশ ও জলবায়ু সচেতনতা</Link></li>
              <li><Link to="/activities">কমিউনিটি ডেভেলপমেন্ট</Link></li>
              <li><Link to="/activities">নারী ও শিশু কল্যাণ</Link></li>
              <li><Link to="/activities">যুব ও স্বেচ্ছাসেবা</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="newsletter-box">
            <h4 className="footer-col-title">{t.footer.newsletterTitle}</h4>
            <p className="newsletter-sub">{t.footer.newsletterSub}</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder={t.footer.newsletterPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary btn-sm" style={{ flexShrink: 0 }}>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Heart size={14} fill="#dc2626" color="#dc2626" /> {t.footer.developedWith}
            </span>
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
            >
              <ArrowUp size={14} />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
