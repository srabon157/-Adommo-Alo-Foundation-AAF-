import React, { useState, useEffect, useRef } from 'react';
import { Users, CheckCircle2, FolderKanban, HeartHandshake } from 'lucide-react';

const iconMap = {
  Users,
  CheckCircle2,
  FolderKanban,
  HeartHandshake,
};

function CounterItem({ item, isVisible }) {
  const [count, setCount] = useState(0);
  const IconComponent = iconMap[item.icon] || HeartHandshake;

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = item.number;
    const duration = 1800; // ms
    const increment = end / (duration / 25);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isVisible, item.number]);

  return (
    <div className="stat-item">
      <div className="stat-icon-wrap">
        <IconComponent size={28} />
      </div>
      <div className="stat-number">
        {count}
        <span>{item.suffix}</span>
      </div>
      <div className="stat-label">{item.label}</div>
      <div className="stat-sub">{item.sub}</div>
    </div>
  );
}

export default function Stats({ t }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-card-grid">
          {t.stats.map((item) => (
            <CounterItem key={item.id} item={item} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
