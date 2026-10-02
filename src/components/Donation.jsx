import React, { useState } from 'react';
import { Heart, Copy, Check, ShieldCheck, Info, Sparkles, Building, Smartphone } from 'lucide-react';

export default function Donation({ t, onShowToast, onOpenConfirmModal }) {
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState(t.donation.purposes[0]);
  const [copiedId, setCopiedId] = useState(null);

  const amounts = ['500', '1000', '2500', '5000'];

  const handleCopy = (id, textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(id);
    onShowToast(`${t.donation.copied} (${textToCopy})`, 'info');
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const currentAmount = customAmount ? customAmount : selectedAmount;

  return (
    <section id="donation" className="section-padding donation-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold-dark)', borderColor: 'var(--accent-gold-border)' }}>
            <Heart size={16} fill="var(--accent-gold)" />
            <span>{t.donation.sectionTitle}</span>
          </div>
          <h2 className="section-title">{t.donation.headline}</h2>
          <p className="section-subtitle">{t.donation.subtext}</p>
        </div>

        {/* Disclaimer Note */}
        <div style={{ maxWidth: '820px', margin: '-24px auto 36px auto', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 'var(--radius-md)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#92400e' }}>
          <Info size={20} flexShrink={0} />
          <span>{t.donation.placeholderDisclaimer}</span>
        </div>

        <div className="donation-grid">
          {/* Left Column: Interactive Donation Controls & Payment Details */}
          <div className="donation-box">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary-deep)', marginBottom: '16px' }}>
              {t.donation.tiersLabel}
            </h3>

            {/* Amount Tiers */}
            <div className="tier-selector-grid">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className={`tier-btn ${selectedAmount === amt && !customAmount ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount('');
                  }}
                >
                  ৳{amt}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="form-group" style={{ marginBottom: '22px' }}>
              <label className="form-label">{t.donation.customAmountLabel}</label>
              <input
                type="number"
                className="form-control"
                placeholder={t.donation.customPlaceholder}
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount('');
                }}
              />
            </div>

            {/* Purpose Selector */}
            <div className="form-group" style={{ marginBottom: '28px' }}>
              <label className="form-label">{t.donation.purposeLabel}</label>
              <select
                className="form-control"
                value={selectedPurpose}
                onChange={(e) => setSelectedPurpose(e.target.value)}
              >
                {t.donation.purposes.map((p, i) => (
                  <option key={i} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Payment Channels List with Clear Placeholders */}
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-deep)', marginBottom: '14px' }}>
              সহযোগিতা পাঠানোর মাধ্যমসমূহ
            </h3>

            <div className="methods-container">
              {t.donation.methods.map((m) => {
                if (m.id === 'bank') {
                  return (
                    <div key={m.id} className="method-card">
                      <div className="method-header">
                        <div className="method-title-wrap">
                          <Building size={20} color="var(--primary-deep)" />
                          <span className="method-name">{m.name}</span>
                        </div>
                        <span className="method-badge">{m.badge}</span>
                      </div>
                      <table className="bank-table">
                        <tbody>
                          {m.details.map((d, i) => (
                            <tr key={i}>
                              <td>{d.label}</td>
                              <td>{d.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                return (
                  <div key={m.id} className="method-card">
                    <div className="method-header">
                      <div className="method-title-wrap">
                        <Smartphone size={20} color="var(--primary-emerald)" />
                        <span className="method-name">{m.name}</span>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>({m.type})</span>
                      </div>
                      <span className="method-badge">{m.badge}</span>
                    </div>

                    <div className="method-number-row">
                      <span className="method-number">{m.number}</span>
                      <button
                        type="button"
                        className={`copy-btn ${copiedId === m.id ? 'copied' : ''}`}
                        onClick={() => handleCopy(m.id, m.number)}
                      >
                        {copiedId === m.id ? <Check size={14} /> : <Copy size={14} />}
                        <span>{copiedId === m.id ? t.donation.copied : t.donation.copyBtn}</span>
                      </button>
                    </div>

                    <p className="method-instruction">{m.instruction}</p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Action */}
            <div style={{ marginTop: '28px', textAlign: 'center' }}>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                onClick={() => onOpenConfirmModal && onOpenConfirmModal({ amount: currentAmount, purpose: selectedPurpose })}
              >
                <Heart size={18} fill="#dc2626" />
                <span>{t.donation.confirmBtn} (৳{currentAmount})</span>
              </button>
            </div>
          </div>

          {/* Right Column: Transparency Breakdown & Instructions */}
          <div>
            <div className="fund-transparency-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary-emerald-soft)', color: 'var(--primary-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-deep)' }}>
                    {t.donation.transparencyBadge}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    আমাদের তহবিলের প্রতিটি টাকার দায়িত্বশীল ব্যয় বণ্টন
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {t.donation.breakdown.map((b, i) => (
                  <div key={i} className="transparency-item">
                    <div className="transparency-header">
                      <span style={{ color: 'var(--text-main)' }}>{b.label}</span>
                      <span style={{ color: 'var(--primary-deep)', fontWeight: 800 }}>{b.pct}</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: b.pct === '৮৫%' || b.pct === '85%' ? '85%' : b.pct === '১০%' || b.pct === '10%' ? '10%' : '5%' }} />
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{b.note}</span>
                  </div>
                ))}
              </div>

              {/* Step info after sending money */}
              <div style={{ marginTop: '16px', background: 'var(--bg-alt)', borderRadius: 'var(--radius-md)', padding: '20px', border: '1px solid var(--border-light)' }}>
                <h5 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-deep)', marginBottom: '8px' }}>
                  {t.donation.notifyActionTitle}
                </h5>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {t.donation.notifyActionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
