import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock, Users, ChevronDown, Activity, Heart, Stethoscope } from 'lucide-react';
import { SERVICES, PRACTITIONERS, TESTIMONIALS, FAQS } from '@/src/data';
import { cn } from '@/src/lib/utils';
import health1 from '@/src/assets/images/health1.jpeg';
import person7 from '@/src/assets/images/person7.jpg';

const iconMap: Record<string, any> = {
  Activity,
  Heart,
  Stethoscope,
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-slate-50 py-12 lg:py-0">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/clinic-hero/1920/1080?blur=2"
            alt="Harbor Wellness Clinic"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-primary/10 text-primary rounded-full text-xs lg:text-sm font-semibold tracking-wide uppercase">
              <ShieldCheck size={14} className="lg:w-4 lg:h-4" />
              Trusted Healthcare Professionals
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-navy leading-[1.1]">
              Your Health, <br />
              <span className="text-primary">Our Priority.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
              Experience compassionate, personalized care at Harbor Wellness Clinic. Our expert team is dedicated to your physical and mental well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 lg:pt-4">
              <Link
                to="/book"
                className="bg-primary text-white px-6 py-3.5 lg:px-8 lg:py-4 rounded-full font-bold text-base lg:text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
              >
                Book an Appointment
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-white text-navy border border-slate-200 px-6 py-3.5 lg:px-8 lg:py-4 rounded-full font-bold text-base lg:text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
            <div className="flex items-center gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-slate-200">
              <div className="flex -space-x-3 lg:-space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-4 border-white shadow-sm"
                    alt="Patient"
                  />
                ))}
              </div>
              <div className="text-xs lg:text-sm">
                <div className="flex text-amber-400 mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="lg:w-[14px] lg:h-[14px]" fill="currentColor" />)}
                </div>
                <p className="font-medium text-slate-900">1,200+ Happy Patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={health1}
                alt="Compassionate Care"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">15+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Specialists</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">Our team consists of board-certified experts in various fields.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview - Redesigned */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-20 gap-6 lg:gap-8">
          <div className="max-w-2xl space-y-4 lg:space-y-6">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs lg:text-sm">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-navy leading-tight">Specialized Care for Every Body</h2>
            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed">
              We offer a comprehensive suite of clinical services designed to restore function, alleviate pain, and optimize your overall well-being.
            </p>
          </div>
          <Link to="/services" className="w-full sm:w-auto bg-navy text-white px-8 lg:px-10 py-3.5 lg:py-4 rounded-2xl font-bold hover:bg-navy/90 transition-all shadow-lg flex items-center justify-center gap-2 text-sm lg:text-base">
            Explore All Services <ArrowRight size={18} className="lg:w-5 lg:h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || CheckCircle2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-slate-50 rounded-bl-[4rem] lg:rounded-bl-[5rem] -mr-6 -mt-6 lg:-mr-8 lg:-mt-8 transition-colors group-hover:bg-primary/5" />
                
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 text-primary rounded-2xl lg:rounded-3xl flex items-center justify-center mb-8 lg:mb-10 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Icon size={32} className="lg:w-10 lg:h-10" />
                </div>
                
                <div className="space-y-3 lg:space-y-4 relative z-10 flex-grow">
                  <h3 className="text-2xl lg:text-3xl font-bold text-navy group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-slate-500 text-base lg:text-lg leading-relaxed">{service.description}</p>
                </div>

                <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-slate-50 relative z-10">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-3 text-navy font-black uppercase tracking-widest text-[10px] lg:text-xs hover:text-primary transition-colors"
                  >
                    View Service Details <ArrowRight size={14} className="lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Patients Trust Harbor Wellness - Redesigned */}
      <section className="bg-navy py-16 lg:py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            
            {/* Left Content: Header & Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8 lg:space-y-10"
            >
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.95] lg:leading-[0.85] tracking-tighter">
                  Why Patients <br />
                  <span className="text-primary italic font-serif font-light">Trust</span> Harbor
                </h2>
                <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-md border-l-2 border-primary pl-4 lg:pl-6">
                  We combine world-class medical expertise with a deeply personal approach to healing.
                </p>
              </div>
              
              <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[400px] group">
                <img
                  src={person7}
                  alt="Our Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 p-4 lg:p-6 glass rounded-xl lg:rounded-2xl border-white/10 backdrop-blur-xl">
                  <p className="text-white font-medium text-sm lg:text-base leading-relaxed italic">"The level of care and attention I received at Harbor was unlike any other clinic. They truly listen."</p>
                  <div className="flex items-center gap-3 lg:gap-4 mt-3 lg:mt-4">
                    <div className="w-6 lg:w-8 h-px bg-primary" />
                    <p className="text-primary font-black uppercase tracking-widest text-[8px] lg:text-[9px]">Sarah Jenkins, Patient</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content: Trust Points Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {[
                { 
                  icon: ShieldCheck, 
                  title: "Licensed Experts", 
                  desc: "Our team consists of board-certified specialists with over 50 years of combined clinical experience.",
                  num: "01"
                },
                { 
                  icon: Clock, 
                  title: "Flexible Hours", 
                  desc: "We offer early morning and late evening appointments to fit your busy lifestyle without compromise.",
                  num: "02"
                },
                { 
                  icon: Users, 
                  title: "Personalized Care", 
                  desc: "Every treatment plan is custom-built for your specific goals, body type, and recovery timeline.",
                  num: "03"
                },
                { 
                  icon: Star, 
                  title: "Modern Facilities", 
                  desc: "Experience healing in our state-of-the-art clinic designed for comfort, privacy, and clinical efficiency.",
                  num: "04"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/5 p-6 lg:p-10 rounded-[1.5rem] lg:rounded-[2rem] hover:bg-white/10 transition-all group relative overflow-hidden"
                >
                  <span className="absolute top-4 right-4 lg:top-6 lg:right-6 text-white/5 font-black text-4xl lg:text-5xl group-hover:text-primary/10 transition-colors">{item.num}</span>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 text-primary rounded-lg lg:rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon size={20} className="lg:w-6 lg:h-6" />
                  </div>
                  <h4 className="font-bold text-lg lg:text-xl mb-2 lg:mb-3 text-white group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-xs lg:text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Doctor Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6 lg:gap-8">
          <div className="max-w-2xl space-y-3 lg:space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Dedicated Specialists</h2>
            <p className="text-slate-600 text-sm lg:text-base">Our team of experts is here to guide you on your journey to better health.</p>
          </div>
          <Link to="/practitioners" className="text-primary font-bold flex items-center gap-2 hover:underline text-sm lg:text-base">
            View All Practitioners <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRACTITIONERS.map((doc, idx) => (
            <motion.div
              key={doc.id}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2rem] lg:rounded-3xl overflow-hidden border border-slate-100 shadow-sm card-hover"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 lg:bottom-4 lg:left-4 lg:right-4 glass p-3 lg:p-4 rounded-xl lg:rounded-2xl">
                  <h3 className="font-bold text-navy text-sm lg:text-base">{doc.name}</h3>
                  <p className="text-[10px] lg:text-xs text-primary font-bold uppercase tracking-wider">{doc.credentials}</p>
                </div>
              </div>
              <div className="p-6 lg:p-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {doc.specializations.slice(0, 2).map(spec => (
                    <span key={spec} className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                      {spec}
                    </span>
                  ))}
                </div>
                <p className="text-xs lg:text-sm text-slate-600 line-clamp-3">{doc.bio}</p>
                <Link
                  to={`/practitioners/${doc.id}`}
                  className="block w-full text-center py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all text-sm"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <div className="flex justify-center gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm relative"
              >
                <div className="text-primary/20 absolute top-6 right-8 text-6xl font-serif">“</div>
                <div className="flex text-amber-400 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-navy">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Coverage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest mb-12">Accepted Insurance Providers</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {['BlueCross', 'Aetna', 'UnitedHealth', 'Cigna', 'Kaiser', 'Humana'].map(name => (
            <div key={name} className="text-2xl font-black text-slate-900">{name}</div>
          ))}
        </div>
        <p className="mt-12 text-slate-500">Don't see your provider? <Link to="/insurance" className="text-primary font-bold hover:underline">Check our full list</Link></p>
      </section>

      {/* FAQ Preview */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
        <div className="space-y-4">
          {FAQS.slice(0, 3).map((faq) => (
            <details key={faq.id} className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-navy list-none">
                {faq.question}
                <ChevronDown className="group-open:rotate-180 transition-transform text-primary" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/faq" className="text-primary font-bold hover:underline">View All FAQs</Link>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="bg-primary rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <motion.div {...fadeIn} className="relative z-10 space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">Ready to Feel Better?</h2>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">Take the first step towards a healthier, happier you. Book your consultation today.</p>
            <Link
              to="/book"
              className="inline-flex bg-white text-primary px-8 lg:px-10 py-4 lg:py-5 rounded-full font-black text-lg lg:text-xl hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Book Your Appointment Now
            </Link>
            <p className="text-xs lg:text-sm text-white/60">Confidential & secure consultations guaranteed.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
