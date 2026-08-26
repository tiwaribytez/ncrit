'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal') ?? [];
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit — backend connection point
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Dark CTA container */}
        <div className="relative rounded-3xl bg-muted border border-border overflow-hidden px-8 py-14 sm:px-12 sm:py-16">
          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(234,88,12,0.15) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(-50%, -50%)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Headline + info */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest font-mono mb-3">
                  Get In Touch
                </p>
                <h2 className="reveal text-section-title font-bold text-foreground mb-6">
                  Ready to get your<br />
                  <span className="gradient-text-orange">tech working again?</span>
                </h2>
                <p className="reveal text-muted-foreground text-base leading-relaxed max-w-sm mb-8">
                  Send us a message and we'll get back to you within 30 minutes during business hours.
                </p>
              </div>

              {/* Contact details */}
              <div className="reveal flex flex-col gap-4">
                {[
                  { icon: 'PhoneIcon', label: '+1 (555) 123-4567', sub: 'Mon–Sat, 8am–8pm' },
                  { icon: 'EnvelopeIcon', label: 'support@homeitfix.com', sub: 'We reply within 30 min' },
                  { icon: 'MapPinIcon', label: 'Serving Greater Metro Area', sub: '20-mile radius, home visits' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                      <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="reveal bg-background/50 border border-border rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                    <Icon name="CheckIcon" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">
                    We'll reach out within 30 minutes. Expect a call or email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary mt-2"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Johnson"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@email.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="form-label">Describe the Issue</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="My laptop screen is cracked and won't turn on..."
                      className="form-input resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                    <Icon name="PaperAirplaneIcon" size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}