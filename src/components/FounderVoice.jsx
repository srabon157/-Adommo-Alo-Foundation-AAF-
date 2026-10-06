import React, { useEffect, useRef, useState } from 'react';

const quote = `নারী ও পুরুষ জৈবিকভাবে এক নয়, কিন্তু আমাদের অধিকার সমান হওয়া উচিত। একজন পুরুষ সফল হলে তাকে কীভাবে সফল হলো—তা নিয়ে প্রশ্ন করা না হলে, একজন সফল নারীও একই সম্মান পাওয়ার অধিকার রাখে। তার সাফল্যকে কখনোই তার চরিত্র, বাবার প্রভাব, কিংবা স্বামীর টাকা-পয়সা ও ক্ষমতার সঙ্গে যুক্ত করে দেখা উচিত নয়। একজন নারী নিজের পরিচয়, ক্যারিয়ার ও সাফল্য নিজেই গড়ে তুলতে পারে। নারীবাদ পুরুষকে ঘৃণা করা বা নারী-পুরুষের মধ্যে বিভেদ তৈরি করা নয়; এটি স্বাধীনতা, নিরাপত্তা, মর্যাদা ও সমান অধিকারের কথা বলে। মানবাধিকার ও নারীবাদ কোনো ট্রেন্ড নয়—একটি নিরাপদ, ন্যায়সংগত সমাজ গড়ার জন্য এগুলো আমাদের প্রয়োজন।`;

export default function FounderVoice() {
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
      id="founder-voice"
      className={`founder-voice-section ${visible ? 'fv-visible' : ''}`}
      ref={sectionRef}
    >
      {/* Decorative blobs */}
      <div className="fv-blob fv-blob-1" aria-hidden="true" />
      <div className="fv-blob fv-blob-2" aria-hidden="true" />

      <div className="container">
        <div className="fv-inner">

          {/* ── Photo Side ── */}
          <div className="fv-photo-col">
            <div className="fv-photo-frame">
              <div className="fv-glow-ring" aria-hidden="true" />
              <img
                src="/images/biva-akhter-boni.jpg"
                alt="Biva Akhter Boni – Founder, Adommo Alo Foundation"
                className="fv-portrait"
                loading="lazy"
              />
              {/* Name tag floating */}
              <div className="fv-name-tag">
                <span className="fv-name-text">Biva Akhter Boni</span>
                <span className="fv-name-role">প্রতিষ্ঠাতা, অদম্য আলো ফাউন্ডেশন</span>
              </div>
            </div>
          </div>

          {/* ── Quote Side ── */}
          <div className="fv-quote-col">
            {/* Section label */}
            <div className="fv-label">
              <span className="fv-label-dot" aria-hidden="true" />
              প্রতিষ্ঠাতার কথা
            </div>

            {/* Big decorative open-quote */}
            <div className="fv-big-quote fv-big-quote-open" aria-hidden="true">❝</div>

            <blockquote className="fv-blockquote">
              <p className="fv-quote-text">{quote}</p>
            </blockquote>

            {/* Big decorative close-quote */}
            <div className="fv-big-quote fv-big-quote-close" aria-hidden="true">❞</div>

            {/* Author line */}
            <div className="fv-author-line">
              <div className="fv-author-divider" aria-hidden="true" />
              <div className="fv-author-info">
                <span className="fv-author-name">— Biva Akhter Boni</span>
                <span className="fv-author-title">প্রতিষ্ঠাতা ও সভাপতি</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
