import React, { useState } from 'react';
import { Users, Award, Linkedin, Facebook, Mail, Sparkles, ShieldCheck } from 'lucide-react';

export default function Team({ t }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="team" className="section-padding team-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Users size={16} />
            <span>{t.team.sectionTitle}</span>
          </div>
          <h2 className="section-title">{t.team.sectionTitle}</h2>
          <p className="section-subtitle">{t.team.subtitle}</p>

          {/* Prestigious Central Executive Leadership Banner */}
          {t.team.badge && (
            <div className="team-leadership-banner">
              <div className="team-banner-glow"></div>
              <Award size={18} className="team-banner-icon" />
              <span className="team-banner-text">{t.team.badge}</span>
            </div>
          )}
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {t.team.members.map((member) => (
            <div
              key={member.id}
              className={`team-card ${hoveredId === member.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Luxury Top Accent Line */}
              <div className="team-card-accent"></div>

              {/* Photo Area */}
              <div className="team-photo-area">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                  loading="lazy"
                />

                {/* Floating Founder Badge */}
                <div className="team-founder-badge">
                  <Sparkles size={12} className="team-founder-sparkle" />
                  <span>{t.team.founderTag || 'Founder'}</span>
                </div>

                {/* Hover Gradient Overlay with Quick Socials */}
                <div className="team-photo-overlay">
                  <div className="team-overlay-socials">
                    <a
                      href={member.social?.facebook || '#team'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-social-icon facebook"
                      title="Facebook"
                      aria-label="Facebook"
                      onClick={(e) => {
                        if (!member.social?.facebook || member.social.facebook === '#team') {
                          e.preventDefault();
                        }
                      }}
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href={member.social?.linkedin || '#team'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-social-icon linkedin"
                      title="LinkedIn"
                      aria-label="LinkedIn"
                      onClick={(e) => {
                        if (!member.social?.linkedin || member.social.linkedin === '#team') {
                          e.preventDefault();
                        }
                      }}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={`mailto:${member.social?.email || 'contact@adommoalo.org'}`}
                      className="team-social-icon email"
                      title="Email"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="team-card-body">
                {/* Member Name */}
                <div className="team-name-group">
                  <h3 className="team-name">{member.name}</h3>
                  {member.nameEn && member.nameEn !== member.name && (
                    <span className="team-name-en">{member.nameEn}</span>
                  )}
                </div>

                {/* Role / Designation Capsule */}
                <div className="team-role-capsule">
                  <ShieldCheck size={14} className="team-role-icon" />
                  <span className="team-role-text">{member.role}</span>
                </div>

                {/* Focus Areas / Pillar Chips */}
                <div className="team-tags-container">
                  {(member.tags || (member.bio ? member.bio.split('•').map(s => s.trim()) : [])).map((tag, idx) => (
                    <span key={idx} className="team-tag-pill">
                      <span className="team-tag-bullet">•</span>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Social Row for mobile and quick action */}
                <div className="team-social-row">
                  <a
                    href={member.social?.facebook || '#team'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-pill facebook"
                    title="Facebook"
                    aria-label="Facebook"
                    onClick={(e) => {
                      if (!member.social?.facebook || member.social.facebook === '#team') {
                        e.preventDefault();
                      }
                    }}
                  >
                    <Facebook size={15} />
                  </a>
                  <a
                    href={member.social?.linkedin || '#team'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-pill linkedin"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                    onClick={(e) => {
                      if (!member.social?.linkedin || member.social.linkedin === '#team') {
                        e.preventDefault();
                      }
                    }}
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href={`mailto:${member.social?.email || 'contact@adommoalo.org'}`}
                    className="team-social-pill email"
                    title="Email"
                    aria-label="Email"
                  >
                    <Mail size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
