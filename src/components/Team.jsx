import React, { useState } from 'react';
import { Users, AlertCircle, Linkedin, Facebook, Twitter, Quote } from 'lucide-react';

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
        </div>

        {/* Disclaimer Badge */}
        <div className="team-disclaimer">
          <AlertCircle size={18} />
          <span>{t.team.disclaimer}</span>
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
              {/* Large Photo Area */}
              <div className="team-photo-area">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                />
                {/* Gradient Overlay on Hover */}
                <div className="team-photo-overlay">
                  <div className="team-overlay-socials">
                    <a
                      href="#team"
                      className="team-social-icon"
                      title="Facebook"
                      onClick={(e) => e.preventDefault()}
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#team"
                      className="team-social-icon"
                      title="LinkedIn"
                      onClick={(e) => e.preventDefault()}
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#team"
                      className="team-social-icon"
                      title="Twitter"
                      onClick={(e) => e.preventDefault()}
                      aria-label="Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="team-role-badge">
                  {member.role}
                </div>
              </div>

              {/* Card Body */}
              <div className="team-card-body">
                <h3 className="team-name">{member.name}</h3>

                <div className="team-bio-wrap">
                  <Quote size={18} className="team-quote-icon" />
                  <p className="team-bio">{member.bio}</p>
                </div>

                {/* Bottom Social Row (always visible on mobile) */}
                <div className="team-social-row">
                  <a
                    href="#team"
                    className="team-social-pill"
                    title="Facebook"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Facebook size={14} />
                  </a>
                  <a
                    href="#team"
                    className="team-social-pill"
                    title="LinkedIn"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href="#team"
                    className="team-social-pill"
                    title="Twitter"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Twitter size={14} />
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
