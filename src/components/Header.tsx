'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Left: Official Brand Logo - Perfectly Sized & Never Cut Off */}
          <a href="#" className="flex items-center py-1 group shrink-0" title="Prathvi Orthopedic - Home">
            <Image
              src="/logo/prathvi-logo-horizontal.png"
              alt="Prathvi Orthopedic"
              width={280}
              height={56}
              priority
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-[1.02] transition-transform"
            />
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-semibold text-slate-700">
            <a href="#about" className="hover:text-teal-600 transition-colors py-2">
              About Doctor
            </a>
            <a href="#specialties" className="hover:text-teal-600 transition-colors py-2">
              Treatments
            </a>
            <a href="#experience" className="hover:text-teal-600 transition-colors py-2">
              Experience
            </a>
            <a href="#clinic" className="hover:text-teal-600 transition-colors py-2">
              Prathvi Clinic
            </a>
            <a href="#testimonials" className="hover:text-teal-600 transition-colors py-2">
              Reviews
            </a>
            <a href="#faqs" className="hover:text-teal-600 transition-colors py-2">
              FAQs
            </a>
          </nav>

          {/* Right: Desktop Action Button - Sleek & Balanced with Nav items */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#appointment"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-[13px] shadow-sm transition-all hover:shadow"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile View: Hamburger Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation Menu</span>
            <span className="text-xs font-semibold text-teal-700">Reg: {DOCTOR_DATA.registrationNo}</span>
          </div>

          <nav className="flex flex-col space-y-1 font-semibold text-base text-slate-800">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              <span>About Dr. Vineet Bachani</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              <span>Treatments &amp; Surgeries</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              <span>Hospital Appointments</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#clinic"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              <span>Prathvi Clinic &amp; Location</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              <span>Patient Reviews</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              <span>Frequently Asked Questions</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <span>OPD Timings:</span>
            <span className="font-bold text-slate-900">Mon–Sat 10am-1pm &amp; 4pm-8pm</span>
          </div>
        </div>
      )}
    </header>
  );
}
