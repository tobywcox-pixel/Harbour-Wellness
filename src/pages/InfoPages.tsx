import React from 'react';
import { motion } from 'motion/react';
import { FAQS } from '@/src/data';
import { ChevronDown, Search, Mail, Phone, MapPin, Clock, ShieldCheck, CreditCard, FileText } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function FAQPage() {
  const [activeCategory, setActiveCategory] = React.useState<'All' | 'General' | 'Appointments' | 'Insurance'>('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredFaqs = FAQS.filter(faq =>
    (activeCategory === 'All' || faq.category === activeCategory) &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pb-24">
      <section className="bg-navy py-16 lg:py-24 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 lg:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">Frequently Asked Questions</h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">Find answers to common questions about our services, appointments, and policies.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 lg:-mt-12 relative z-20">
        <div className="bg-white p-4 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 mb-8 lg:mb-12 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 lg:w-5 lg:h-5" size={18} />
            <input
              type="text"
              placeholder="Search for a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 lg:pl-12 pr-4 lg:pr-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary focus:outline-none transition-all font-medium text-sm lg:text-base"
            />
          </div>
          <div className="flex gap-2 p-1 bg-slate-50 rounded-xl lg:rounded-2xl overflow-x-auto scrollbar-hide">
            {['All', 'General', 'Appointments', 'Insurance'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={cn(
                  "px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl text-xs lg:text-sm font-bold transition-all whitespace-nowrap",
                  activeCategory === cat ? "bg-white text-primary shadow-sm" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 lg:space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <motion.details
                key={faq.id}
                {...fadeIn}
                className="group bg-white rounded-2xl lg:rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <summary className="flex justify-between items-center p-6 lg:p-8 cursor-pointer font-bold text-navy list-none text-base lg:text-lg">
                  {faq.question}
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-slate-50 rounded-full flex items-center justify-center text-primary group-open:rotate-180 transition-transform shrink-0">
                    <ChevronDown size={18} className="lg:w-5 lg:h-5" />
                  </div>
                </summary>
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 lg:pt-6 text-sm lg:text-lg">
                  {faq.answer}
                </div>
              </motion.details>
            ))
          ) : (
            <div className="text-center py-16 lg:py-24 space-y-4">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-300">
                <Search size={32} className="lg:w-10 lg:h-10" />
              </div>
              <p className="text-slate-500 font-bold text-sm lg:text-base">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export function InsurancePage() {
  return (
    <div className="pb-24">
      <section className="bg-navy py-16 lg:py-24 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 lg:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">Insurance & Payments</h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">We strive to make quality healthcare accessible and transparent for all our patients.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 lg:-mt-12 relative z-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2 space-y-8 lg:space-y-12">
          <div className="bg-white p-8 lg:p-12 rounded-[2rem] lg:rounded-[3rem] shadow-xl border border-slate-100 space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-navy">Accepted Insurance Providers</h2>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed">We accept most major insurance plans. If your provider is not listed below, please contact us to verify coverage.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
              {[
                { name: 'Blue Cross Blue Shield', logo: 'BCBS' },
                { name: 'Aetna', logo: 'Aetna' },
                { name: 'UnitedHealthcare', logo: 'UHC' },
                { name: 'Cigna', logo: 'Cigna' },
                { name: 'Kaiser Permanente', logo: 'Kaiser' },
                { name: 'Humana', logo: 'Humana' },
                { name: 'Medicare', logo: 'Medicare' },
                { name: 'Medicaid', logo: 'Medicaid' },
                { name: 'Tricare', logo: 'Tricare' }
              ].map(provider => (
                <div key={provider.name} className="p-4 lg:p-6 bg-slate-50 rounded-2xl lg:rounded-3xl text-center space-y-1 lg:space-y-2 border border-transparent hover:border-primary/20 transition-all group">
                  <div className="text-lg lg:text-xl font-black text-slate-300 group-hover:text-primary transition-colors">{provider.logo}</div>
                  <p className="text-xs lg:text-sm font-bold text-navy">{provider.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] shadow-lg border border-slate-100 space-y-4 lg:space-y-6">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-secondary/10 text-secondary rounded-xl lg:rounded-2xl flex items-center justify-center">
                <CreditCard size={24} className="lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold">Payment Methods</h3>
              <p className="text-slate-600 text-xs lg:text-sm leading-relaxed">We accept all major credit cards, HSA/FSA cards, and personal checks. Payment is due at the time of service unless otherwise arranged.</p>
            </div>
            <div className="bg-white p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] shadow-lg border border-slate-100 space-y-4 lg:space-y-6">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary/10 text-primary rounded-xl lg:rounded-2xl flex items-center justify-center">
                <FileText size={24} className="lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold">Billing Transparency</h3>
              <p className="text-slate-600 text-xs lg:text-sm leading-relaxed">We provide detailed invoices and can assist with insurance claims. No hidden fees, ever. We believe in clear, upfront pricing.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          <div className="bg-slate-900 p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] text-white space-y-6 lg:space-y-8 sticky top-32">
            <h3 className="text-xl lg:text-2xl font-bold">Need Assistance?</h3>
            <p className="text-slate-400 text-xs lg:text-sm leading-relaxed">Our billing department is here to help you navigate your insurance coverage and payment options.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                  <Phone size={18} className="lg:w-5 lg:h-5" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-slate-500 font-bold uppercase tracking-widest">Billing Support</p>
                  <p className="font-bold text-sm lg:text-base">(555) 123-4568</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                  <Mail size={18} className="lg:w-5 lg:h-5" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-slate-500 font-bold uppercase tracking-widest">Email Billing</p>
                  <p className="font-bold text-sm lg:text-base">billing@harborwellness.com</p>
                </div>
              </div>
            </div>
            <div className="pt-6 lg:pt-8 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <ShieldCheck className="text-secondary lg:w-5 lg:h-5" size={18} />
                <span>Secure Payment Processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="pb-24">
      <section className="bg-navy py-16 lg:py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 lg:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">Get in Touch</h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">We're here to answer your questions and help you schedule your visit.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 lg:-mt-12 relative z-20 space-y-8 lg:space-y-12">
        <div className="bg-white p-6 lg:p-12 rounded-[2rem] lg:rounded-[3rem] shadow-xl border border-slate-100 space-y-8 lg:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-navy">Contact Information</h2>
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 text-primary rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={20} className="lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm lg:text-base">Our Location</h4>
                    <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">123 Wellness Way, Harbor City, HC 54321</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 text-primary rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={20} className="lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm lg:text-base">Phone Number</h4>
                    <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 text-primary rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={20} className="lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm lg:text-base">Email Address</h4>
                    <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">hello@harborwellness.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-navy">Opening Hours</h2>
              <div className="space-y-3 lg:space-y-4">
                {[
                  { day: 'Monday - Friday', hours: '8:00 AM - 7:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map(item => (
                  <div key={item.day} className="flex justify-between items-center p-3 lg:p-4 bg-slate-50 rounded-xl lg:rounded-2xl">
                    <span className="font-bold text-navy text-xs lg:text-sm">{item.day}</span>
                    <span className="text-slate-500 text-xs lg:text-sm">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 lg:p-6 bg-amber-50 rounded-xl lg:rounded-2xl border border-amber-100 flex gap-3 lg:gap-4">
                <Clock className="text-amber-500 shrink-0 lg:w-6 lg:h-6" size={20} />
                <p className="text-[10px] lg:text-xs text-amber-700 leading-relaxed">
                  <strong>Emergency Notice:</strong> If you are experiencing a medical emergency, please call 911 immediately or visit the nearest emergency room.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 lg:pt-12 border-t border-slate-100 space-y-6 lg:space-y-8">
            <div className="space-y-1 lg:space-y-2 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy">Send us a Message</h3>
              <p className="text-sm lg:text-base text-slate-500">Have a quick question? Fill out the form below.</p>
            </div>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1 lg:space-y-2">
                <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Your Name</label>
                <input type="text" className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary focus:outline-none transition-all font-medium shadow-sm text-sm lg:text-base" placeholder="Jane Doe" />
              </div>
              <div className="space-y-1 lg:space-y-2">
                <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                <input type="email" className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary focus:outline-none transition-all font-medium shadow-sm text-sm lg:text-base" placeholder="jane@example.com" />
              </div>
              <div className="space-y-1 lg:space-y-2 sm:col-span-2">
                <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Message</label>
                <textarea rows={4} className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary focus:outline-none transition-all font-medium shadow-sm resize-none text-sm lg:text-base" placeholder="How can we help you?" />
              </div>
              <div className="sm:col-span-2 pt-2 lg:pt-4">
                <button className="w-full bg-primary text-white py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-lg lg:text-xl hover:bg-primary/90 transition-all shadow-xl">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="pt-8 lg:pt-12 border-t border-slate-100 space-y-6 lg:space-y-8">
            <div className="space-y-1 lg:space-y-2 text-center">
              <h3 className="text-xl lg:text-2xl font-bold text-navy">Find Us</h3>
              <p className="text-xs lg:text-sm text-slate-500">Visit our clinic at 123 Wellness Way</p>
            </div>
            <div className="w-full h-[250px] lg:h-[400px] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden relative shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xs lg:text-base">
                [ Embedded Google Map Placeholder ]
              </div>
              <img
                src="https://picsum.photos/seed/map/1200/600"
                alt="Map Location"
                className="w-full h-full object-cover opacity-50 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
