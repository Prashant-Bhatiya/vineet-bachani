'use client';

import React from 'react';
import { Calendar } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

// Authentic Official WhatsApp Icon
function WhatsAppIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.04 3.67C14.24 3.67 16.3 4.53 17.86 6.09C19.42 7.65 20.28 9.71 20.28 11.91C20.28 16.45 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.75 7.84 19L7.54 18.82L4.42 19.64L5.25 16.6L5.05 16.29C4.24 15 3.8 13.48 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67M8.53 7.32C8.34 7.32 8.03 7.39 7.76 7.68C7.5 7.98 6.74 8.67 6.74 10.1C6.74 11.52 7.78 12.9 7.92 13.09C8.07 13.28 9.94 16.28 12.9 17.43C15.36 18.39 15.86 18.2 16.4 18.15C16.94 18.1 18.14 17.44 18.38 16.75C18.63 16.07 18.63 15.48 18.55 15.35C18.48 15.23 18.28 15.15 17.98 15.01C17.68 14.86 16.24 14.15 15.97 14.05C15.7 13.95 15.5 13.9 15.3 14.2C15.1 14.5 14.53 15.16 14.36 15.36C14.19 15.55 14.01 15.58 13.72 15.43C13.42 15.28 12.46 14.97 11.33 13.95C10.45 13.16 9.85 12.19 9.68 11.89C9.51 11.59 9.66 11.43 9.81 11.28C9.94 11.15 10.11 10.93 10.26 10.76C10.41 10.58 10.46 10.46 10.56 10.26C10.66 10.06 10.61 9.88 10.54 9.73C10.46 9.58 9.87 8.1 9.62 7.5C9.38 6.92 9.13 7 8.95 6.99C8.78 6.98 8.53 7.32 8.53 7.32Z"/>
    </svg>
  );
}

export default function FloatingActions() {
  return (
    <>
      {/* Floating Action Button for Desktop/Tablet: Shows Official WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        <a
          href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=Hello%20Dr.%20Vineet%2C%20I%20would%20like%20to%20inquire%20about%20an%20orthopedic%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-8 h-8" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Floating Bottom Bar for Mobile Only: ONLY TWO BUTTONS (WhatsApp & Book Visit) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/98 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          {/* Button 1: WhatsApp with Official WhatsApp Icon */}
          <a
            href={`https://wa.me/${DOCTOR_DATA.whatsappNumber}?text=Hello%20Dr.%20Vineet%2C%20I%20would%20like%20to%20book%20an%20orthopedic%20appointment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] active:bg-[#20ba59] text-white font-bold text-sm shadow-md shadow-emerald-600/20"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>

          {/* Button 2: Book Visit */}
          <a
            href="#appointment"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 active:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-600/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Visit</span>
          </a>
        </div>
      </div>
    </>
  );
}
