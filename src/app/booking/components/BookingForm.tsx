'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const serviceOptions = [
  { id: 'troubleshooting', label: 'Troubleshooting', price: '$49', icon: 'WrenchScrewdriverIcon' },
  { id: 'repair', label: 'Repair & Replacement', price: '$79', icon: 'CpuChipIcon' },
  { id: 'assembly', label: 'Assembly & Setup', price: '$99', icon: 'ServerStackIcon' },
  { id: 'network', label: 'Network & Connectivity', price: '$59', icon: 'WifiIcon' },
];

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM',
];

type Step = 1 | 2 | 3 | 4;

interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
}

export default function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [booking, setBooking] = useState<BookingData>({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedService = serviceOptions.find((s) => s.id === booking.service);

  const canProceed = () => {
    if (step === 1) return !!booking.service;
    if (step === 2) return !!booking.date && !!booking.time;
    if (step === 3) return !!booking.name && !!booking.email && !!booking.phone && !!booking.address;
    return true;
  };

  const handleSubmit = () => {
    // Mock submit — backend connection point
    setSubmitted(true);
  };

  const steps = [
    { num: 1, label: 'Service' },
    { num: 2, label: 'Schedule' },
    { num: 3, label: 'Details' },
    { num: 4, label: 'Confirm' },
  ];

  if (submitted) {
    return (
      <section className="py-12 px-4 sm:px-6 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-muted border border-border rounded-3xl p-12 flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center text-primary">
              <Icon name="CheckBadgeIcon" size={40} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Booking Confirmed!</h2>
            <p className="text-muted-foreground text-base max-w-md leading-relaxed">
              Your appointment has been submitted. You'll receive a confirmation call within 30 minutes at{' '}
              <span className="text-foreground font-semibold">{booking.phone}</span>.
            </p>
            <div className="bg-background/60 border border-border rounded-xl p-5 w-full text-left space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Service</span>
                <span className="text-foreground font-semibold">{selectedService?.label}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Date</span>
                <span className="text-foreground font-semibold">{booking.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Time</span>
                <span className="text-foreground font-semibold">{booking.time}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Starting Price</span>
                <span className="text-accent font-bold">{selectedService?.price}</span>
              </div>
            </div>
            <Link href="/" className="btn-primary mt-2">
              Back to Home
              <Icon name="HomeIcon" size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 px-4 sm:px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Step indicator */}
        <div className="flex items-center justify-center mb-10">
          {steps.map((s, i) => (
            <React.Fragment key={s.num}>
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    step === s.num
                      ? 'bg-primary text-primary-foreground'
                      : step > s.num
                      ? 'bg-primary/20 text-primary border border-primary/40' :'bg-secondary border border-border text-muted-foreground'
                  }`}
                >
                  {step > s.num ? <Icon name="CheckIcon" size={14} /> : s.num}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${step >= s.num ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-px mx-3 transition-colors duration-300 ${
                    step > s.num ? 'bg-primary/40' : 'bg-border'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main form area */}
          <div className="lg:col-span-2 bg-muted border border-border rounded-2xl p-6 sm:p-8">
            {/* STEP 1: Choose Service */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">What do you need help with?</h2>
                <p className="text-sm text-muted-foreground mb-7">Select the service that best matches your issue.</p>
                {/* BENTO AUDIT: 4 cards, grid-cols-2 */}
                {/* Row 1: [col-1: Troubleshooting cs-1] [col-2: Repair cs-1] */}
                {/* Row 2: [col-1: Assembly cs-1] [col-2: Network cs-1] */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceOptions.map((svc) => (
                    // card cs-1
                    <button
                      key={svc.id}
                      onClick={() => setBooking({ ...booking, service: svc.id })}
                      className={`text-left p-5 rounded-xl border transition-all duration-200 ${
                        booking.service === svc.id
                          ? 'border-primary bg-primary/10' :'border-border bg-background/40 hover:border-primary/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            booking.service === svc.id ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
                          }`}
                        >
                          <Icon name={svc.icon as Parameters<typeof Icon>[0]['name']} size={18} />
                        </div>
                        <span className="text-sm font-bold text-accent">{svc.price}</span>
                      </div>
                      <h3 className="text-sm font-bold text-foreground mb-1">{svc.label}</h3>
                      <p className="text-xs text-muted-foreground">Starting price per visit</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Date & Time */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">When works for you?</h2>
                <p className="text-sm text-muted-foreground mb-7">Choose a date and time slot for your appointment.</p>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      className="form-input"
                      value={booking.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="form-label">Preferred Time</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setBooking({ ...booking, time: slot })}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 ${
                            booking.time === slot
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Details */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Your contact details</h2>
                <p className="text-sm text-muted-foreground mb-7">We'll use this to confirm your appointment.</p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Johnson"
                        className="form-input"
                        value={booking.name}
                        onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        className="form-input"
                        value={booking.phone}
                        onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@email.com"
                      className="form-input"
                      value={booking.email}
                      onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="form-label">Home Address</label>
                    <input
                      type="text"
                      required
                      placeholder="123 Main St, City, State 00000"
                      className="form-input"
                      value={booking.address}
                      onChange={(e) => setBooking({ ...booking, address: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="form-label">Additional Notes (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your issue or any special instructions..."
                      className="form-input resize-none"
                      value={booking.notes}
                      onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Review & Confirm */}
            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Review your booking</h2>
                <p className="text-sm text-muted-foreground mb-7">Everything look correct? Confirm to submit.</p>

                <div className="space-y-4">
                  {[
                    { label: 'Service', value: selectedService?.label },
                    { label: 'Starting Price', value: selectedService?.price },
                    { label: 'Date', value: booking.date },
                    { label: 'Time', value: booking.time },
                    { label: 'Name', value: booking.name },
                    { label: 'Phone', value: booking.phone },
                    { label: 'Email', value: booking.email },
                    { label: 'Address', value: booking.address },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-mono">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-foreground text-right max-w-xs">
                        {item.value}
                      </span>
                    </div>
                  ))}
                  {booking.notes && (
                    <div className="py-3">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-mono block mb-1">
                        Notes
                      </span>
                      <span className="text-sm text-muted-foreground">{booking.notes}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <button
                  onClick={() => setStep((step - 1) as Step)}
                  className="btn-secondary"
                >
                  <Icon name="ArrowLeftIcon" size={16} />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  onClick={() => setStep((step + 1) as Step)}
                  disabled={!canProceed()}
                  className={`btn-primary ${!canProceed() ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  Continue
                  <Icon name="ArrowRightIcon" size={16} />
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn-primary">
                  Confirm Booking
                  <Icon name="CheckIcon" size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Sidebar: Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-muted border border-border rounded-2xl p-6 sticky top-24">
              <h3 className="text-sm font-bold text-foreground mb-5 flex items-center gap-2">
                <Icon name="ClipboardDocumentListIcon" size={16} className="text-primary" />
                Booking Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                    <Icon
                      name={selectedService ? (selectedService.icon as Parameters<typeof Icon>[0]['name']) : 'WrenchScrewdriverIcon'}
                      size={16}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Service</div>
                    <div className="text-sm font-semibold text-foreground">
                      {selectedService?.label ?? <span className="text-muted-foreground italic">Not selected</span>}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                    <Icon name="CalendarDaysIcon" size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Date & Time</div>
                    <div className="text-sm font-semibold text-foreground">
                      {booking.date && booking.time
                        ? `${booking.date} at ${booking.time}`
                        : <span className="text-muted-foreground italic">Not selected</span>}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                    <Icon name="MapPinIcon" size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-sm font-semibold text-foreground">
                      {booking.address || <span className="text-muted-foreground italic">Your home</span>}
                    </div>
                  </div>
                </div>
              </div>

              {selectedService && (
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <span className="text-xl font-bold text-accent">{selectedService.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Final price confirmed on-site after diagnosis.
                  </p>
                </div>
              )}

              {/* Trust items */}
              <div className="mt-6 space-y-2 pt-5 border-t border-border">
                {[
                  'Background-checked technician',
                  'No hidden fees',
                  'Free cancellation 24hr before',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="CheckIcon" size={12} className="text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}