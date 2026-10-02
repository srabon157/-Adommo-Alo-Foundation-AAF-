import React from 'react';
import { Quote, MessageSquareHeart, AlertCircle } from 'lucide-react';

export default function Testimonials({ t }) {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquareHeart size={16} />
            <span>{t.testimonials.sectionTitle}</span>
          </div>
          <h2 className="section-title">{t.testimonials.sectionTitle}</h2>
          <p className="section-subtitle">{t.testimonials.subtitle}</p>
        </div>

        {/* Labeled Disclaimer */}
        <p className="testimonial-disclaimer">
          {t.testimonials.disclaimer}
        </p>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {t.testimonials.items.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div>
                <Quote size={32} className="quote-icon" />
                <p className="testimonial-quote">“{item.quote}”</p>
              </div>
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                <h4 className="testimonial-author">{item.author}</h4>
                <p className="testimonial-role">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
