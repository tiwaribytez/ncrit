'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ServicesHero() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.services-hero .reveal');
    reveals?.forEach((el, i) => {
      setTimeout(() => el?.classList?.add('active'), i * 120);
    });
  }, []);

  return (
    <section className="services-hero relative pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background orb */}
      <div
        className="absolute top-16 left-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse, rgba(234,88,12,0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-primary tracking-wide font-mono">
            All Services
          </span>
        </div>

        <h1 className="reveal stagger-1 text-hero-xl font-bold text-foreground mb-6">
          Everything your home IT<br />
          <span className="gradient-text-orange">needs, under one roof.</span>
        </h1>

        <p className="reveal stagger-2 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          From a cracked laptop screen to a full custom PC build — our certified technicians handle it all at your home, on your schedule.
        </p>

        <div className="reveal stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booking" className="btn-primary">
            Book a Service
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
          <a href="tel:+15551234567" className="btn-secondary">
            <Icon name="PhoneIcon" size={16} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}