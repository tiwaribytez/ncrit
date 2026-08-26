'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const plans = [
  {
    name: 'Basic Visit',
    price: '$49',
    period: '/ visit',
    description: 'Quick diagnostic and single-issue fix.',
    features: ['1 Issue Diagnosed', 'Up to 1hr On-Site', 'Software Fixes', 'Basic Report'],
    cta: 'Book Basic',
    highlighted: false,
  },
  {
    name: 'Standard Fix',
    price: '$99',
    period: '/ visit',
    description: 'Most popular — full troubleshoot + hardware repair.',
    features: ['Full Diagnosis', 'Up to 3hrs On-Site', 'Hardware Repair', 'Parts Sourcing', 'Follow-up Call'],
    cta: 'Book Standard',
    highlighted: true,
  },
  {
    name: 'Full Setup',
    price: '$149',
    period: '/ visit',
    description: 'Complete PC build, OS install, and configuration.',
    features: ['Custom PC Assembly', 'OS Installation', 'Software Config', 'Network Setup', '30-Day Support'],
    cta: 'Book Full Setup',
    highlighted: false,
  },
];

export default function PricingSection() {
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
    const reveals = sectionRef?.current?.querySelectorAll('.reveal') ?? [];
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest font-mono mb-3">
              Pricing
            </p>
            <h2 className="text-section-title font-bold text-foreground">
              Flat rates. No surprises.
            </h2>
          </div>
          <p className="reveal text-sm text-muted-foreground max-w-xs">
            All prices include travel to your home within a 20-mile radius.
          </p>
        </div>

        {/* BENTO AUDIT: 3 cards grid-cols-3 */}
        {/* Row 1: [col-1: Basic cs-1] [col-2: Standard cs-1 HIGHLIGHT] [col-3: Full cs-1] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans?.map((plan, i) => (
            // card cs-1
            (<div
              key={plan?.name}
              className={`reveal pricing-card stagger-${i + 1} ${
                plan?.highlighted
                  ? 'bg-primary text-primary-foreground relative'
                  : 'bg-secondary border border-border hover:border-primary/30'
              }`}
            >
              {plan?.highlighted && (
                <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full font-mono tracking-wide">
                  Most Popular
                </div>
              )}
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    plan?.highlighted ? 'bg-white' : 'border border-muted-foreground'
                  }`}
                />
                <span
                  className={`text-sm font-semibold ${
                    plan?.highlighted ? 'text-white' : 'text-muted-foreground'
                  }`}
                >
                  {plan?.name}
                </span>
              </div>
              <div className="mt-auto pt-6">
                <div
                  className={`text-5xl font-bold tracking-tight mb-1 ${
                    plan?.highlighted ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {plan?.price}
                  <span
                    className={`text-sm font-medium tracking-normal align-middle ml-1 ${
                      plan?.highlighted ? 'text-white/70' : 'text-muted-foreground'
                    }`}
                  >
                    {plan?.period}
                  </span>
                </div>
                <p
                  className={`text-sm mb-6 ${
                    plan?.highlighted ? 'text-white/80' : 'text-muted-foreground'
                  }`}
                >
                  {plan?.description}
                </p>
              </div>
              {/* Features */}
              <ul className="space-y-2 mb-8 flex-1">
                {plan?.features?.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-sm ${
                      plan?.highlighted ? 'text-white/90' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon
                      name="CheckIcon"
                      size={14}
                      className={plan?.highlighted ? 'text-white' : 'text-primary'}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/booking"
                className={`block w-full py-3.5 rounded-full text-sm font-bold text-center transition-all duration-300 ${
                  plan?.highlighted
                    ? 'bg-white text-primary hover:bg-white/90 uppercase tracking-wide' :'bg-background border border-border text-foreground hover:border-primary/50 uppercase tracking-wide'
                }`}
              >
                {plan?.cta}
              </Link>
            </div>)
          ))}
        </div>
      </div>
    </section>
  );
}