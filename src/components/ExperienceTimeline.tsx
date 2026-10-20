'use client';

import React, { useState } from 'react';
import { Building2, Calendar, Award, BookOpen, CheckCircle, ExternalLink, UserCheck } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export default function ExperienceTimeline() {
  const [tab, setTab] = useState<'hospitals' | 'research'>('hospitals');

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Professional Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Hospital Experience &amp; Academic Research
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Trained under India’s topmost orthopedic mentors across leading multi-specialty 
            and high-volume surgical hospitals in Delhi and Ahmedabad.
          </p>

          {/* Tab Selector */}
          <div className="inline-flex p-1.5 bg-slate-100 rounded-xl mt-6 border border-slate-200">
            <button
              type="button"
              onClick={() => setTab('hospitals')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                tab === 'hospitals'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Hospital Appointments</span>
            </button>
            <button
              type="button"
              onClick={() => setTab('research')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                tab === 'research'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Research, Thesis &amp; Conferences</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Hospital Appointments */}
        {tab === 'hospitals' && (
          <div className="relative border-l-2 border-teal-200 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
            {DOCTOR_DATA.experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-teal-600 shadow-md group-hover:scale-125 transition-transform" />

                {/* Period Tag (Desktop offset) */}
                <div className="md:absolute md:-left-36 md:top-1 text-xs font-bold text-teal-800 md:text-right md:w-24 mb-1 md:mb-0">
                  {exp.period}
                </div>

                {/* Content Box */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-teal-300 hover:bg-teal-50/30 transition-all shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-600">
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm font-bold text-teal-700">
                    {exp.institution}
                  </p>

                  {exp.mentor && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1 mb-3">
                      <UserCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Associated with / Under: <strong>{exp.mentor}</strong></span>
                    </div>
                  )}

                  <ul className="space-y-1.5 mt-3 text-xs sm:text-sm text-slate-600">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Publications, Thesis & Accomplishments */}
        {tab === 'research' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOCTOR_DATA.publications.map((pub, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 bg-teal-100 text-teal-800 rounded-full">
                      {pub.year}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Peer Presentation / Keynote
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-xs font-bold text-teal-700 mt-1.5">
                    {pub.forum}
                  </p>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {pub.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Orthopedic Innovation &amp; Research</span>
                  <span className="font-semibold text-teal-700">Dr. Vineet Bachani</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

