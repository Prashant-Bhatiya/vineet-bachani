'use client';

import React from 'react';
import Image from 'next/image';
import { Award, CheckCircle2, MapPin, Clock } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/80 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/70">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] bg-cyan-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Doctor Profile & Specialty Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col justify-center">
            
            {/* Top Verified Clinic Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/90 border border-teal-300 text-teal-900 text-xs sm:text-sm font-bold shadow-sm self-center lg:self-start">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Prathvi Orthopedic Centre • Sobo Center, South Bopal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.16]">
              Advanced Bone, Joint &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-600">
                Orthopedic Surgery
              </span>
            </h1>

            {/* Doctor Identity Banner */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm space-y-3 text-left">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2.5 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight">
                    {DOCTOR_DATA.name}
                  </h2>
                  <p className="text-sm font-bold text-teal-700 mt-0.5">
                    {DOCTOR_DATA.degree} • {DOCTOR_DATA.title}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold shrink-0">
                  GMC Reg: {DOCTOR_DATA.registrationNo}
                </span>
              </div>

              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                Specialized in <strong>Primary &amp; Revision Joint Replacement</strong> (Knee &amp; Hip), 
                <strong> Arthroscopic Keyhole Ligament Reconstruction</strong> (ACL/Meniscus), 
                <strong> Complex Trauma &amp; Fracture Fixation</strong>, and <strong>Spine Care</strong>.
              </p>

              {/* Core Clinical Focus Badges */}
              <div className="pt-1 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="px-2.5 py-1 rounded-md bg-teal-50/80 text-teal-900 border border-teal-100">Joint Replacement</span>
                <span className="px-2.5 py-1 rounded-md bg-teal-50/80 text-teal-900 border border-teal-100">Keyhole Arthroscopy</span>
                <span className="px-2.5 py-1 rounded-md bg-teal-50/80 text-teal-900 border border-teal-100">Complex Fracture Care</span>
                <span className="px-2.5 py-1 rounded-md bg-teal-50/80 text-teal-900 border border-teal-100">Spine &amp; Arthritis</span>
              </div>
            </div>

            {/* Hospital Training Pedigree */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 text-left">
                Premier Hospital Residencies &amp; Mentorship:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-[13px] font-semibold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Max Super Speciality Hospital, Delhi</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-[13px] font-semibold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Shalby Multi-Speciality Hospital, Ahmedabad</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-[13px] font-semibold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Sola Civil Hospital, Ahmedabad</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-[13px] font-semibold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>SRIHER Chennai &amp; HIMSR New Delhi</span>
                </div>
              </div>
            </div>

            {/* Consulting Hours Ribbon */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-teal-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <span>
                  <strong className="text-slate-900">OPD Timings:</strong> Mon–Sat 10:00 AM – 1:00 PM &amp; 4:00 PM – 8:00 PM
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-teal-800 font-bold shrink-0">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>Sobo Center, South Bopal</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Resolution Doctor Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Card Container */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white via-teal-50/60 to-white shadow-2xl border-2 border-teal-100">
                
                {/* Doctor Image Container with Explicit Height */}
                <div className="relative h-[480px] sm:h-[520px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
                  <Image
                    src="/images/dr-vineet-hero.jpg"
                    alt="Dr. Vineet Bachani - Orthopedic & Joint Replacement Surgeon"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent pointer-events-none" />

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-2xl font-black leading-tight">
                      Dr. Vineet Bachani
                    </p>
                    <p className="text-xs text-teal-300 font-semibold mt-1">
                      MBBS, M.S. (Orthopedics) • GMC Reg: G-82085
                    </p>
                    <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>Prathvi Orthopedic Centre, South Bopal</span>
                    </p>
                  </div>
                </div>

                {/* Floating Experience Badge (Clear & High Contrast) */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-2xl border-2 border-teal-300 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900 tracking-tight">M.S. Orthopedics</p>
                    <p className="text-xs font-bold text-teal-800">SRIHER, Chennai</p>
                  </div>
                </div>

                {/* Floating OPD Open Badge (Clear & High Contrast) */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-3 shadow-2xl border-2 border-emerald-300 flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <div>
                    <p className="text-xs font-black text-emerald-900 tracking-tight">OPD Consultations Open</p>
                    <p className="text-xs font-bold text-slate-800">Sobo Center, South Bopal</p>
                  </div>
                </div>

              </div>

              {/* Sub-note */}
              <div className="text-center mt-6">
                <span className="text-xs text-slate-600 font-semibold">
                  Comprehensive Bone, Joint, Sports Injury &amp; Fracture Care
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
