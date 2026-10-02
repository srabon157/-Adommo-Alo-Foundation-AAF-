import React, { useState } from 'react';
import { MapPin, Calendar, Users, Eye, Sparkles } from 'lucide-react';

export default function Projects({ t, onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = t.projects.items.filter((item) => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={16} />
            <span>{t.projects.sectionTitle}</span>
          </div>
          <h2 className="section-title">{t.projects.sectionTitle}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        {/* Filter Pills */}
        <div className="filter-pills">
          <button
            type="button"
            className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            {t.projects.filterAll}
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === 'ongoing' ? 'active' : ''}`}
            onClick={() => setFilter('ongoing')}
          >
            {t.projects.filterOngoing}
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            {t.projects.filterCompleted}
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="project-img-box">
                <img src={proj.image} alt={proj.title} loading="lazy" />
                <span className={`project-status-tag status-${proj.status}`}>
                  {proj.statusLabel}
                </span>
                <div className="project-meta-pill">
                  <MapPin size={14} />
                  <span>{proj.location}</span>
                </div>
              </div>

              <div className="project-card-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  <Calendar size={14} />
                  <span>{proj.date}</span>
                </div>

                <h3 className="project-title">{proj.title}</h3>

                <p className="project-desc">{proj.shortDesc}</p>

                <div className="project-beneficiaries">
                  <Users size={16} />
                  <span>উপকারভোগী / লক্ষ্য: {proj.beneficiaries}</span>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                  <button
                    type="button"
                    className="btn btn-green btn-sm"
                    style={{ width: '100%' }}
                    onClick={() => onSelectProject(proj)}
                  >
                    <Eye size={16} />
                    <span>{t.projects.viewDetails}</span>
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
