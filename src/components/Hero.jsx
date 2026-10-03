import React from 'react';
import { Heart, ArrowRight, Sparkles, Users, Award, ShieldCheck } from 'lucide-react';

export default function Hero({ t, onOpenDonate }) {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDonation = (e) => {
    e.preventDefault();
    if (onOpenDonate) {
      onOpenDonate();
    } else {
      const el = document.getElementById('donation');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Content */}
          <div className="hero-content">


            <h1 className="hero-headline">
              {t.hero.headline}
            </h1>

            <p className="hero-subtext">
              {t.hero.subtext}
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={scrollToDonation}
              >
                <Heart size={18} className="donate-pulse-icon" fill="#dc2626" />
                <span>{t.hero.ctaPrimary}</span>
              </button>

              <a
                href="#about"
                className="btn btn-outline btn-lg"
                onClick={scrollToAbout}
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Micro badges below CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '32px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <Users size={18} color="var(--accent-gold-dark)" />
                <span>তরুণদের সরাসরি মাঠপর্যায়ে অংশগ্রহণ</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image & Floating Badges */}
          <div className="hero-visual-wrapper">
            <div className="hero-image-frame">
              <img
                src="/images/hero-community.jpg"
                alt="Adommo Alo Foundation community work with Bangladeshi children"
                loading="eager"
              />
            </div>

            {/* Top-Left Floating Badge */}
            <div className="hero-floating-card-1">
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-emerald-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)' }}>
                <Users size={20} />
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>মানবতার সহযাত্রী</p>
                <p style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--primary-deep)' }}>{t.hero.volunteersBadge}</p>
              </div>
            </div>

            {/* Bottom-Right Floating Badge */}
            <div className="hero-floating-card-2">
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-gold-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-dark)' }}>
                <Heart size={20} fill="var(--accent-gold)" />
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>টেকসই প্রভাব</p>
                <p style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--primary-deep)' }}>{t.hero.statsBadge}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
