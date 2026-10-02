import React from 'react';
import { Newspaper, Calendar, ChevronRight, Sparkles } from 'lucide-react';

export default function News({ t, onSelectNews }) {
  return (
    <section id="news" className="section-padding news-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Newspaper size={16} />
            <span>{t.news.sectionTitle}</span>
          </div>
          <h2 className="section-title">{t.news.sectionTitle}</h2>
          <p className="section-subtitle">{t.news.subtitle}</p>
        </div>

        {/* News Cards Grid */}
        <div className="news-grid">
          {t.news.items.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-img-box">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="news-cat-badge">{item.categoryBn || item.category}</span>
              </div>

              <div className="news-card-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>

                <h3 className="news-title">{item.title}</h3>
                <p className="news-desc">{item.desc}</p>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => onSelectNews(item)}
                    style={{ width: '100%' }}
                  >
                    <span>{t.news.readMore}</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
