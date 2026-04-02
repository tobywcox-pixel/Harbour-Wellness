import person3 from '@/src/assets/images/person3.webp';
import person8 from '@/src/assets/images/person8.webp';
import person9 from '@/src/assets/images/person9.webp';

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  conditions: string[];
  approach: string;
  benefits: string[];
  icon: string;
}

export interface Practitioner {
  id: string;
  name: string;
  credentials: string;
  specializations: string[];
  experience: number;
  bio: string;
  certifications: string[];
  photo: string;
  availability: string[]; // e.g., ["Mon", "Wed", "Fri"]
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Appointments' | 'Insurance';
}

export const SERVICES: Service[] = [
  {
    id: 'physiotherapy',
    title: 'Physiotherapy',
    description: 'Restore movement and function after injury or illness.',
    fullDescription: 'Our physiotherapy services are designed to help you recover from injuries, manage chronic pain, and improve your overall mobility. We use evidence-based techniques to create personalized treatment plans.',
    conditions: ['Sports injuries', 'Back and neck pain', 'Post-surgical rehabilitation', 'Arthritis'],
    approach: 'We combine manual therapy, exercise prescription, and education to empower patients in their recovery journey.',
    benefits: ['Reduced pain', 'Improved flexibility', 'Enhanced strength', 'Prevention of future injuries'],
    icon: 'Activity',
  },
  {
    id: 'mental-health',
    title: 'Mental Health Therapy',
    description: 'Professional support for your emotional and psychological well-being.',
    fullDescription: 'Our licensed therapists provide a safe, confidential space to explore your thoughts and feelings. We offer individual and group sessions tailored to your specific needs.',
    conditions: ['Anxiety', 'Depression', 'Stress management', 'Relationship issues'],
    approach: 'We utilize Cognitive Behavioral Therapy (CBT), mindfulness-based approaches, and person-centered therapy.',
    benefits: ['Better coping strategies', 'Improved relationships', 'Increased self-awareness', 'Emotional resilience'],
    icon: 'Heart',
  },
  {
    id: 'chiropractic',
    title: 'Chiropractic Care',
    description: 'Spinal adjustments and holistic wellness for your nervous system.',
    fullDescription: 'Chiropractic care focuses on the relationship between the spine and the nervous system. Our gentle adjustments help restore proper alignment and function.',
    conditions: ['Sciatica', 'Headaches', 'Joint pain', 'Postural issues'],
    approach: 'We use a variety of adjustment techniques, soft tissue therapy, and lifestyle advice to promote holistic health.',
    benefits: ['Pain relief', 'Improved posture', 'Better nervous system function', 'Enhanced athletic performance'],
    icon: 'Stethoscope',
  },
];

export const PRACTITIONERS: Practitioner[] = [
  {
    id: 'dr-sarah-chen',
    name: 'Dr. Sarah Chen',
    credentials: 'PT, DPT',
    specializations: ['Sports Physiotherapy', 'Orthopedic Rehab'],
    experience: 12,
    bio: 'Dr. Chen is passionate about helping athletes return to their peak performance. With over a decade of experience, she combines advanced manual techniques with functional movement assessments.',
    certifications: ['Board Certified Sports Specialist', 'Dry Needling Certified'],
    photo: person9,
    availability: ['Monday', 'Wednesday', 'Friday'],
  },
  {
    id: 'dr-james-wilson',
    name: 'Dr. James Wilson',
    credentials: 'PsyD',
    specializations: ['Clinical Psychology', 'CBT'],
    experience: 15,
    bio: 'Dr. Wilson provides empathetic care for individuals struggling with anxiety and depression. He believes in a collaborative approach to therapy, helping clients build practical tools for long-term wellness.',
    certifications: ['Licensed Clinical Psychologist', 'Certified CBT Therapist'],
    photo: person3,
    availability: ['Tuesday', 'Thursday', 'Saturday'],
  },
  {
    id: 'dr-elena-rodriguez',
    name: 'Dr. Elena Rodriguez',
    credentials: 'DC',
    specializations: ['Prenatal Chiropractic', 'Pediatric Care'],
    experience: 8,
    bio: 'Dr. Rodriguez specializes in gentle chiropractic care for families. She has a special interest in prenatal and pediatric wellness, ensuring a healthy start for the little ones.',
    certifications: ['ICPA Certified', 'Webster Technique Certified'],
    photo: person8,
    availability: ['Monday', 'Tuesday', 'Thursday'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Emily R.',
    text: 'The team at Harbor Wellness truly cares. Dr. Chen helped me recover from a running injury faster than I ever expected.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael S.',
    text: 'I felt heard and supported from my very first therapy session. The atmosphere is so calming and professional.',
    rating: 5,
  },
  {
    id: '3',
    name: 'David L.',
    text: 'Best chiropractic care I have ever received. My chronic back pain is finally manageable.',
    rating: 4,
  },
];

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    question: 'Do I need a referral to book an appointment?',
    answer: 'In most cases, you do not need a referral to see our practitioners. However, some insurance plans may require one for coverage. We recommend checking with your provider.',
    category: 'General',
  },
  {
    id: 'f2',
    question: 'How long are the appointments?',
    answer: 'Initial consultations typically last 60 minutes, while follow-up appointments range from 30 to 45 minutes depending on the service.',
    category: 'Appointments',
  },
  {
    id: 'f3',
    question: 'What insurance providers do you accept?',
    answer: 'We accept most major insurance providers, including Blue Cross, Aetna, and UnitedHealthcare. Please visit our Insurance page for a full list.',
    category: 'Insurance',
  },
];
