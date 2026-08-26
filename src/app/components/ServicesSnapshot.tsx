'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const services = [
{
  title: 'Troubleshooting',
  description: 'Slow computer? Crashes, freezes, or weird errors? We diagnose and fix the root cause on-site.',
  image: "https://images.unsplash.com/photo-1567669022824-cd5ac6b5ffc3",
  imageAlt: 'Circuit board close-up with blue light traces, dark technical environment',
  tag: 'Most Popular',
  price: 'From $49',
  icon: 'WrenchScrewdriverIcon'
},
{
  title: 'Repair & Replacement',
  description: 'Screen cracks, dead batteries, broken keyboards, damaged ports — we source and install the right parts.',
  image: "https://images.unsplash.com/photo-1721333089351-353c85f2b34a",
  imageAlt: 'Laptop opened with internal components visible on bright workbench, well-lit repair setting',
  tag: 'Hardware',
  price: 'From $79',
  icon: 'CpuChipIcon'
},
{
  title: 'Assembly & Setup',
  description: 'Custom PC builds, new laptop setup, OS installation, software configuration — done right the first time.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18dc9cdaa-1767462952369.png",
  imageAlt: 'Desktop PC components laid out on clean white table in bright modern workspace',
  tag: 'Setup',
  price: 'From $99',
  icon: 'ServerStackIcon'
}];


export default function ServicesSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const reveals = sectionRef?.current?.querySelectorAll('.reveal') ?? [];
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest font-mono mb-3">
              What We Fix
            </p>
            <h2 className="text-section-title font-bold text-foreground">
              Every IT problem,<br />handled at home.
            </h2>
          </div>
          <Link href="/services" className="btn-secondary self-start md:self-auto">
            All Services
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        {/* Cards Grid — 3 equal cards */}
        {/* BENTO AUDIT: 3 cards, grid-cols-3 at lg, each cs-1 */}
        {/* Row 1: [col-1: Troubleshooting cs-1] [col-2: Repair cs-1] [col-3: Assembly cs-1] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services?.map((service, index) =>
          // card cs-1
          <div
            key={service?.title}
            className={`reveal service-card group stagger-${index + 1}`}>
            
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <AppImage
                src={service?.image}
                alt={service?.imageAlt}
                width={600}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary font-mono bg-primary/10 px-2 py-1 rounded-full">
                    {service?.tag}
                  </span>
                  <span className="text-sm font-semibold text-accent">{service?.price}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service?.description}</p>

                <div className="mt-5 flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Learn more</span>
                  <Icon name="ArrowRightIcon" size={14} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}