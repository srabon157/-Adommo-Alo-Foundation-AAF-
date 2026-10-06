import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, CheckCircle2, TrendingUp } from 'lucide-react';

const mainQuote1 = "একবেলা খাবার দিলে হয়তো আজ তার পেট ভরবে, কিন্তু কর্মসংস্থানের সুযোগ তৈরি করলে বদলে যাবে তার পুরো জীবন। সে নিজের পরিবারকে বাঁচাতে পারবে, সন্তানদের পড়াশোনা করাতে পারবে—আর সেই সন্তানরাই একদিন দেশের মানবসম্পদে পরিণত হবে।";

const mainQuote2 = "ভিক্ষা নয়, কর্মসংস্থান তৈরি করি—মানুষকে স্বাবলম্বী করি, দেশকে মানবসম্পদে সমৃদ্ধ করি।";

const actionPoints = [
  "মানুষকে শুধু সাহায্য নয়, সুযোগ দিন।",
  "কর্মসংস্থান তৈরি করুন।",
  "মানুষকে স্বাবলম্বী করুন।",
  "মানবসম্পদ গড়ে তুলুন।",
  "দেশের ভবিষ্যৎ শক্তিশালী করুন。"
];

export default function ManagerVoice() {
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
      id="manager-voice"
      className={`manager-voice-section ${visible ? 'mv-visible' : ''}`}
      ref={sectionRef}
      aria-label="প্রতিষ্ঠাতা ম্যানেজারের দৃষ্টিভঙ্গি"
    >
      {/* Decorative ambient background glows */}
      <div className="mv-blob mv-blob-1" aria-hidden="true" />
      <div className="mv-blob mv-blob-2" aria-hidden="true" />
      <div className="mv-grid-pattern" aria-hidden="true" />

      <div className="container">
        <div className="mv-inner">

          {/* ── Photo Column (LEFT) ── */}
          <div className="mv-photo-col">
            <div className="mv-photo-frame">
              {/* Rotating conic accent ring */}
              <div className="mv-conic-ring" aria-hidden="true" />

              {/* Glowing backplate */}
              <div className="mv-glow-plate" aria-hidden="true" />

              {/* Portrait */}
              <div className="mv-img-container">
                <img
                  src="/images/mohaimin-hossain-srabon.jpg"
                  alt="Mohaimin Hossain Srabon – Founding Manager & Social Media Executive, Adommo Alo Foundation"
                  className="mv-portrait"
                  loading="lazy"
                />
              </div>

              {/* Floating top badge */}
              <div className="mv-badge-top">
                <Briefcase size={15} />
                <span>স্বাবলম্বন ও কর্মসংস্থান</span>
              </div>

              {/* Floating name card below */}
              <div className="mv-name-tag">
                <span className="mv-name-text">Mohaimin Hossain Srabon</span>
                <span className="mv-name-role">Founding Manager & Social Media Executive</span>
              </div>
            </div>
          </div>

          {/* ── Quote Column (RIGHT) ── */}
          <div className="mv-quote-col">
            {/* Category tag */}
            <div className="mv-label">
              <span className="mv-label-dot" aria-hidden="true" />
              ম্যানেজমেন্টের ভাবনা
            </div>

            {/* Big decorative open-quote */}
            <div className="mv-big-quote mv-big-quote-open" aria-hidden="true">❝</div>

            <blockquote className="mv-blockquote">
              <p className="mv-quote-lead">
                {mainQuote1}
              </p>

              <div className="mv-quote-highlight">
                <TrendingUp size={20} className="mv-highlight-icon" />
                <p className="mv-highlight-text">{mainQuote2}</p>
              </div>

              {/* 5 Action Points */}
              <div className="mv-action-list">
                {actionPoints.map((point, idx) => (
                  <div key={idx} className="mv-action-item">
                    <CheckCircle2 size={16} className="mv-action-icon" />
                    <span>{point.replace(/。$/, '')}</span>
                  </div>
                ))}
              </div>
            </blockquote>

            {/* Big decorative close-quote */}
            <div className="mv-big-quote mv-big-quote-close" aria-hidden="true">❞</div>

            {/* Author signature line */}
            <div className="mv-author-line">
              <div className="mv-author-divider" aria-hidden="true" />
              <div className="mv-author-info">
                <span className="mv-author-name">— Mohaimin Hossain Srabon</span>
                <span className="mv-author-title">প্রতিষ্ঠাতা ম্যানেজার ও সোশ্যাল মিডিয়া এক্সিকিউটিভ</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
