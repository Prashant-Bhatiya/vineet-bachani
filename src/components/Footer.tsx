'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ArrowUp, ShieldCheck } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 text-sm border-t border-slate-800">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Doctor & Clinic Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-2.5 inline-block border border-slate-700 shadow-md">
              <Image
                src="/logo/prathvi-logo-horizontal.png"
                alt="Prathvi Orthopedic"
                width={260}
                height={56}
                className="h-11 w-auto object-contain"
              />
            </div>

            <p className="text-slate-300 leading-relaxed text-sm">
              <strong>{DOCTOR_DATA.name}</strong>, {DOCTOR_DATA.degree}. Specialized in Joint Replacement (Knee &amp; Hip), 
              Arthroscopic ligament surgery, and complex trauma fractures. Providing high-standard orthopedic care in Ahmedabad.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm space-y-1.5">
              <p className="text-slate-200">
                <strong className="text-white">Medical Reg No:</strong> {DOCTOR_DATA.registrationNo} (GMC)
              </p>
              <p className="text-slate-400">
                Alumnus: SRIHER Chennai &amp; HIMSR New Delhi
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-teal-300 transition-colors">About Doctor</a>
              </li>
              <li>
                <a href="#specialties" className="text-slate-400 hover:text-teal-300 transition-colors">Treatments</a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-teal-300 transition-colors">Hospital Career</a>
              </li>
              <li>
                <a href="#clinic" className="text-slate-400 hover:text-teal-300 transition-colors">Prathvi Clinic</a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-400 hover:text-teal-300 transition-colors">Patient Reviews</a>
              </li>
              <li>
                <a href="#faqs" className="text-slate-400 hover:text-teal-300 transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Treatments &amp; Surgeries
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Total Knee Replacement (TKR)</li>
              <li>Total Hip Replacement (THR)</li>
              <li>Arthroscopic ACL &amp; Meniscus Repair</li>
              <li>Complex Fracture Plating &amp; Nailing</li>
              <li>Slip Disc &amp; Sciatica Pain Management</li>
              <li>Reverse Shoulder Arthroplasty (RSA)</li>
              <li>Achilles Tendon &amp; Foot Trauma</li>
            </ul>
          </div>

          {/* Col 4: Contact & Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Clinic Contact &amp; OPD
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <span className="text-slate-300 leading-snug">{DOCTOR_DATA.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${DOCTOR_DATA.primaryPhone}`} className="text-teal-300 font-bold hover:underline">
                  {DOCTOR_DATA.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${DOCTOR_DATA.email}`} className="text-slate-300 hover:underline">
                  {DOCTOR_DATA.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <div>
                  <span className="block font-semibold text-slate-200">Mon - Sat:</span>
                  <span className="text-slate-400">10:00 AM - 1:00 PM &amp; 4:00 PM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-14 pt-8 border-t border-slate-800 text-xs text-slate-400 space-y-3">
          <p className="leading-relaxed">
            <strong>Medical Disclaimer:</strong> The information provided on this website is intended for informational and appointment 
            scheduling purposes only and should not be used as a substitute for direct medical diagnosis, advice, or treatment by a qualified healthcare professional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
            <p>
              &copy; {new Date().getFullYear()} {DOCTOR_DATA.clinicName} • All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <span>Dr. Vineet Bachani (MBBS, MS Ortho)</span>
              <span>•</span>
              <a href="#" className="hover:text-teal-300 font-semibold transition-colors">Back to Top &uarr;</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
