'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickInfoBar from '@/components/QuickInfoBar';
import AboutDoctor from '@/components/AboutDoctor';
import Specialties from '@/components/Specialties';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ClinicSection from '@/components/ClinicSection';
import Testimonials from '@/components/Testimonials';
import AppointmentSection from '@/components/AppointmentSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuickInfoBar />
        <AboutDoctor />
        <Specialties />
        <ExperienceTimeline />
        <ClinicSection />
        <Testimonials />
        <AppointmentSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

