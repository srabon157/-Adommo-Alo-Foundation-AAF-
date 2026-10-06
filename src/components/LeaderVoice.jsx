import React, { useEffect, useRef, useState } from 'react';

const quote = `মানবাধিকার মানে শুধু কিছু নির্দিষ্ট মানুষের অধিকার নয়—এটা প্রত্যেক মানুষের অধিকার, নিরাপত্তা ও মর্যাদার কথা।

নারীর অধিকার, শিশুর অধিকার, তৃতীয় লিঙ্গের অধিকার, জনস্বাস্থ্য ও পরিচ্ছন্নতা, পরিবেশ ও জলবায়ু, এবং দেশের প্রতিটি মানুষের নিরাপদ ও সম্মানজনকভাবে বেঁচে থাকার অধিকার—সবই মানবাধিকারের অংশ।

একজন সচেতন মানুষ মানুষের অধিকার, সমতা, নিরাপত্তা ও মর্যাদার পক্ষে কথা বলবে। কারণ অধিকার কারও দয়া নয়—এটা প্রত্যেক মানুষের প্রাপ্য।`;

export default function LeaderVoice() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="leader-voice"
      className={`leader-voice-section ${visible ? 'lv-visible' : ''}`}
      ref={sectionRef}
      aria-label="প্রতিষ্ঠাতা সহ-সভাপতির বক্তব্য"
    >
      {/* Decorative background elements */}
      <div className="lv-blob lv-blob-1" aria-hidden="true" />
      <div className="lv-blob lv-blob-2" aria-hidden="true" />
      <div className="lv-grid-pattern" aria-hidden="true" />

      <div className="container">
        <div className="lv-inner">

          {/* ── Quote Side (LEFT) ── */}
          <div className="lv-quote-col">
            {/* Section label */}
            <div className="lv-label">
              <span className="lv-label-dot" aria-hidden="true" />
              ভাইস প্রেসিডেন্টের বক্তব্য
            </div>

            {/* Open quote mark */}
            <div className="lv-big-quote lv-big-quote-open" aria-hidden="true">❝</div>

            <blockquote className="lv-blockquote">
              {quote.split('\n\n').map((para, i) => (
                <p key={i} className="lv-quote-text" style={{ marginBottom: i < 2 ? '1.2em' : 0 }}>
                  {para}
                </p>
              ))}
            </blockquote>

            {/* Close quote mark */}
            <div className="lv-big-quote lv-big-quote-close" aria-hidden="true">❞</div>

            {/* Author signature */}
            <div className="lv-author-line">
              <div className="lv-author-divider" aria-hidden="true" />
              <div className="lv-author-info">
                <span className="lv-author-name">— Rafath Rahman Joy</span>
                <span className="lv-author-title">Founding Vice President & Executive Treasurer</span>
              </div>
            </div>
          </div>

          {/* ── Photo Side (RIGHT) ── */}
          <div className="lv-photo-col">
            <div className="lv-photo-frame">
              {/* Animated corner accents */}
              <div className="lv-corner lv-corner-tl" aria-hidden="true" />
              <div className="lv-corner lv-corner-br" aria-hidden="true" />

              {/* Glow halo */}
              <div className="lv-glow-halo" aria-hidden="true" />

              <img
                src="/images/rafath-rahman-joy.jpg"
                alt="Rafath Rahman Joy – Founding Vice President & Executive Treasurer, Adommo Alo Foundation"
                className="lv-portrait"
                loading="lazy"
              />

              {/* Floating name badge */}
              <div className="lv-name-tag">
                <span className="lv-name-text">Rafath Rahman Joy</span>
                <span className="lv-name-role">প্রতিষ্ঠাতা সহ-সভাপতি ও কোষাধ্যক্ষ</span>
              </div>

              {/* Floating stat chip */}
              <div className="lv-stat-chip">
                <span className="lv-stat-icon" aria-hidden="true">⚖️</span>
                <span>মানবাধিকার সংরক্ষক</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
