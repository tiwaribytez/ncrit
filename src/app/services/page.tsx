import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/app/services/components/ServicesHero';
import ServicesDetail from '@/app/services/components/ServicesDetail';
import ServicesCTA from '@/app/services/components/ServicesCTA';

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <ServicesHero />
      <ServicesDetail />
      <ServicesCTA />
      <Footer />
    </main>
  );
}