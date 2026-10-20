'use client';

import React from 'react';
import { Clock, MapPin, Phone, ShieldCheck, CalendarCheck } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export default function QuickInfoBar() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Card 1: Consulting Hours */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:border-teal-300 transition-all group">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-600 group-hover:text-white transition-colors flex items-center justify-center text-teal-600 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700">OPD Timings</h2>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">{DOCTOR_DATA.timings.days}</p>
              <div className="mt-2 text-xs text-slate-600 space-y-0.5">
                <p>Morning: <span className="font-semibold text-slate-800">{DOCTOR_DATA.timings.morning}</span></p>
                <p>Evening: <span className="font-semibold text-slate-800">{DOCTOR_DATA.timings.evening}</span></p>
              </div>
              <p className="text-[11px] text-amber-700 font-medium mt-1.5">
                Sunday: {DOCTOR_DATA.timings.sunday}
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Clinic Location */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:border-teal-300 transition-all group">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 group-hover:bg-cyan-600 group-hover:text-white transition-colors flex items-center justify-center text-cyan-600 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-700">Clinic Address</h2>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">{DOCTOR_DATA.clinicName}</p>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                {DOCTOR_DATA.address.suite}, {DOCTOR_DATA.address.building},<br />
                {DOCTOR_DATA.address.area}, {DOCTOR_DATA.address.city} - {DOCTOR_DATA.address.pincode}
              </p>
              <a
                href={DOCTOR_DATA.address.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-800 mt-2 transition-colors"
              >
                <span>Get Directions on Map &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Quick Appointment & Hotline */}
        <div className="bg-gradient-to-br from-teal-700 to-cyan-800 rounded-2xl p-6 shadow-xl text-white group">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-teal-200 shrink-0">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-200">Appointments &amp; Inquiries</h2>
              <p className="text-xl sm:text-2xl font-black tracking-tight text-white">
                <a href={`tel:${DOCTOR_DATA.primaryPhone}`} className="hover:underline">
                  {DOCTOR_DATA.appointmentNumberDisplay}
                </a>
              </p>
              <p className="text-xs text-teal-100/90 pt-0.5">
                Instant OPD slot confirmation or walk-in guidance.
              </p>
              <div className="pt-2">
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-teal-800 hover:bg-teal-50 px-3.5 py-1.5 rounded-lg shadow-sm transition-all"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Book Visit Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

