import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { DOCTOR_DATA } from '../data/doctorData';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://prathviorthopedics.com'),
  title: 'Dr. Vineet Bachani | Orthopedic & Joint Replacement Surgeon | Prathvi Orthopedic Centre',
  description: 'Consult Dr. Vineet Bachani (MBBS, M.S. Orthopedics, Reg: G-82085) at Prathvi Orthopedic Centre, South Bopal, Ahmedabad. Expert in Knee & Hip Replacement, Arthroscopy, Fracture Trauma & Spine Care.',
  icons: {
    icon: [
      { url: '/logo/prathvi-favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/logo/prathvi-favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/logo/prathvi-favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  keywords: [
    'Dr Vineet Bachani',
    'Orthopedic Doctor South Bopal',
    'Orthopedic Surgeon Ahmedabad',
    'Prathvi Orthopedic Centre',
    'Knee Replacement Ahmedabad',
    'Hip Replacement Doctor Bopal',
    'Arthroscopy ACL Surgeon Ahmedabad',
    'Fracture Doctor South Bopal',
    'Sobo Center Doctor',
  ],
  authors: [{ name: 'Dr. Vineet Bachani' }],
  openGraph: {
    title: 'Dr. Vineet Bachani | Orthopedic & Joint Replacement Surgeon',
    description: 'Prathvi Orthopedic Centre, C-252, 253 Sobo Center, South Bopal, Ahmedabad. Call +91 7778901394 for appointments.',
    url: 'https://drvineetorthopedics.com',
    siteName: 'Prathvi Orthopedic Centre',
    images: [
      {
        url: '/images/dr-vineet-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Vineet Bachani - Orthopedic Surgeon',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: DOCTOR_DATA.name,
    description: 'Orthopedic and Joint Replacement Surgeon at Prathvi Orthopedic Centre, South Bopal, Ahmedabad.',
    medicalSpecialty: 'Orthopedic',
    telephone: DOCTOR_DATA.primaryPhone,
    email: DOCTOR_DATA.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${DOCTOR_DATA.address.suite}, ${DOCTOR_DATA.address.building}`,
      addressLocality: DOCTOR_DATA.address.area,
      addressRegion: DOCTOR_DATA.address.city,
      postalCode: DOCTOR_DATA.address.pincode,
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '16:00',
        closes: '20:00',
      },
    ],
  };

  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col pb-14 sm:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
