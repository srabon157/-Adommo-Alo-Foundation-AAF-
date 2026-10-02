import React, { useState } from 'react';
import { Camera, MapPin, Calendar, Maximize2, Sparkles } from 'lucide-react';

export default function Gallery({ t, onOpenLightbox }) {
  const [filter, setFilter] = useState('all');

  const filteredItems = t.gallery.items.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Camera size={16} />
            <span>{t.gallery.sectionTitle}</span>
          </div>
          <h2 className="section-title">{t.gallery.sectionTitle}</h2>
          <p className="section-subtitle">{t.gallery.subtitle}</p>
        </div>

        {/* Category Filters */}
        <div className="filter-pills">
          <button
            type="button"
            className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            {t.gallery.filterAll}
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === 'edu' ? 'active' : ''}`}
            onClick={() => setFilter('edu')}
          >
            {t.gallery.filterEdu}
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === 'relief' ? 'active' : ''}`}
            onClick={() => setFilter('relief')}
          >
            {t.gallery.filterRelief}
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === 'env' ? 'active' : ''}`}
            onClick={() => setFilter('env')}
          >
            {t.gallery.filterEnv}
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === 'volunteer' ? 'active' : ''}`}
            onClick={() => setFilter('volunteer')}
          >
            {t.gallery.filterVolunteer}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => onOpenLightbox(filteredItems, index)}
              title="ক্লিক করে বড় করে দেখুন"
            >
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-tag">
                  {item.category === 'edu' ? 'শিক্ষা' : item.category === 'relief' ? 'ত্রাণ ও সহায়তা' : item.category === 'env' ? 'পরিবেশ' : 'স্বেচ্ছাসেবক'}
                </span>
                <h4 className="gallery-item-title">{item.title}</h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="gallery-item-location">
                    <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {item.location}
                  </span>
                  <Maximize2 size={16} color="#ffffff" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
