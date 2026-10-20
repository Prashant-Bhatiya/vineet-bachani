'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Patient Stories &amp; Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Trusted by Patients Across Ahmedabad &amp; Delhi
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Real feedback from individuals who regained pain-free mobility through Dr. Vineet Bachani&apos;s compassionate surgical and non-surgical care.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTOR_DATA.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-teal-300 hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-teal-200 group-hover:text-teal-400 transition-colors" />
                </div>

                {/* Treatment tag */}
                <span className="inline-block text-xs font-bold text-teal-700 bg-teal-100/70 px-2.5 py-0.5 rounded-full">
                  {item.treatment}
                </span>

                {/* Patient quote */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Patient info */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  </h3>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>
                <span className="text-[11px] font-semibold text-teal-700 bg-white px-2 py-1 rounded-md border border-slate-200">
                  Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-teal-50 via-cyan-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-teal-200/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Need a Second Opinion for Knee / Hip Surgery?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Bring your MRI / X-Ray reports to Prathvi Orthopedic Centre for an unbiased surgical assessment.
            </p>
          </div>
          <a
            href="#appointment"
            className="shrink-0 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            Schedule Second Opinion
          </a>
        </div>

      </div>
    </section>
  );
}

