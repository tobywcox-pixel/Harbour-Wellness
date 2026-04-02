import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES, PRACTITIONERS } from '@/src/data';
import { ArrowRight, CheckCircle2, Activity, Heart, Stethoscope, ChevronRight, ShieldCheck, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import person5 from '@/src/assets/images/person5.jpg';

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

export function Services() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-navy py-16 lg:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-6 transform -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 lg:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">Our Specialized Services</h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">Providing a holistic approach to your health and well-being through expert care and personalized treatment plans.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 lg:-mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || Activity;
            return (
              <motion.div
                key={service.id}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 shadow-xl card-hover flex flex-col items-start text-left"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 text-primary rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 lg:mb-8">
                  <Icon size={32} className="lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 lg:mb-8 flex-grow leading-relaxed text-sm lg:text-base">{service.description}</p>
                <div className="space-y-2 lg:space-y-3 mb-8 lg:mb-10 w-full">
                  {service.conditions.slice(0, 3).map(cond => (
                    <div key={cond} className="flex items-center gap-2 text-xs lg:text-sm text-slate-500 font-medium">
                      <CheckCircle2 size={14} className="text-secondary lg:w-4 lg:h-4" />
                      {cond}
                    </div>
                  ))}
                </div>
                <Link
                  to={`/services/${service.id}`}
                  className="w-full bg-slate-50 text-navy py-3.5 lg:py-4 rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all group text-sm lg:text-base"
                >
                  Learn More <ArrowRight size={16} className="lg:w-[18px] lg:h-[18px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div {...fadeIn} className="space-y-6 lg:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">A Patient-First Approach to Healing</h2>
          <p className="text-base lg:text-lg text-slate-600 leading-relaxed">We don't just treat symptoms; we treat people. Our integrated approach ensures that every aspect of your well-being is considered.</p>
          <div className="space-y-4 lg:space-y-6">
            {[
              { title: "Evidence-Based Techniques", desc: "We use the latest clinical research to inform our treatment methods." },
              { title: "Collaborative Care", desc: "Our specialists work together to provide a seamless experience." },
              { title: "Empowerment through Education", desc: "We give you the tools and knowledge to manage your health long-term." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm lg:text-base">{item.title}</h4>
                  <p className="text-slate-500 text-xs lg:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeIn} className="relative">
          <div className="rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white">
            <img
              src={person5}
              alt="Healing Environment"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <div className="p-24 text-center">Service not found.</div>;

  const Icon = iconMap[service.icon] || Activity;
  const relatedPractitioners = PRACTITIONERS.filter(p =>
    p.specializations.some(spec => service.title.toLowerCase().includes(spec.toLowerCase()) || spec.toLowerCase().includes(service.title.toLowerCase()))
  );

  return (
    <div className="pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={14} />
          <Link to="/services" className="hover:text-primary">Services</Link>
          <ChevronRight size={14} />
          <span className="text-navy">{service.title}</span>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8 lg:space-y-12">
          <div className="space-y-4 lg:space-y-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 text-primary rounded-2xl lg:rounded-3xl flex items-center justify-center">
              <Icon size={32} className="lg:w-10 lg:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{service.title}</h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">{service.fullDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-slate-50 p-6 lg:p-8 rounded-2xl lg:rounded-3xl space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-2">
                <Activity className="text-primary lg:w-6 lg:h-6" size={20} /> Conditions Treated
              </h3>
              <ul className="space-y-2 lg:space-y-3">
                {service.conditions.map(cond => (
                  <li key={cond} className="flex items-center gap-3 text-sm lg:text-base text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-primary rounded-full" />
                    {cond}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-6 lg:p-8 rounded-2xl lg:rounded-3xl space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-2">
                <Heart className="text-secondary lg:w-6 lg:h-6" size={20} /> Key Benefits
              </h3>
              <ul className="space-y-2 lg:space-y-3">
                {service.benefits.map(benefit => (
                  <li key={benefit} className="flex items-center gap-3 text-sm lg:text-base text-slate-600 font-medium">
                    <CheckCircle2 size={16} className="text-secondary lg:w-[18px] lg:h-[18px]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-xl lg:text-2xl font-bold">Our Treatment Approach</h3>
            <p className="text-slate-600 leading-relaxed text-base lg:text-lg">{service.approach}</p>
          </div>

          {/* Related Practitioners */}
          <div className="space-y-6 lg:space-y-8 pt-8 lg:pt-12 border-t border-slate-100">
            <h3 className="text-xl lg:text-2xl font-bold">Specialists in {service.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {relatedPractitioners.map(doc => (
                <Link
                  key={doc.id}
                  to={`/practitioners/${doc.id}`}
                  className="flex items-center gap-4 lg:gap-6 p-4 lg:p-6 bg-white rounded-xl lg:rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg lg:rounded-xl object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-navy group-hover:text-primary transition-colors text-sm lg:text-base">{doc.name}</h4>
                    <p className="text-[10px] lg:text-xs text-slate-400 font-bold uppercase tracking-wider">{doc.credentials}</p>
                    <p className="text-xs lg:text-sm text-primary font-medium mt-1">View Profile</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:space-y-8">
          <div className="bg-navy p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] text-white space-y-6 lg:space-y-8 sticky top-32">
            <div className="space-y-3 lg:space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold">Need Help?</h3>
              <p className="text-slate-300 text-xs lg:text-sm">Our team is here to guide you. Contact us if you have any questions about this service.</p>
            </div>
            <div className="pt-6 lg:pt-8 border-t border-white/10 space-y-3 lg:space-y-4">
              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <ShieldCheck className="text-primary lg:w-5 lg:h-5" size={18} />
                <span>Confidential & Secure</span>
              </div>
              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <Clock className="text-primary lg:w-5 lg:h-5" size={18} />
                <span>Flexible Hours</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4 lg:space-y-6">
            <h4 className="font-bold text-navy text-sm lg:text-base">Other Services</h4>
            <div className="space-y-1 lg:space-y-2">
              {SERVICES.filter(s => s.id !== service.id).map(s => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="flex items-center justify-between p-3 lg:p-4 rounded-lg lg:rounded-xl hover:bg-slate-50 transition-all group"
                >
                  <span className="font-medium text-xs lg:text-sm text-slate-600 group-hover:text-primary">{s.title}</span>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-primary lg:w-[18px] lg:h-[18px]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
