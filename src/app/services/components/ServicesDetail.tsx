'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const serviceCategories = [
  {
    id: 'troubleshooting',
    category: 'Troubleshooting',
    tagline: 'Diagnose and resolve any IT issue, on-site.',
    description:
      'We don\'t guess — we diagnose. Using professional tools, we identify the root cause of your issue and fix it completely. From slow boot times to mysterious error codes, nothing stumps our team.',
    price: 'From $49',
    duration: '1–2 hours',
    icon: 'WrenchScrewdriverIcon',
    includes: [
      'Full hardware & software diagnostic','Virus and malware removal','Performance optimization','Windows/macOS troubleshooting','Driver updates and conflict resolution','Detailed issue report',
    ],
  },
  {
    id: 'repair',category: 'Repair & Replacement',tagline: 'Broken parts replaced with quality components.',description:'Cracked screen? Dead battery? Broken keyboard? We source genuine or high-quality replacement parts and install them professionally. Most repairs completed same-day.',price: 'From $79',duration: '2–4 hours',icon: 'CpuChipIcon',
    includes: [
      'Screen replacement (laptop/desktop)','Battery replacement','Keyboard and trackpad repair','Port and connector repair','RAM and storage upgrades','Power supply replacement',
    ],
  },
  {
    id: 'assembly',category: 'Assembly & Setup',tagline: 'Custom builds and clean setups from scratch.',description:'Whether you bought parts for a custom PC or just got a new laptop, we handle the full setup — assembly, OS installation, software configuration, and network connection.',price: 'From $99',duration: '3–5 hours',icon: 'ServerStackIcon',
    includes: [
      'Custom PC part assembly','OS installation (Windows/Linux)','Driver and software installation','Network and Wi-Fi configuration','Data migration from old device','Final quality check and walkthrough',
    ],
  },
  {
    id: 'network',category: 'Network & Connectivity',tagline: 'Fast, reliable home network — no dead zones.',description:'Slow Wi-Fi, dropped connections, or can\'t get your devices talking to each other? We optimize your home network, set up routers, and eliminate dead zones.',
    price: 'From $59',
    duration: '1–3 hours',
    icon: 'WifiIcon',
    includes: [
      'Router setup and optimization',
      'Wi-Fi dead zone elimination',
      'Network security configuration',
      'Smart home device integration',
      'VPN setup',
      'Printer and NAS network setup',
    ],
  },
];

export default function ServicesDetail() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('troubleshooting');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal') ?? [];
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = serviceCategories.find((s) => s.id === activeCategory) ?? serviceCategories[0];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
          {/* Left: Sticky description + filter — from Template 1 sticky pattern */}
          <div className="md:pr-12 md:border-r border-border sticky top-24 self-start reveal">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest font-mono mb-3">
              Our Services
            </p>
            <h2 className="text-section-title font-bold text-foreground mb-8 max-w-sm">
              Pick what you need, we handle the rest.
            </h2>

            {/* Category filter buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Active service detail card */}
            <div className="bg-muted border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <Icon name={active.icon as Parameters<typeof Icon>[0]['name']} size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{active.category}</h3>
                  <p className="text-xs text-muted-foreground">{active.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {active.description}
              </p>

              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-accent">
                  <Icon name="CurrencyDollarIcon" size={16} />
                  {active.price}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Icon name="ClockIcon" size={16} />
                  {active.duration}
                </div>
              </div>

              <Link href="/booking" className="btn-primary w-full justify-center">
                Book This Service
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>
          </div>

          {/* Right: Scrollable service list — from Template 1 numbered list */}
          <div className="md:pl-12 mt-12 md:mt-0 flex flex-col min-h-[500px] justify-between">
            <ul className="space-y-0">
              {serviceCategories.map((service, i) => (
                <li
                  key={service.id}
                  className={`reveal stagger-${(i % 4) + 1} group cursor-pointer`}
                  onClick={() => setActiveCategory(service.id)}
                >
                  <div
                    className={`border-b py-7 transition-all duration-300 ${
                      activeCategory === service.id
                        ? 'border-primary/50' :'border-border hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-8">
                      <span
                        className={`text-sm font-mono transition-colors ${
                          activeCategory === service.id ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <div className="flex-1 flex items-center justify-between gap-4">
                        <span
                          className={`text-xl sm:text-2xl font-semibold transition-all duration-300 ${
                            activeCategory === service.id
                              ? 'text-foreground'
                              : 'text-muted-foreground group-hover:text-foreground'
                          }`}
                        >
                          {service.category}
                        </span>
                        <span className="text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    {/* What's included — shown when active */}
                    {activeCategory === service.id && (
                      <div className="mt-4 ml-10 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {service.includes.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Icon name="CheckIcon" size={12} className="text-primary flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Bottom CTA card — from Template 1 CLI card */}
            <div className="mt-12 bg-secondary border border-border rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center mb-4 text-primary">
                <Icon name="PhoneIcon" size={20} />
              </div>
              <h4 className="text-base font-bold text-foreground mb-1">Not sure what you need?</h4>
              <p className="text-sm text-muted-foreground mb-5">
                Call us and describe the problem — we'll tell you exactly which service fits.
              </p>
              <a
                href="tel:+15551234567"
                className="flex items-center justify-between bg-primary text-primary-foreground px-5 py-3 text-sm font-bold rounded-full hover:bg-accent transition-all duration-300 group"
              >
                Call (555) 123-4567
                <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                  <Icon name="ArrowRightIcon" size={14} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}