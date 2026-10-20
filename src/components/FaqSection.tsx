'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Common Patient Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Clear answers about orthopedic consultations, timings, surgeries, and clinic visits.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {DOCTOR_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-teal-700 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold text-slate-900">Have a specific orthopedic query?</h3>
            <p className="text-xs text-slate-500 mt-0.5">Contact Dr. Vineet Bachani directly on WhatsApp or call our desk.</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${DOCTOR_DATA.primaryPhone}`}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>Call Helpline</span>
            </a>
            <a
              href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=Hello%20Dr.%20Vineet%2C%20I%20have%20a%20question%20regarding%20an%20orthopedic%20condition.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat with Clinic</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

