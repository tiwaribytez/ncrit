'use client';

import React, { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function BookingHero() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.booking-hero .reveal');
    reveals.forEach((el, i) => {
      setTimeout(() => el.classList.add('active'), i * 120);
    });
  }, []);

  return (
    <section className="booking-hero relative pt-28 pb-12 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 w-[500px] h-[250px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse, rgba(234,88,12,0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-5">
          <Icon name="CalendarDaysIcon" size={14} className="text-primary" />
          <span className="text-xs font-semibold text-primary tracking-wide font-mono">
            Book a Service
          </span>
        </div>

        <h1 className="reveal stagger-1 text-hero-xl font-bold text-foreground mb-5">
          Schedule your<br />
          <span className="gradient-text-orange">home IT visit.</span>
        </h1>

        <p className="reveal stagger-2 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Choose your service, pick a time that works for you, and we'll send a certified technician to your door.
        </p>

        {/* Trust bar */}
        <div className="reveal stagger-3 flex flex-wrap items-center justify-center gap-6 mt-8">
          {[
            { icon: 'ShieldCheckIcon', label: 'Background Checked Techs' },
            { icon: 'ClockIcon', label: 'Same-Day Available' },
            { icon: 'CurrencyDollarIcon', label: 'No Hidden Fees' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-primary" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}