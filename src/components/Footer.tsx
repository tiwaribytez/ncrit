import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const socialLinks = [
  { icon: 'GlobeAltIcon', href: '#', label: 'Website' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Linear Single-Row Pattern */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <AppLogo size={28} />
              <span className="font-bold text-sm tracking-tight text-foreground hidden sm:block">
                HomeITFix
              </span>
            </div>
            <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/services" className="hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/booking" className="hover:text-foreground transition-colors">
                Book
              </Link>
            </nav>
          </div>

          {/* Right: Social + Legal */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="mailto:support@homeitfix.com"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                aria-label="Email"
              >
                <Icon name="EnvelopeIcon" size={16} />
              </a>
              <a
                href="tel:+15551234567"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                aria-label="Phone"
              >
                <Icon name="PhoneIcon" size={16} />
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>© 2026 HomeITFix</span>
              <span className="text-border">·</span>
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <span className="text-border">·</span>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}