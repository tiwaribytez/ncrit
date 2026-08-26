'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const stats = [
  { value: '500+', label: 'Happy Clients', icon: 'UserGroupIcon' },
  { value: '99%', label: 'Satisfaction Rate', icon: 'StarIcon' },
  { value: '< 2hr', label: 'Avg Response Time', icon: 'ClockIcon' },
  { value: '5yr', label: 'In Business', icon: 'TrophyIcon' },
];

const reasons = [
  {
    icon: 'HomeIcon',
    title: 'We Come to You',
    description: 'No need to pack up your device. Our technicians arrive at your door, fully equipped.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Vetted & Certified',
    description: 'Every technician is background-checked, certified, and trained on modern hardware and software.',
  },
  {
    icon: 'BoltIcon',
    title: 'Same-Day Available',
    description: 'Book by noon, get service today. We respect your time and schedule.',
  },
  {
    icon: 'CurrencyDollarIcon',
    title: 'Transparent Pricing',
    description: 'No hidden fees. You see the cost before we start — guaranteed flat rates on most services.',
  },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal') ?? [];
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 relative"
    >
      {/* Dark rounded container — from Template 1 */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-muted border border-border overflow-hidden relative p-8 sm:p-12 lg:p-16">
        {/* Background glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.25) 0%, transparent 70%)', filter: 'blur(80px)', transform: 'translate(30%, -30%)' }}
        />

        {/* Section label */}
        <div className="reveal flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-primary uppercase tracking-widest font-mono">
            Why HomeITFix
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* Left: Headline + Stats */}
          <div className="flex flex-col justify-between">
            <h2 className="reveal text-section-title font-bold text-foreground mb-8">
              IT support you can{' '}
              <span className="gradient-text-orange">actually trust.</span>
            </h2>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal stagger-${i + 1} flex flex-col gap-1 p-4 rounded-xl border border-border/50 bg-background/40`}
                >
                  <span className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Reasons list */}
          <div className="flex flex-col gap-6">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className={`reveal stagger-${i + 1} flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-background/30 hover:border-primary/30 transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <Icon name={reason.icon as Parameters<typeof Icon>[0]['name']} size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}