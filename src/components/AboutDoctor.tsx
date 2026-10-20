'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GraduationCap, Award, Stethoscope, CheckCircle2, Languages, FileText, ChevronRight, User } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export default function AboutDoctor() {
  const [activePhoto, setActivePhoto] = useState<'consultation' | 'original'>('consultation');

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            About the Doctor
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Meet Dr. Vineet Bachani
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Dedicated Orthopedic &amp; Joint Replacement Surgeon combining academic excellence, 
            prestigious hospital fellowships, and a compassionate, patient-first surgical philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo Showcase & Badges */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-slate-100 to-teal-50 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative h-[460px] sm:h-[500px] w-full rounded-2xl overflow-hidden bg-slate-200 shadow-inner">
                <Image
                  src={activePhoto === 'consultation' ? '/images/dr-vineet-consultation.jpg' : '/images/dr-vineet-original.jpg'}
                  alt="Dr. Vineet Bachani Profile"
                  fill
                  className="object-cover object-top transition-all duration-500"
                />

                {/* Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900">{DOCTOR_DATA.name}</p>
                      <p className="text-[11px] text-teal-700 font-semibold">{DOCTOR_DATA.degree}</p>
                    </div>
                    <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">
                      Reg: {DOCTOR_DATA.registrationNo}
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo Toggle Buttons */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActivePhoto('consultation')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    activePhoto === 'consultation'
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Clinical Portrait
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto('original')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    activePhoto === 'original'
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Doctor Photo
                </button>
              </div>
            </div>

            {/* Quick Doctor Meta */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-500 font-medium">Specialization:</span>
                <p className="font-bold text-slate-800 mt-0.5">Orthopedics &amp; Joint Care</p>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Languages:</span>
                <p className="font-bold text-slate-800 mt-0.5">{DOCTOR_DATA.languages.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Academic Path */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Philosophy of Care */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-teal-600" />
                <span>Patient-First, Evidence-Based Orthopedic Care</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dr. Vineet Bachani is a qualified medical practitioner holding an <strong>MS in Orthopedic Surgery</strong> with 
                rich clinical and surgical experience from top-tier institutions across India. Having trained under legendary surgeons 
                including <strong>Dr. (Prof.) Anil Arora</strong> (Max Super Speciality Hospital) and <strong>Dr. Vikram Shah</strong> (Shalby Hospital), 
                he brings cutting-edge surgical precision and international recovery protocols to his practice in South Bopal, Ahmedabad.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                His philosophy focuses on <strong>joint preservation and conservative management</strong> wherever possible. Surgery is only 
                advised when non-invasive interventions are exhausted, ensuring patients regain mobility, reduce pain, and return to an active 
                lifestyle safely and quickly.
              </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-teal-600" />
                <span>Academic &amp; Surgical Qualifications</span>
              </h4>

              <div className="space-y-3">
                {DOCTOR_DATA.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 hover:bg-teal-50/50 border border-slate-200 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {edu.year}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h5 className="text-sm font-bold text-slate-900">{edu.degree}</h5>
                        <span className="text-xs text-teal-700 font-medium">• {edu.city}</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-700 mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-slate-500 mt-1">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-teal-800 mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-600" />
                <span>Clinical &amp; Surgical Competencies</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Total Knee &amp; Hip Replacement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Arthroscopic Meniscus &amp; ACL Repair</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Complex Fracture Plating &amp; Nailing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Herniated Disc &amp; Sciatica Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Frozen Shoulder &amp; Reverse Shoulder Surgery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>ICU Trauma &amp; Post-Op Rehabilitation</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900"
              >
                <span>View Full Hospital Career &amp; Mentors</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

