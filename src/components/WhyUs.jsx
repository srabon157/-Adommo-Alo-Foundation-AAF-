import React from 'react';
import { Building2, Sparkles, FileCheck, TrendingUp, GraduationCap, HeartHandshake, ShieldCheck } from 'lucide-react';

const iconMap = {
  Building2,
  Sparkles,
  FileCheck,
  TrendingUp,
  GraduationCap,
  HeartHandshake,
};

export default function WhyUs({ t }) {
  return (
    <section id="why-us" className="section-padding why-us-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={16} />
            <span>{t.whyUs.sectionTitle}</span>
          </div>
          <h2 className="section-title">{t.whyUs.sectionTitle}</h2>
          <p className="section-subtitle">{t.whyUs.subtitle}</p>
        </div>

        {/* Responsible Disclaimer Box */}
        <div style={{ maxWidth: '780px', margin: '-24px auto 44px auto', textAlign: 'center', background: '#ffffff', padding: '12px 24px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-light)', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <ShieldCheck size={18} color="var(--primary-emerald)" />
          <span>{t.whyUs.disclaimer}</span>
        </div>

        {/* 6 Pillars Grid */}
        <div className="why-grid">
          {t.whyUs.points.map((point) => {
            const IconComponent = iconMap[point.icon] || Sparkles;
            return (
              <div key={point.id} className="why-card">
                <div className="why-icon-box">
                  <IconComponent size={26} />
                </div>
                <h3 className="why-title">{point.title}</h3>
                <p className="why-desc">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
