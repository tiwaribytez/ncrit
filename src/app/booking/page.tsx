import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingHero from '@/app/booking/components/BookingHero';
import BookingForm from '@/app/booking/components/BookingForm';

export default function BookingPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <BookingHero />
      <BookingForm />
      <Footer />
    </main>
  );
}