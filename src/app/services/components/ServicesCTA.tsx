'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ServicesCTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.15 }
    );
    const reveals = ref?.current?.querySelectorAll('.reveal') ?? [];
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 sm:py-16 px-4 sm:px-6 mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-muted border border-border overflow-hidden px-8 py-16 text-center">
          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(234,88,12,0.2) 0%, transparent 70%)',
              filter: 'blur(60px)',
              transform: 'translate(-50%, -50%)',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="reveal text-section-title font-bold text-foreground mb-5">
              Ready to book your<br />
              <span className="gradient-text-orange">home visit?</span>
            </h2>
            <p className="reveal text-muted-foreground text-base mb-8 leading-relaxed">
              Pick a time that works for you. We'll send a certified technician directly to your door.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-primary">
                Schedule Now
                <Icon name="CalendarDaysIcon" size={16} />
              </Link>
              <a href="tel:+15551234567" className="btn-secondary">
                <Icon name="PhoneIcon" size={16} />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}