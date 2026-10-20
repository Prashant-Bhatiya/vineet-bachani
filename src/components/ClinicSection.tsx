'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Phone, Navigation, ShieldCheck, CheckCircle2, Building, MessageCircle } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export default function ClinicSection() {
  return (
    <section id="clinic" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Clinic &amp; Consultation Centre
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Visit Prathvi Orthopedic Centre
          </h2>
          <p className="text-slate-600 text-base mt-3">
            A specialized orthopedic consultation and trauma care facility established by Dr. Vineet Bachani 
            to bring tertiary-grade joint and bone treatment to South Bopal, Ahmedabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Clinic Real Photo & Info Badges */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-teal-200/60 bg-white">
              {/* Actual Clinic Signboard Image */}
              <div className="relative h-[340px] sm:h-[400px] w-full bg-slate-900">
                <Image
                  src="/images/clinic-board.jpg"
                  alt="Prathvi Orthopedic Centre Clinic Signboard"
                  fill
                  className="object-cover object-center"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-teal-900/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-teal-400/40">
                  Prathvi Orthopedic Centre • South Bopal
                </div>

                <div className="absolute bottom-3 right-3 bg-white/95 text-slate-900 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold shadow-md">
                  Reg No: {DOCTOR_DATA.registrationNo}
                </div>
              </div>

              {/* Photo Caption Note */}
              <div className="p-4 bg-teal-900 text-white flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold block text-sm">હાડકા ના ડૉક્ટર (Bone &amp; Joint Specialist)</span>
                  <span className="text-teal-200 text-xs">C - 252, 253 Sobo Center, South Bopal, Ahmedabad</span>
                </div>
                <a
                  href={`tel:${DOCTOR_DATA.primaryPhone}`}
                  className="bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-amber-300 transition-colors shrink-0"
                >
                  Call Clinic
                </a>
              </div>
            </div>

            {/* Quick Amenities Pill List */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Prime Commercial Sobo Center</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Easy Elevator &amp; Stretcher Access</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Spacious Patient Waiting Lounge</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Plaster &amp; Dressing Suite</span>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Hours, Contact details & Map Link */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-teal-800">
                    Clinic Address
                  </h3>
                  <p className="text-base font-extrabold text-slate-900 mt-1">
                    {DOCTOR_DATA.clinicName}
                  </p>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {DOCTOR_DATA.address.full}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Landmark: Above Sobo Center Shopping Complex, South Bopal
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={DOCTOR_DATA.address.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Consulting Hours Table */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-800">
                    OPD Consultation Schedule
                  </h3>
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                      <span className="font-bold text-slate-800">Monday to Saturday:</span>
                      <span className="font-semibold text-teal-700">10:00 AM – 1:00 PM &amp; 4:00 PM – 8:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                      <span className="font-bold text-slate-800">Sunday:</span>
                      <span className="text-amber-700 font-semibold">Prior Appointment / Emergency Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Clinic Clinical Facilities */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                In-Clinic Services Available
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Detailed Clinical &amp; Joint Examination</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Fracture Reduction &amp; Plaster Casts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Intra-Articular Joint &amp; Gel Injections</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Post-Op Wound Care &amp; Stitch Removal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Physiotherapy Rehabilitation Roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Digital Radiography (X-Ray) Review</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`tel:${DOCTOR_DATA.primaryPhone}`}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {DOCTOR_DATA.appointmentNumberDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=Hello%20Dr.%20Vineet%2C%20I%20would%20like%20to%20visit%20Prathvi%20Orthopedic%20Centre.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Clinic</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

