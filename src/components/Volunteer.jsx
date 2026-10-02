import React, { useState } from 'react';
import { Users, CheckCircle, Send, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function Volunteer({ t, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interest: '',
    availability: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'নাম আবশ্যক';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'সঠিক ইমেইল দিন';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'সঠিক মোবাইল নম্বর দিন';
    if (!formData.location.trim()) errs.location = 'অবস্থান বা জেলা দিন';
    if (!formData.interest) errs.interest = 'আগ্রহের ক্ষেত্র নির্বাচন করুন';
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

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      onShowToast(t.volunteer.form.successMsg, 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        interest: '',
        availability: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="volunteer" className="section-padding volunteer-section">
      <div className="container">
        <div className="volunteer-wrapper">
          {/* Left Column: Inspiring copy and perks */}
          <div className="volunteer-left">
            <span className="volunteer-left-tag">
              <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
              {t.volunteer.sectionTitle}
            </span>

            <h2 className="volunteer-headline">
              {t.volunteer.headline}
            </h2>

            <p className="volunteer-subtext">
              {t.volunteer.subtext}
            </p>

            <div className="volunteer-perks-list">
              {t.volunteer.perks.map((perk, idx) => (
                <div key={idx} className="volunteer-perk-item">
                  <div className="volunteer-perk-icon">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className="volunteer-perk-title">{perk.title}</h4>
                    <p className="volunteer-perk-desc">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Registration Form Card */}
          <div className="volunteer-form-card">
            <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--primary-deep)', marginBottom: '20px' }}>
              স্বেচ্ছাসেবক আবেদনপত্র
            </h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">{t.volunteer.form.nameLabel}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t.volunteer.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">{t.volunteer.form.emailLabel}</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder={t.volunteer.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.email}</span>}
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">{t.volunteer.form.phoneLabel}</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder={t.volunteer.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">{t.volunteer.form.locationLabel}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t.volunteer.form.locationPlaceholder}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                  {errors.location && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.location}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t.volunteer.form.interestLabel}</label>
                <select
                  className="form-control"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                >
                  <option value="">{t.volunteer.form.interestDefault}</option>
                  {t.volunteer.form.interests.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.interest && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.interest}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">{t.volunteer.form.availabilityLabel}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t.volunteer.form.availabilityPlaceholder}
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.volunteer.form.messageLabel}</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder={t.volunteer.form.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-green btn-lg"
                style={{ width: '100%', marginTop: '8px' }}
              >
                {loading ? (
                  <span>{t.volunteer.form.submittingBtn}</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{t.volunteer.form.submitBtn}</span>
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
