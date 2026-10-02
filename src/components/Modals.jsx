import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Calendar, MapPin, Users, CheckCircle2 } from 'lucide-react';

export default function Modals({
  activeModal,
  modalData,
  onClose,
  onOpenDonate,
  onShowToast,
  lightboxState,
  setLightboxState,
}) {
  // Handle ESC key for closing modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        if (lightboxState.isOpen) {
          setLightboxState({ isOpen: false, items: [], index: 0 });
        }
      }
      if (lightboxState.isOpen) {
        if (e.key === 'ArrowRight') handleLightboxNext();
        if (e.key === 'ArrowLeft') handleLightboxPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState]);

  const handleLightboxPrev = () => {
    setLightboxState((prev) => ({
      ...prev,
      index: prev.index === 0 ? prev.items.length - 1 : prev.index - 1,
    }));
  };

  const handleLightboxNext = () => {
    setLightboxState((prev) => ({
      ...prev,
      index: prev.index === prev.items.length - 1 ? 0 : prev.index + 1,
    }));
  };

  return (
    <>
      {/* Lightbox Modal */}
      {lightboxState.isOpen && lightboxState.items.length > 0 && (
        <div className="lightbox-overlay" onClick={() => setLightboxState({ isOpen: false, items: [], index: 0 })}>
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={() => setLightboxState({ isOpen: false, items: [], index: 0 })}
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="lightbox-nav-btn lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              handleLightboxPrev();
            }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            type="button"
            className="lightbox-nav-btn lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              handleLightboxNext();
            }}
            aria-label="Next Image"
          >
            <ChevronRight size={28} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-img-wrap">
              <img
                src={lightboxState.items[lightboxState.index]?.src}
                alt={lightboxState.items[lightboxState.index]?.title}
              />
            </div>
            <div className="lightbox-details">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  {lightboxState.items[lightboxState.index]?.title}
                </h4>
                <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                  {lightboxState.index + 1} / {lightboxState.items.length}
                </span>
              </div>
              <p style={{ fontSize: '0.94rem', color: '#d1d5db', lineHeight: 1.6 }}>
                {lightboxState.items[lightboxState.index]?.desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '10px', fontSize: '0.82rem', color: '#10b981' }}>
                <span><MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} /> {lightboxState.items[lightboxState.index]?.location}</span>
                <span><Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} /> {lightboxState.items[lightboxState.index]?.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Activity Details Modal */}
      {activeModal === 'activity' && modalData && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{modalData.title}</h3>
              <button type="button" className="modal-close-btn" onClick={onClose}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <img
                src={modalData.image}
                alt={modalData.title}
                style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '20px' }}
              />
              <div style={{ display: 'inline-block', background: 'var(--primary-emerald-soft)', color: 'var(--primary-deep)', padding: '4px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '14px' }}>
                {modalData.impact}
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
                {modalData.fullDesc}
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>
                  বন্ধ করুন
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    onClose();
                    onOpenDonate && onOpenDonate();
                  }}
                >
                  <Heart size={16} fill="#dc2626" />
                  <span>এই উদ্যোগে সহায়তা করুন</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {activeModal === 'project' && modalData && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 className="modal-title">{modalData.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span><MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} /> {modalData.location}</span>
                  <span><Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} /> {modalData.date}</span>
                </div>
              </div>
              <button type="button" className="modal-close-btn" onClick={onClose}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <img
                src={modalData.image}
                alt={modalData.title}
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '20px' }}
              />
              <div style={{ background: 'var(--bg-alt)', padding: '12px 18px', borderRadius: 'var(--radius-sm)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Users size={18} color="var(--primary-emerald)" />
                <span style={{ fontWeight: 600, fontSize: '0.94rem' }}>উপকারভোগীর সংখ্যা / লক্ষ্যমাত্রা: {modalData.beneficiaries}</span>
              </div>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
                {modalData.fullDesc}
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>
                  বন্ধ করুন
                </button>
                <button
                  type="button"
                  className="btn btn-green btn-sm"
                  onClick={() => {
                    onClose();
                    onOpenDonate && onOpenDonate();
                  }}
                >
                  <Heart size={16} />
                  <span>প্রকল্পে সহযোগিতা করুন</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* News Article Reader Modal */}
      {activeModal === 'news' && modalData && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span style={{ background: 'var(--primary-emerald-soft)', color: 'var(--primary-deep)', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.78rem', fontWeight: 600 }}>
                  {modalData.categoryBn || modalData.category}
                </span>
                <h3 className="modal-title" style={{ marginTop: '8px' }}>{modalData.title}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  প্রকাশিত: {modalData.date}
                </p>
              </div>
              <button type="button" className="modal-close-btn" onClick={onClose}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <img
                src={modalData.image}
                alt={modalData.title}
                style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '20px' }}
              />
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
                {modalData.fullText}
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>
                  বন্ধ করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Donation Confirmation Modal */}
      {activeModal === 'donateConfirm' && modalData && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">অনুদানের তথ্য বিবরণী</h3>
              <button type="button" className="modal-close-btn" onClick={onClose}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--primary-emerald-soft)', color: 'var(--primary-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--primary-deep)', fontWeight: 700 }}>
                  অনুদান পরিমাণ: ৳{modalData.amount}
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  উদ্দেশ্য: {modalData.purpose}
                </p>
              </div>

              <div style={{ background: 'var(--bg-alt)', borderRadius: 'var(--radius-md)', padding: '18px', border: '1px solid var(--border-light)', marginBottom: '20px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                <p style={{ fontWeight: 700, color: 'var(--primary-deep)', marginBottom: '6px' }}>পরবর্তী পদক্ষেপ:</p>
                <ol style={{ paddingLeft: '20px' }}>
                  <li>ওয়েবসাইটে উল্লেখিত বিকাশ, নগদ বা ব্যাংক একাউন্টে [প্লেসহোল্ডার] অর্থ স্থানান্তর করুন।</li>
                  <li>স্থানান্তরের পর আপনার নাম ও ট্রানজেকশন আইডি আমাদের ফেসবুক ইনবক্স বা ইমেইলে পাঠান।</li>
                  <li>আমাদের দায়িত্বশীল টিম যাচাই করে আপনাকে ডিজিটাল মানিরিসিপ্ট পাঠিয়ে দেবে।</li>
                </ol>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>
                  ঠিক আছে
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    onClose();
                    onShowToast('অনুদান পাঠানোর পরবর্তী তথ্যাদি সংরক্ষণ করা হয়েছে। ধন্যবাদ!', 'success');
                  }}
                >
                  ধন্যবাদ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
