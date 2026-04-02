import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRACTITIONERS } from '@/src/data';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock, Users, ChevronRight, Award, Calendar } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function Practitioners() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-navy py-16 lg:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-full bg-primary/5 skew-y-6 transform translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 lg:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">Meet Our Specialists</h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">A team of dedicated, board-certified professionals committed to your health and well-being.</p>
        </div>
      </section>

      {/* Practitioners List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 lg:-mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRACTITIONERS.map((doc, idx) => (
            <motion.div
              key={doc.id}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl card-hover"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 glass p-4 lg:p-6 rounded-2xl lg:rounded-3xl">
                  <h3 className="text-lg lg:text-xl font-bold text-navy">{doc.name}</h3>
                  <p className="text-[10px] lg:text-xs text-primary font-bold uppercase tracking-widest mt-1">{doc.credentials}</p>
                </div>
              </div>
              <div className="p-6 lg:p-10 space-y-4 lg:space-y-6">
                <div className="flex flex-wrap gap-2">
                  {doc.specializations.map(spec => (
                    <span key={spec} className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600 px-2 lg:px-3 py-1 lg:py-1.5 rounded-md lg:rounded-lg">
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs lg:text-sm text-slate-500 font-medium">
                  <div className="flex items-center gap-1">
                    <Award size={14} className="text-secondary lg:w-4 lg:h-4" />
                    {doc.experience}+ Years
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-amber-400 lg:w-4 lg:h-4" fill="currentColor" />
                    4.9/5
                  </div>
                </div>
                <p className="text-xs lg:text-sm text-slate-600 leading-relaxed line-clamp-3">{doc.bio}</p>
                <Link
                  to={`/practitioners/${doc.id}`}
                  className="block w-full text-center py-3 lg:py-4 rounded-xl lg:rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md text-sm lg:text-base"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-32 text-center space-y-8 lg:space-y-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Committed to Clinical Excellence</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { title: "Board Certified", desc: "All our doctors hold recognized board certifications." },
            { title: "Ongoing Education", desc: "We stay updated with the latest medical advancements." },
            { title: "Patient-Centered", desc: "We prioritize your comfort and individual needs." },
            { title: "Collaborative", desc: "Our specialists work together for your holistic health." }
          ].map((item, i) => (
            <div key={i} className="space-y-3 lg:space-y-4 p-6 lg:p-8 bg-slate-50 rounded-[1.5rem] lg:rounded-[2rem]">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white text-primary rounded-lg lg:rounded-xl flex items-center justify-center mx-auto shadow-sm">
                <ShieldCheck size={20} className="lg:w-6 lg:h-6" />
              </div>
              <h4 className="font-bold text-navy text-sm lg:text-base">{item.title}</h4>
              <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function PractitionerDetail() {
  const { id } = useParams();
  const doc = PRACTITIONERS.find(p => p.id === id);

  if (!doc) return <div className="p-24 text-center">Practitioner not found.</div>;

  return (
    <div className="pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={14} />
          <Link to="/practitioners" className="hover:text-primary">Practitioners</Link>
          <ChevronRight size={14} />
          <span className="text-navy">{doc.name}</span>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-8 lg:space-y-12">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full md:w-64 aspect-[4/5] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl shrink-0 border-4 lg:border-8 border-white">
              <img
                src={doc.photo}
                alt={doc.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{doc.name}</h1>
                <p className="text-lg lg:text-xl text-primary font-bold uppercase tracking-widest">{doc.credentials}</p>
              </div>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {doc.specializations.map(spec => (
                  <span key={spec} className="bg-primary/10 text-primary px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg lg:rounded-xl text-xs lg:text-sm font-bold uppercase tracking-wider">
                    {spec}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6 lg:gap-8 pt-4 border-t border-slate-100">
                <div className="space-y-1">
                  <p className="text-xl lg:text-2xl font-bold text-navy">{doc.experience}+</p>
                  <p className="text-[10px] lg:text-xs text-slate-400 font-bold uppercase tracking-widest">Years Experience</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xl lg:text-2xl font-bold text-navy">4.9/5</p>
                  <p className="text-[10px] lg:text-xs text-slate-400 font-bold uppercase tracking-widest">Patient Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-xl lg:text-2xl font-bold">About {doc.name}</h3>
            <p className="text-base lg:text-lg text-slate-600 leading-relaxed">{doc.bio}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-slate-50 p-6 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-3">
                <Award className="text-primary lg:w-6 lg:h-6" size={20} /> Certifications
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                {doc.certifications.map(cert => (
                  <li key={cert} className="flex items-start gap-3 text-sm lg:text-base text-slate-600 font-medium">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 lg:w-5 lg:h-5" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-6 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-3">
                <Calendar className="text-primary lg:w-6 lg:h-6" size={20} /> Availability
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 lg:gap-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => {
                  const isAvailable = doc.availability.includes(day);
                  return (
                    <div
                      key={day}
                      className={cn(
                        "p-3 lg:p-4 rounded-xl lg:rounded-2xl text-center font-bold text-xs lg:text-sm transition-all",
                        isAvailable ? "bg-white text-navy shadow-sm" : "bg-slate-100 text-slate-300"
                      )}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              <p className="text-[10px] lg:text-xs text-slate-400 text-center italic">Exact times available in the booking system.</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:space-y-8">
          <div className="bg-primary p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] text-white space-y-6 lg:space-y-8 sticky top-32 shadow-2xl">
            <div className="space-y-3 lg:space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold">Contact {doc.name.split(' ')[1]}</h3>
              <p className="text-white/80 text-xs lg:text-sm leading-relaxed">Our specialists are here to support your journey to wellness. Reach out to learn more about their approach.</p>
            </div>
            <div className="pt-6 lg:pt-8 border-t border-white/10 space-y-3 lg:space-y-4">
              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <Clock className="text-white/60 lg:w-5 lg:h-5" size={18} />
                <span>Next Available: Tomorrow</span>
              </div>
              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <Users className="text-white/60 lg:w-5 lg:h-5" size={18} />
                <span>Accepting New Patients</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4 lg:space-y-6">
            <h4 className="font-bold text-navy text-sm lg:text-base">Other Specialists</h4>
            <div className="space-y-3 lg:space-y-4">
              {PRACTITIONERS.filter(p => p.id !== doc.id).map(p => (
                <Link
                  key={p.id}
                  to={`/practitioners/${p.id}`}
                  className="flex items-center gap-3 lg:gap-4 p-2 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-slate-50 transition-all group"
                >
                  <img src={p.photo} alt={p.name} className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl object-cover" referrerPolicy="no-referrer" />
                  <div className="flex-grow">
                    <p className="font-bold text-xs lg:text-sm text-navy group-hover:text-primary transition-colors">{p.name}</p>
                    <p className="text-[9px] lg:text-[10px] text-slate-400 font-bold uppercase tracking-widest">{p.credentials}</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-200 group-hover:text-primary lg:w-[18px] lg:h-[18px]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
