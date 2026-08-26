'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef?.current;
    if (!el) return;
    const reveals = el?.querySelectorAll('.reveal');
    reveals?.forEach((r, i) => {
      setTimeout(() => r?.classList?.add('active'), i * 120);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        maskImage: 'linear-gradient(180deg, transparent 0%, black 4%, black 96%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 4%, black 96%, transparent 100%)'
      }}>
      
      {/* Atmospheric background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-primary absolute top-16 left-8 w-96 h-96 rounded-full opacity-60" />
        <div className="blob-accent absolute top-32 right-8 w-72 h-72 rounded-full opacity-50" />
        <div
          className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-7">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary tracking-wide font-mono">
              Same-Day Service Available
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal stagger-1 text-hero-xl font-bold text-foreground">
            Your Home IT<br />
            Problems,{' '}
            <span className="gradient-text-orange">Fixed Fast.</span>
          </h1>

          {/* Sub */}
          <p className="reveal stagger-2 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
            Certified technicians come to your home — same day. We repair laptops, assemble desktops, troubleshoot networks, and handle all your IT needs.
          </p>

          {/* CTAs */}
          <div className="reveal stagger-3 flex flex-col sm:flex-row gap-4">
            <Link href="/booking" className="btn-primary">
              Book a Technician
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>

          {/* Trust micro-stats */}
          <div className="reveal stagger-4 flex items-center gap-6 pt-2">
            {[
            { value: '500+', label: 'Clients Served' },
            { value: '4.9★', label: 'Avg Rating' },
            { value: '2hr', label: 'Avg Response' }]?.
            map((stat) =>
            <div key={stat?.label} className="flex flex-col">
                <span className="text-lg font-bold text-foreground">{stat?.value}</span>
                <span className="text-xs text-muted-foreground">{stat?.label}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Image + floating badge */}
        <div className="relative group">
          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-2xl transition-all duration-700"
            style={{
              background: 'linear-gradient(135deg, rgba(234,88,12,0.2) 0%, rgba(168,85,247,0.1) 100%)',
              filter: 'blur(24px)'
            }} />
          
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
            style={{
              background: 'linear-gradient(135deg, rgba(234,88,12,0.3) 0%, rgba(168,85,247,0.15) 100%)',
              filter: 'blur(40px)'
            }} />
          

          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_190644034-1782132019230.png"
              alt="Technician working on laptop repair in bright home office environment with tools on desk"
              width={700}
              height={500}
              priority
              className="w-full h-72 sm:h-96 object-cover img-grayscale" />
            
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating badge — Michelin-style */}
          <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-card border border-border rounded-xl p-3 sm:p-4 shadow-xl flex items-center gap-3 animate-float">
            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
              <Icon name="ShieldCheckIcon" size={20} />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Certified Techs</div>
              <div className="text-xs text-muted-foreground">Background Checked</div>
            </div>
          </div>

          {/* Second floating badge — top right */}
          <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 bg-card border border-border rounded-xl p-3 shadow-xl flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-foreground">Available Today</span>
          </div>
        </div>
      </div>
    </section>);

}