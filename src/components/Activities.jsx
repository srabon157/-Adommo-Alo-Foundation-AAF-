import React from 'react';
import { BookOpen, Heart, TreePine, UsersRound, Sparkles, GraduationCap, ChevronRight } from 'lucide-react';

const iconMap = {
  BookOpen,
  Heart,
  TreePine,
  UsersRound,
  Sparkles,
  GraduationCap,
};

export default function Activities({ t, onSelectActivity }) {
  return (
    <section id="activities" className="section-padding activities-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={16} />
            <span>{t.activities.sectionTitle}</span>
          </div>
          <h2 className="section-title">{t.activities.sectionTitle}</h2>
          <p className="section-subtitle">{t.activities.subtitle}</p>
        </div>

        {/* 6 Activities Grid */}
        <div className="activities-grid">
          {t.activities.items.map((act) => {
            const IconComponent = iconMap[act.icon] || Sparkles;
            return (
              <div key={act.id} className="activity-card">
                <div className="activity-img-wrap">
                  <img src={act.image} alt={act.title} loading="lazy" />
                  <div className="activity-badge">
                    <span>{act.impact}</span>
                  </div>
                </div>

                <div className="activity-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary-emerald-soft)', color: 'var(--primary-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconComponent size={20} />
                    </div>
                    <h3 className="activity-title" style={{ margin: 0 }}>{act.title}</h3>
                  </div>

                  <p className="activity-desc">
                    {act.shortDesc}
                  </p>

                  <div className="activity-footer">
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => onSelectActivity(act)}
                      style={{ padding: '6px 16px', fontSize: '0.86rem' }}
                    >
                      <span>বিস্তারিত জানুন</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
