'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Phone, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

// Official WhatsApp Icon
function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.04 3.67C14.24 3.67 16.3 4.53 17.86 6.09C19.42 7.65 20.28 9.71 20.28 11.91C20.28 16.45 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.75 7.84 19L7.54 18.82L4.42 19.64L5.25 16.6L5.05 16.29C4.24 15 3.8 13.48 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67M8.53 7.32C8.34 7.32 8.03 7.39 7.76 7.68C7.5 7.98 6.74 8.67 6.74 10.1C6.74 11.52 7.78 12.9 7.92 13.09C8.07 13.28 9.94 16.28 12.9 17.43C15.36 18.39 15.86 18.2 16.4 18.15C16.94 18.1 18.14 17.44 18.38 16.75C18.63 16.07 18.63 15.48 18.55 15.35C18.48 15.23 18.28 15.15 17.98 15.01C17.68 14.86 16.24 14.15 15.97 14.05C15.7 13.95 15.5 13.9 15.3 14.2C15.1 14.5 14.53 15.16 14.36 15.36C14.19 15.55 14.01 15.58 13.72 15.43C13.42 15.28 12.46 14.97 11.33 13.95C10.45 13.16 9.85 12.19 9.68 11.89C9.51 11.59 9.66 11.43 9.81 11.28C9.94 11.15 10.11 10.93 10.26 10.76C10.41 10.58 10.46 10.46 10.56 10.26C10.66 10.06 10.61 9.88 10.54 9.73C10.46 9.58 9.87 8.1 9.62 7.5C9.38 6.92 9.13 7 8.95 6.99C8.78 6.98 8.53 7.32 8.53 7.32Z"/>
    </svg>
  );
}

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: 'Knee / Joint Pain',
    preferredDate: '',
    slot: 'Evening (4:00 PM - 8:00 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const msg = `*Appointment Request - Prathvi Orthopedic Centre*%0A` +
      `*Patient Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Concern:* ${encodeURIComponent(formData.concern)}%0A` +
      `*Preferred Date:* ${encodeURIComponent(formData.preferredDate || 'Earliest Available')}%0A` +
      `*Preferred Slot:* ${encodeURIComponent(formData.slot)}%0A` +
      `*Notes:* ${encodeURIComponent(formData.notes || 'None')}`;

    window.open(`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-b from-teal-50/70 via-white to-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clear High-Contrast Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-teal-800 font-bold text-xs uppercase tracking-widest bg-teal-100/90 px-3.5 py-1.5 rounded-full border border-teal-300 shadow-xs">
              Schedule Your Consultation
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Book a Consultation with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Dr. Vineet Bachani
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you are suffering from chronic knee/joint pain, need an expert opinion on joint replacement, 
              or require immediate fracture assessment, our clinic provides dedicated orthopedic care with minimal waiting time.
            </p>

            <div className="space-y-3.5 pt-1">
              {/* Phone card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-teal-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Direct Appointment Line</span>
                  <p className="text-lg font-black text-teal-700 mt-0.5">
                    <a href={`tel:${DOCTOR_DATA.primaryPhone}`} className="hover:underline">
                      {DOCTOR_DATA.primaryPhone}
                    </a>
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Alternate: {DOCTOR_DATA.secondaryPhones.join(', ')}
                  </p>
                </div>
              </div>

              {/* Timing card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-teal-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">OPD Consulting Schedule</span>
                  <div className="text-xs font-bold text-slate-800 mt-1 space-y-0.5">
                    <p>Monday – Saturday: <span className="text-teal-700">{DOCTOR_DATA.timings.morning}</span> &amp; <span className="text-teal-700">{DOCTOR_DATA.timings.evening}</span></p>
                    <p className="text-amber-800 font-semibold">Sunday: {DOCTOR_DATA.timings.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Location card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-teal-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Prathvi Orthopedic Centre</span>
                  <p className="text-xs font-semibold text-slate-700 mt-0.5 leading-relaxed">
                    {DOCTOR_DATA.address.full}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 pt-1">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Gujarat Medical Council Reg No: {DOCTOR_DATA.registrationNo}</span>
            </div>
          </div>

          {/* Right Column: Clean White Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-teal-100 shadow-xl">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Online Appointment Booking</h3>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">Direct confirmation with clinic desk</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border-2 border-emerald-200">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Thank You, {formData.name}!</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Your appointment request has been initiated. WhatsApp has opened to confirm your slot with Prathvi Orthopedic Centre.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Patient Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Contact / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Specialty Concern */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Medical Concern *
                      </label>
                      <select
                        value={formData.concern}
                        onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                      >
                        <option value="Knee / Joint Pain">Knee / Joint Pain</option>
                        <option value="Knee / Hip Joint Replacement">Knee / Hip Joint Replacement</option>
                        <option value="Sports Injury / Ligament (ACL/Meniscus)">Sports Injury / Ligament (ACL/Meniscus)</option>
                        <option value="Fracture / Trauma Fixation">Fracture / Trauma Fixation</option>
                        <option value="Spine / Slip Disc / Sciatica">Spine / Slip Disc / Sciatica</option>
                        <option value="Shoulder / Frozen Shoulder">Shoulder / Frozen Shoulder</option>
                        <option value="Foot / Ankle / Achilles Tendon">Foot / Ankle / Achilles Tendon</option>
                        <option value="General Orthopedic Checkup">General Orthopedic Checkup</option>
                      </select>
                    </div>

                    {/* Preferred Slot */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred OPD Timing Slot *
                      </label>
                      <select
                        value={formData.slot}
                        onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning: 10:00 AM – 1:00 PM</option>
                        <option value="Evening (4:00 PM - 8:00 PM)">Evening: 4:00 PM – 8:00 PM</option>
                        <option value="Emergency Walk-in">Emergency / Urgent Assessment</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>

                  {/* Notes / Symptoms */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Symptoms / Prior Medical History (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Swelling in right knee for 2 weeks, previous X-ray report available..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-teal-600/25 transition-all hover:-translate-y-0.5"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-white" />
                      <span>Confirm &amp; Book via WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-500 text-center pt-1 font-medium">
                    Instant confirmation from Prathvi Orthopedic Centre. Walk-ins welcomed during OPD hours.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
