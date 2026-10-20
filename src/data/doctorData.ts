export interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  procedures: string[];
}

export interface ExperienceItem {
  role: string;
  institution: string;
  location: string;
  mentor?: string;
  period: string;
  highlights: string[];
}

export interface PublicationItem {
  year: string;
  title: string;
  forum: string;
  description: string;
}

export const DOCTOR_DATA = {
  name: "Dr. Vineet Bachani",
  degree: "MBBS, M.S. (Orthopedics)",
  registrationNo: "G-82085",
  title: "Orthopedic & Joint Replacement Surgeon",
  clinicName: "Prathvi Orthopedic Centre",
  clinicTagline: "હાડકા ના ડૉક્ટર (Advanced Bone, Joint & Trauma Care)",
  primaryPhone: "+91 7778901394",
  secondaryPhones: ["+91 9650456018", "+91 9773916018"],
  email: "vineetbachani@gmail.com",
  appointmentNumberDisplay: "7778901394",
  whatsappNumber: "917778901394",
  
  address: {
    suite: "C - 252, 253",
    building: "Sobo Center",
    area: "South Bopal",
    city: "Ahmedabad",
    pincode: "380058",
    state: "Gujarat",
    full: "C - 252, 253 Sobo Center, South Bopal, Ahmedabad - 380058",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Sobo+Center+South+Bopal+Ahmedabad+380058",
  },

  timings: {
    days: "Monday – Saturday",
    morning: "10:00 AM – 1:00 PM",
    evening: "4:00 PM – 8:00 PM",
    sunday: "Emergency / Prior Appointment Only",
  },

  languages: ["English", "Hindi", "Sindhi", "Gujarati"],

  education: [
    {
      year: "2022",
      degree: "M.S. (Orthopedics)",
      institution: "Sri Ramachandra Institute of Higher Education & Research (SRIHER)",
      city: "Chennai",
      details: "Comprehensive post-graduate surgical residency in joint replacement, arthroscopy, and complex trauma management.",
    },
    {
      year: "2019",
      degree: "MBBS",
      institution: "Hamdard Institute of Medical Sciences & Research (HIMSR)",
      city: "New Delhi",
      details: "Extensive clinical rotations with distinguished academic performance in medical & surgical disciplines.",
    },
    {
      year: "2013",
      degree: "Senior Secondary (12th CBSE)",
      institution: "Delhi Public School (DPS), Vasant Kunj",
      city: "New Delhi",
      details: "Pre-medical foundation with special distinction in Biotechnology & Life Sciences.",
    },
  ],

  experiences: [
    {
      role: "Senior Resident Surgeon (SRS - Orthopedics)",
      institution: "Sola Civil Hospital",
      location: "Ahmedabad, Gujarat",
      mentor: "Dr. Bhavesh Jesalpura (Prof. & Head of Orthopedics)",
      period: "Sep 2025 – Jun 2026",
      highlights: [
        "Led emergency trauma, high-energy polytrauma stabilization, and open fracture management.",
        "Performed complex joint surgeries and oversaw surgical ICU & post-operative care.",
        "Managed high-volume OPD consultations and surgical schedules.",
      ],
    },
    {
      role: "Senior Resident Surgeon (SRS - Orthopedics & Joint Replacement)",
      institution: "Max Super Speciality Hospital",
      location: "Patparganj, New Delhi",
      mentor: "Dr. (Prof.) Anil Arora (Principal Director & HOD - Joint Replacement)",
      period: "May 2023 – Jul 2025",
      highlights: [
        "Associated with one of North India's highest-volume joint reconstruction centers.",
        "Specialized in primary & revision total knee (TKR) and total hip arthroplasty (THR).",
        "Conducted minimally invasive arthroscopic ligament reconstructions and robotic-assisted techniques.",
      ],
    },
    {
      role: "Junior Consultant (Orthopedics & Trauma)",
      institution: "Shalby Multi-Specialty Hospitals",
      location: "Ahmedabad, Gujarat",
      mentor: "Dr. Vikram Shah (CMD & Pioneer of Joint Replacement)",
      period: "Nov 2022 – Apr 2023",
      highlights: [
        "Worked under world-renowned joint replacement authority Dr. Vikram Shah.",
        "Refined zero-technique rapid recovery protocols for knee arthroplasty patients.",
        "Managed multi-state orthopedic cases and complex articular reconstructions.",
      ],
    },
    {
      role: "Associate Orthopedic Surgeon",
      institution: "Moolchand Hospital & AO Speciality Clinics",
      location: "New Delhi",
      mentor: "Dr. Kamal Bachani (Senior Orthopedic Consultant Surgeon)",
      period: "Jun 2022 – Sep 2022",
      highlights: [
        "Evaluated joint pathologies and formulated patient-specific pre-operative pathways.",
        "Fracture reductions with plaster, K-wires, internal fixation plates and nails.",
        "Administered intra-articular injections and guided modern physiotherapeutic rehabilitation.",
      ],
    },
  ],

  publications: [
    {
      year: "2021",
      title: "Correlation of Clinical and Radiologic Parameters in Knee Osteoarthritis with its Synovial Pathology",
      forum: "M.S. Orthopedic Surgery Thesis, Sri Ramachandra Medical College (SRIHER)",
      description: "In-depth study connecting radiographic grading with actual histologic synovial degeneration to optimize surgical intervention timings.",
    },
    {
      year: "2020",
      title: "Getting to The Root Of Medial Meniscus Root Tears: Outcome of Transtibial Pull-Out Technique",
      forum: "MINI IOACON Study Presentation",
      description: "Clinical outcomes analyzing anatomical repair using transtibial suture fixation to prevent early onset osteoarthritis.",
    },
    {
      year: "2020",
      title: "Algorithms in Oncogenic Osteomalacia: Pearls from A Rare Diagnosis",
      forum: "OASISCON 2020 Poster Publication",
      description: "Diagnostic roadmap for identifying rare tumor-induced metabolic bone disorders.",
    },
    {
      year: "2022",
      title: "Clinical Radiologic Evaluation of Reverse Shoulder Arthroplasty (RSA) in Younger Patients",
      forum: "SESICON 2022 Best Paper Category",
      description: "Investigation of functional longevity and prosthetic survival of reverse shoulder implants in patients younger than 60.",
    },
    {
      year: "2021 & 2022",
      title: "Implants: The Backbone of Orthopedic Surgery & Industry Journey from Clinical Perspective",
      forum: "NIPER (National Institute of Pharmaceutical Education & Research)",
      description: "Invited faculty speaker delivering expert technical lectures on orthopedic biomaterials, implant testing standards, and clinical biocompatibility.",
    },
  ],

  specialties: [
    {
      id: "joint-replacement",
      title: "Joint Replacement Surgery",
      subtitle: "Total Knee & Hip Arthroplasty",
      icon: "Bone",
      description: "Advanced surgical solutions for severe arthritis, avascular necrosis, and degenerative joint conditions using modern, long-lasting implants.",
      procedures: [
        "Total Knee Replacement (TKR)",
        "Partial / Unicondylar Knee Replacement",
        "Total Hip Replacement (THR)",
        "Revision Joint Arthroplasty",
        "Rapid Recovery / Fast-Track Protocols",
      ],
    },
    {
      id: "arthroscopy-sports",
      title: "Arthroscopy & Sports Medicine",
      subtitle: "Minimally Invasive Joint Preservation",
      icon: "Activity",
      description: "Keyhole surgical techniques to repair ligaments, cartilage, and tendons without large incisions, returning athletes to peak performance quickly.",
      procedures: [
        "ACL & PCL Reconstruction",
        "Meniscus Tear Repair & Root Preservation",
        "Shoulder Rotator Cuff Repair",
        "Recurrent Shoulder Dislocation (Bankart Repair)",
        "Cartilage Restoration & PRP Therapy",
      ],
    },
    {
      id: "trauma-fracture",
      title: "Trauma & Fracture Care",
      subtitle: "Complex Fixation & Polytrauma",
      icon: "ShieldAlert",
      description: "24/7 acute trauma management for road accidents, workplace injuries, and elderly fragility fractures using modern locked plating and intramedullary nails.",
      procedures: [
        "Emergency Polytrauma Resuscitation",
        "Minimally Invasive Plate Osteosynthesis (MIPO)",
        "Intramedullary Nailing for Long Bones",
        "Open & Comminuted Fracture Fixation",
        "Non-Union & Malunion Corrective Surgery",
      ],
    },
    {
      id: "spine-nerve",
      title: "Spine & Nerve Disorders",
      subtitle: "Back Pain, Sciatica & Slip Disc",
      icon: "Layers",
      description: "Comprehensive non-surgical and surgical intervention for chronic spine conditions, pinched nerves, and postural deformities.",
      procedures: [
        "Lumbar & Cervical Disc Herniation",
        "Sciatica & Radiculopathy Relief",
        "Spinal Stenosis Management",
        "Targeted Epidural & Nerve Root Blocks",
        "Postural Alignment & Ergonomics",
      ],
    },
    {
      id: "shoulder-upper-limb",
      title: "Shoulder & Upper Limb",
      subtitle: "Frozen Shoulder & Arthroplasty",
      icon: "Crosshair",
      description: "Specialized restoration of shoulder, elbow, and wrist mobility with proven surgical expertise presented at national conferences.",
      procedures: [
        "Frozen Shoulder Hydrodilatation & Release",
        "Reverse Shoulder Arthroplasty (RSA)",
        "Elbow Tendonitis & Tennis Elbow",
        "Wrist Scaphoid Fractures & Distal Radius Fixation",
        "Carpal Tunnel & Trigger Finger Release",
      ],
    },
    {
      id: "foot-ankle-arthritis",
      title: "Foot, Ankle & Arthritis Care",
      subtitle: "Tendon Ruptures & Joint Health",
      icon: "Footprints",
      description: "Holistic care for traumatic ankle twists, tendon injuries, gout, and systemic arthritis to ensure painless walking and posture balance.",
      procedures: [
        "Achilles Tendon Rupture Repair",
        "Ankle Sprains & Ligament Reconstruction",
        "Osteoarthritis & Osteoporosis Screening",
        "Viscosupplementation & Gel Injections",
        "Custom Orthotics & Footwear Guidance",
      ],
    },
  ],

  testimonials: [
    {
      name: "Ramesh Patel",
      location: "South Bopal, Ahmedabad",
      treatment: "Bilateral Knee Replacement",
      quote: "My severe knee pain had made walking impossible for 3 years. Dr. Vineet Bachani's diagnosis and meticulous surgical technique had me walking with support on the very next day. Today I am pain-free!",
      rating: 5,
    },
    {
      name: "Dhaval Shah",
      location: "Bopal 444, Ahmedabad",
      treatment: "ACL & Meniscus Arthroscopy",
      quote: "Suffered a sports knee ligament tear during cricket. Dr. Vineet explained the MRI thoroughly and performed keyhole arthroscopy. The recovery and physiotherapy guidance were world-class.",
      rating: 5,
    },
    {
      name: "Sunita Sharma",
      location: "Patparganj, Delhi",
      treatment: "Complex Wrist Fracture Fixation",
      quote: "After a fall on slippery stairs, my wrist had multiple fragments. Dr. Vineet fixed it with titanium plating. I have regained full wrist motion with zero stiffness. Highly empathetic doctor!",
      rating: 5,
    },
  ],

  faqs: [
    {
      q: "Where is Dr. Vineet Bachani's clinic located in Ahmedabad?",
      a: "Prathvi Orthopedic Centre is located at C - 252, 253, Sobo Center, South Bopal, Ahmedabad - 380058 (Gujarat). It is easily accessible with convenient parking.",
    },
    {
      q: "What are the clinic's consulting hours?",
      a: "Consulting hours are Monday through Saturday: Morning 10:00 AM – 1:00 PM and Evening 4:00 PM – 8:00 PM. Sunday is reserved for prior bookings and emergency trauma cases.",
    },
    {
      q: "How can I book an appointment with Dr. Vineet Bachani?",
      a: "You can book an appointment by calling the clinic directly at +91 7778901394, clicking the WhatsApp chat button on this website, or filling out the online appointment form.",
    },
    {
      q: "Does Dr. Vineet prioritize non-surgical treatment before surgery?",
      a: "Yes, Dr. Vineet believes strongly in conservative, evidence-based management first. Many joint, tendon, and spine issues improve significantly with targeted medical therapy, joint injections, and specialized rehabilitation. Surgery is recommended only when conservative methods are insufficient.",
    },
    {
      q: "What hospital affiliations does Dr. Vineet have?",
      a: "Dr. Vineet has worked as a Senior Resident Orthopedic Surgeon at Sola Civil Hospital (Ahmedabad) and Max Super Speciality Hospital (Delhi), as well as Jr. Consultant at Shalby Multi-Specialty Hospital and Moolchand Hospital.",
    },
    {
      q: "Do you offer emergency trauma and fracture care?",
      a: "Yes. Acute fractures, dislocations, accidental trauma, and severe joint injuries can be attended to promptly. Please call our clinic line at +91 7778901394 for urgent assistance.",
    },
  ],
};

