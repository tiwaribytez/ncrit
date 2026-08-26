import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSnapshot from '@/app/components/ServicesSnapshot';
import WhyUsSection from '@/app/components/WhyUsSection';
import PricingSection from '@/app/components/PricingSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSnapshot />
      <WhyUsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}