import React from 'react';
import { Target, Compass, Heart, ShieldCheck, Scale, UsersRound, Eye, Sparkles } from 'lucide-react';

const valueIcons = {
  Heart,
  ShieldCheck,
  Scale,
  UsersRound,
  Compass,
  Eye,
};

export default function About({ t }) {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={16} />
            <span>{t.about.sectionTitle}</span>
          </div>
          <h2 className="section-title">{t.about.sectionTitle}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        {/* Intro text box */}
        <div className="about-intro-box">
          <p className="about-intro-text">
            {t.about.intro}
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="mission-vision-grid">
          {/* Mission */}
          <div className="mv-card">
            <div className="mv-header">
              <div className="mv-icon">
                <Target size={28} />
              </div>
              <h3 className="mv-title">{t.about.missionTitle}</h3>
            </div>
            <p className="mv-desc">{t.about.missionText}</p>
          </div>

          {/* Vision */}
          <div className="mv-card">
            <div className="mv-header">
              <div className="mv-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold-dark)' }}>
                <Compass size={28} />
              </div>
              <h3 className="mv-title">{t.about.visionTitle}</h3>
            </div>
            <p className="mv-desc">{t.about.visionText}</p>
          </div>
        </div>

        {/* Core Values Sub-header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--primary-deep)', marginBottom: '8px' }}>
            {t.about.valuesTitle}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem' }}>
            {t.about.valuesSub}
          </p>
        </div>

        {/* 6 Core Values Grid */}
        <div className="values-grid">
          {t.about.values.map((val) => {
            const IconComponent = valueIcons[val.icon] || Heart;
            return (
              <div key={val.id} className="value-card">
                <div className="value-card-header">
                  <div className="value-icon-box">
                    <IconComponent size={22} />
                  </div>
                  <h4 className="value-title">{val.title}</h4>
                </div>
                <p className="value-desc">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
