import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Send, Map, Sparkles, MessageCircle } from 'lucide-react';

export default function Contact({ t, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'নাম আবশ্যক';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'সঠিক ইমেইল দিন';
    if (!formData.phone.trim()) errs.phone = 'ফোন নম্বর দিন';
    if (!formData.subject.trim()) errs.subject = 'বিষয় লিখুন';
    if (!formData.message.trim()) errs.message = 'বার্তা লিখুন';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onShowToast(t.contact.form.successMsg, 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={16} />
            <span>{t.contact.sectionTitle}</span>
          </div>
          <h2 className="section-title">{t.contact.sectionTitle}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Info Cards & Interactive Map Placeholder */}
          <div className="contact-info-panel">
            {/* Address */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <p className="contact-card-label">{t.contact.addressLabel}</p>
                <p className="contact-card-value">{t.contact.addressVal}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Phone size={22} />
              </div>
              <div>
                <p className="contact-card-label">{t.contact.phoneLabel}</p>
                <p className="contact-card-value font-en">{t.contact.phoneVal}</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div>
                <p className="contact-card-label">{t.contact.emailLabel}</p>
                <p className="contact-card-value font-en">{t.contact.emailVal}</p>
              </div>
            </div>

            {/* Facebook */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Facebook size={22} />
              </div>
              <div>
                <p className="contact-card-label">{t.contact.facebookLabel}</p>
                <p className="contact-card-value font-en">{t.contact.facebookVal}</p>
              </div>
            </div>

            {/* Interactive Google Maps Placeholder Card */}
            <div className="map-placeholder-box">
              <Map size={36} color="var(--primary-emerald)" />
              <div>
                <p style={{ fontWeight: 700, color: 'var(--primary-deep)', fontSize: '1.05rem', marginBottom: '4px' }}>
                  {t.contact.mapTitle}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {t.contact.mapHint}
                </p>
              </div>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => onShowToast('গুগল ম্যাপস লোকেশন লিংক প্রশাসনিক অনুমোদনের পর যুক্ত হবে।', 'info')}
              >
                <span>গুগল ম্যাপে দেখুন</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">
              {t.contact.form.title}
            </h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label">{t.contact.form.nameLabel}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.name}</span>}
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">{t.contact.form.emailLabel}</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder={t.contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">{t.contact.form.phoneLabel}</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder={t.contact.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t.contact.form.subjectLabel}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t.contact.form.subjectPlaceholder}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                {errors.subject && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">{t.contact.form.messageLabel}</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder={t.contact.form.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-green btn-lg"
                style={{ width: '100%', marginTop: '6px' }}
              >
                {loading ? (
                  <span>{t.contact.form.sendingBtn}</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{t.contact.form.sendBtn}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
