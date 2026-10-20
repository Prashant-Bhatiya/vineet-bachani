'use client';

import React, { useState } from 'react';
import { Bone, Activity, ShieldAlert, Layers, Crosshair, Footprints, Check, ArrowRight, Calendar } from 'lucide-react';
import { DOCTOR_DATA, Specialty } from '@/data/doctorData';

const iconMap: Record<string, React.ElementType> = {
  Bone,
  Activity,
  ShieldAlert,
  Layers,
  Crosshair,
  Footprints,
};

export default function Specialties() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(DOCTOR_DATA.specialties[0].id);

  const active = DOCTOR_DATA.specialties.find((s) => s.id === selectedSpecialty) || DOCTOR_DATA.specialties[0];
  const ActiveIcon = iconMap[active.icon] || Bone;

  return (
    <section id="specialties" className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            Clinical Expertise &amp; Treatments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Specialized Orthopedic Care
          </h2>
          <p className="text-slate-600 text-base mt-3">
            From modern joint replacement and keyhole sports surgery to complex trauma reconstruction, 
            Dr. Vineet Bachani provides comprehensive treatment tailored to your lifestyle.
          </p>
        </div>

        {/* Specialty Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {DOCTOR_DATA.specialties.map((spec) => {
            const Icon = iconMap[spec.icon] || Bone;
            const isSelected = spec.id === selectedSpecialty;

            return (
              <button
                key={spec.id}
                type="button"
                onClick={() => setSelectedSpecialty(spec.id)}
                className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/30 -translate-y-1'
                    : 'bg-white text-slate-700 hover:bg-teal-50/70 border border-slate-200'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-700'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-bold leading-tight">{spec.title}</h3>
              </button>
            );
          })}
        </div>

        {/* Selected Specialty Detailed Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-50/50 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* Description & Procedures */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    {active.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {active.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {active.description}
              </p>

              {/* Procedures List */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Key Procedures &amp; Interventions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {active.procedures.map((proc, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-800"
                    >
                      <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consult for {active.title}</span>
                </a>
                <a
                  href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=Hello%20Dr.%20Vineet%2C%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(active.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-semibold text-xs sm:text-sm transition-colors"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Benefits / Why Choose Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 rounded-2xl p-6 text-white shadow-lg">
              <h4 className="text-sm font-bold uppercase tracking-wider text-teal-300 mb-4">
                Why Consult Dr. Vineet for {active.title}?
              </h4>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center shrink-0 text-teal-300 font-bold">
                    1
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Conservative-First Protocol</strong>
                    <p className="text-teal-100/80 mt-0.5">
                      We explore targeted physiotherapy, joint preservation, and non-surgical therapies prior to recommending surgery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center shrink-0 text-teal-300 font-bold">
                    2
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Premier Institutional Training</strong>
                    <p className="text-teal-100/80 mt-0.5">
                      Hands-on surgical experience from Max Super Speciality (Delhi), Shalby (Ahmedabad), and Sola Civil Hospital.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center shrink-0 text-teal-300 font-bold">
                    3
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Modern Pain &amp; Rehab Algorithms</strong>
                    <p className="text-teal-100/80 mt-0.5">
                      Minimally invasive incisions for reduced blood loss, lesser tissue damage, and rapid return to everyday activities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-teal-700/50 flex items-center justify-between text-[11px] text-teal-200">
                <span>OPD Consultations</span>
                <span className="font-bold text-white">Mon – Sat @ Sobo Center</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

