import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, PRACTITIONERS } from '@/src/data';
import { CheckCircle2, ChevronRight, ChevronLeft, Calendar, User, Activity, Clock, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { format, addDays, startOfToday, isSameDay } from 'date-fns';

type Step = 'service' | 'practitioner' | 'datetime' | 'details' | 'confirmation';

export default function Booking() {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = React.useState<Step>('service');
  const [formData, setFormData] = React.useState({
    serviceId: location.state?.serviceId || '',
    practitionerId: location.state?.practitionerId || '',
    date: null as Date | null,
    time: '',
    patientName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const steps: Step[] = ['service', 'practitioner', 'datetime', 'details', 'confirmation'];
  const currentStepIndex = steps.indexOf(step);

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setStep(steps[currentStepIndex + 1]);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setStep(steps[currentStepIndex - 1]);
    }
  };

  const selectedService = SERVICES.find(s => s.id === formData.serviceId);
  const selectedPractitioner = PRACTITIONERS.find(p => p.id === formData.practitionerId);

  const availableTimes = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Indicator */}
        {step !== 'confirmation' && (
          <div className="mb-8 lg:mb-12">
            <div className="flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
              {steps.slice(0, 4).map((s, i) => {
                const isActive = steps.indexOf(s) <= currentStepIndex;
                const isCurrent = s === step;
                return (
                  <div key={s} className="relative z-10 flex flex-col items-center gap-2">
                    <div
                      className={cn(
                        "w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 text-xs lg:text-sm",
                        isActive ? "bg-primary text-white scale-110 shadow-lg" : "bg-white text-slate-400 border-2 border-slate-200"
                      )}
                    >
                      {isActive && steps.indexOf(s) < currentStepIndex ? <CheckCircle2 size={16} className="lg:w-5 lg:h-5" /> : i + 1}
                    </div>
                    <span className={cn(
                      "text-[8px] lg:text-[10px] font-bold uppercase tracking-widest hidden sm:block",
                      isActive ? "text-primary" : "text-slate-400"
                    )}>
                      {s}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="bg-white rounded-[1.5rem] lg:rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {step === 'service' && (
              <motion.div
                key="service"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 lg:p-12 space-y-6 lg:space-y-8"
              >
                <div className="space-y-1 lg:space-y-2">
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy">Select a Service</h2>
                  <p className="text-sm lg:text-base text-slate-500">What can we help you with today?</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setFormData({ ...formData, serviceId: service.id });
                        handleNext();
                      }}
                      className={cn(
                        "p-6 lg:p-8 rounded-2xl lg:rounded-3xl border-2 text-left transition-all group",
                        formData.serviceId === service.id
                          ? "border-primary bg-primary/5 shadow-inner"
                          : "border-slate-100 hover:border-primary/50 hover:bg-slate-50"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 transition-colors",
                        formData.serviceId === service.id ? "bg-primary text-white" : "bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary"
                      )}>
                        <Activity size={20} className="lg:w-6 lg:h-6" />
                      </div>
                      <h3 className="font-bold text-navy mb-1 lg:mb-2 text-sm lg:text-base">{service.title}</h3>
                      <p className="text-[10px] lg:text-xs text-slate-500 leading-relaxed">{service.description}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Practitioner Selection */}
            {step === 'practitioner' && (
              <motion.div
                key="practitioner"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 lg:p-12 space-y-6 lg:space-y-8"
              >
                <div className="flex justify-between items-end">
                  <div className="space-y-1 lg:space-y-2">
                    <h2 className="text-2xl lg:text-3xl font-bold text-navy">Choose a Specialist</h2>
                    <p className="text-sm lg:text-base text-slate-500">Select your preferred healthcare provider.</p>
                  </div>
                  <button onClick={handleBack} className="text-xs lg:text-sm font-bold text-slate-400 hover:text-primary flex items-center gap-1">
                    <ChevronLeft size={14} className="lg:w-4 lg:h-4" /> Back
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {PRACTITIONERS.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setFormData({ ...formData, practitionerId: doc.id });
                        handleNext();
                      }}
                      className={cn(
                        "flex items-center gap-4 lg:gap-6 p-4 lg:p-6 rounded-2xl lg:rounded-3xl border-2 text-left transition-all group",
                        formData.practitionerId === doc.id
                          ? "border-primary bg-primary/5"
                          : "border-slate-100 hover:border-primary/50 hover:bg-slate-50"
                      )}
                    >
                      <img src={doc.photo} alt={doc.name} className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <h3 className="font-bold text-navy text-sm lg:text-base">{doc.name}</h3>
                        <p className="text-[10px] lg:text-xs text-primary font-bold uppercase tracking-widest mb-1 lg:mb-2">{doc.credentials}</p>
                        <div className="flex flex-wrap gap-1">
                          {doc.specializations.slice(0, 2).map(s => (
                            <span key={s} className="text-[8px] lg:text-[9px] bg-slate-100 text-slate-500 px-1.5 lg:px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">{s}</span>
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Date & Time Selection */}
            {step === 'datetime' && (
              <motion.div
                key="datetime"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 lg:p-12 space-y-6 lg:space-y-8"
              >
                <div className="flex justify-between items-end">
                  <div className="space-y-1 lg:space-y-2">
                    <h2 className="text-2xl lg:text-3xl font-bold text-navy">Pick a Time</h2>
                    <p className="text-sm lg:text-base text-slate-500">When would you like to visit us?</p>
                  </div>
                  <button onClick={handleBack} className="text-xs lg:text-sm font-bold text-slate-400 hover:text-primary flex items-center gap-1">
                    <ChevronLeft size={14} className="lg:w-4 lg:h-4" /> Back
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-4 lg:space-y-6">
                    <h4 className="font-bold text-navy flex items-center gap-2 text-sm lg:text-base"><Calendar size={16} className="text-primary lg:w-[18px] lg:h-[18px]" /> Select Date</h4>
                    <div className="grid grid-cols-4 gap-2 lg:gap-3">
                      {Array.from({ length: 12 }).map((_, i) => {
                        const date = addDays(startOfToday(), i + 1);
                        const isSelected = formData.date && isSameDay(date, formData.date);
                        return (
                          <button
                            key={i}
                            onClick={() => setFormData({ ...formData, date })}
                            className={cn(
                              "flex flex-col items-center justify-center p-2 lg:p-4 rounded-xl lg:rounded-2xl border-2 transition-all",
                              isSelected ? "border-primary bg-primary text-white shadow-lg" : "border-slate-100 hover:border-primary/30 hover:bg-slate-50"
                            )}
                          >
                            <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest opacity-60">{format(date, 'EEE')}</span>
                            <span className="text-base lg:text-xl font-black">{format(date, 'd')}</span>
                            <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest opacity-60">{format(date, 'MMM')}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-4 lg:space-y-6">
                    <h4 className="font-bold text-navy flex items-center gap-2 text-sm lg:text-base"><Clock size={16} className="text-primary lg:w-[18px] lg:h-[18px]" /> Select Time</h4>
                    <div className="grid grid-cols-2 gap-2 lg:gap-3">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          onClick={() => setFormData({ ...formData, time })}
                          className={cn(
                            "p-3 lg:p-4 rounded-xl lg:rounded-2xl border-2 font-bold text-xs lg:text-sm transition-all",
                            formData.time === time ? "border-primary bg-primary text-white shadow-lg" : "border-slate-100 hover:border-primary/30 hover:bg-slate-50"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  disabled={!formData.date || !formData.time}
                  onClick={handleNext}
                  className="w-full bg-primary text-white py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-lg lg:text-xl hover:bg-primary/90 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-4 lg:mt-8"
                >
                  Continue to Details
                </button>
              </motion.div>
            )}

            {/* Step 4: Patient Details */}
            {step === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 lg:p-12 space-y-6 lg:space-y-8"
              >
                <div className="flex justify-between items-end">
                  <div className="space-y-1 lg:space-y-2">
                    <h2 className="text-2xl lg:text-3xl font-bold text-navy">Your Information</h2>
                    <p className="text-sm lg:text-base text-slate-500">Please provide your contact details.</p>
                  </div>
                  <button onClick={handleBack} className="text-xs lg:text-sm font-bold text-slate-400 hover:text-primary flex items-center gap-1">
                    <ChevronLeft size={14} className="lg:w-4 lg:h-4" /> Back
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                  <div className="space-y-1 lg:space-y-2">
                    <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 lg:w-[18px] lg:h-[18px]" size={16} />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        className="w-full pl-10 lg:pl-12 pr-4 lg:pr-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl border-2 border-slate-100 focus:border-primary focus:outline-none transition-all font-medium text-sm lg:text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-1 lg:space-y-2">
                    <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 lg:w-[18px] lg:h-[18px]" size={16} />
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 lg:pl-12 pr-4 lg:pr-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl border-2 border-slate-100 focus:border-primary focus:outline-none transition-all font-medium text-sm lg:text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-1 lg:space-y-2">
                    <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 lg:w-[18px] lg:h-[18px]" size={16} />
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 lg:pl-12 pr-4 lg:pr-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl border-2 border-slate-100 focus:border-primary focus:outline-none transition-all font-medium text-sm lg:text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-1 lg:space-y-2">
                    <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Additional Notes (Optional)</label>
                    <textarea
                      placeholder="Any specific concerns..."
                      rows={1}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl border-2 border-slate-100 focus:border-primary focus:outline-none transition-all font-medium resize-none text-sm lg:text-base"
                    />
                  </div>
                </div>

                <div className="bg-slate-50 p-6 lg:p-8 rounded-2xl lg:rounded-3xl space-y-3 lg:space-y-4">
                  <h4 className="font-bold text-navy text-sm lg:text-base">Summary</h4>
                  <div className="grid grid-cols-2 gap-3 lg:gap-4 text-xs lg:text-sm">
                    <div>
                      <p className="text-slate-400 uppercase text-[8px] lg:text-[10px] font-bold tracking-widest">Service</p>
                      <p className="font-bold text-navy">{selectedService?.title}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 uppercase text-[8px] lg:text-[10px] font-bold tracking-widest">Practitioner</p>
                      <p className="font-bold text-navy">{selectedPractitioner?.name}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 uppercase text-[8px] lg:text-[10px] font-bold tracking-widest">Date</p>
                      <p className="font-bold text-navy">{formData.date ? format(formData.date, 'MMM d, yyyy') : 'Not selected'}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 uppercase text-[8px] lg:text-[10px] font-bold tracking-widest">Time</p>
                      <p className="font-bold text-navy">{formData.time}</p>
                    </div>
                  </div>
                </div>

                <button
                  disabled={!formData.patientName || !formData.email || !formData.phone}
                  onClick={handleNext}
                  className="w-full bg-primary text-white py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-lg lg:text-xl hover:bg-primary/90 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Appointment
                </button>
              </motion.div>
            )}

            {/* Step 5: Confirmation */}
            {step === 'confirmation' && (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 lg:p-20 text-center space-y-6 lg:space-y-8"
              >
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-8">
                  <CheckCircle2 size={40} className="lg:w-16 lg:h-16" />
                </div>
                <div className="space-y-2 lg:space-y-4">
                  <h2 className="text-2xl lg:text-4xl font-bold text-navy">Appointment Confirmed!</h2>
                  <p className="text-sm lg:text-lg text-slate-500 max-w-md mx-auto">Thank you, {formData.patientName}. Your appointment for {selectedService?.title} with {selectedPractitioner?.name} has been scheduled.</p>
                </div>

                <div className="bg-slate-50 p-6 lg:p-10 rounded-2xl lg:rounded-[2.5rem] max-w-md mx-auto space-y-4 lg:space-y-6 text-left border border-slate-100">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-lg lg:rounded-xl flex items-center justify-center text-primary shadow-sm">
                      <Calendar size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] lg:text-xs text-slate-400 font-bold uppercase tracking-widest">Date & Time</p>
                      <p className="font-bold text-navy text-sm lg:text-base">{formData.date && format(formData.date, 'MMMM d, yyyy')} at {formData.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-lg lg:rounded-xl flex items-center justify-center text-primary shadow-sm">
                      <MapPin size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] lg:text-xs text-slate-400 font-bold uppercase tracking-widest">Location</p>
                      <p className="font-bold text-navy text-sm lg:text-base">123 Wellness Way, Harbor City</p>
                    </div>
                  </div>
                  <div className="pt-4 lg:pt-6 border-t border-slate-200 flex items-center gap-2 lg:gap-3 text-xs lg:text-sm text-slate-500">
                    <ShieldCheck className="text-secondary lg:w-5 lg:h-5" size={16} />
                    <span>A confirmation email has been sent to {formData.email}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center pt-4 lg:pt-8">
                  <button
                    onClick={() => navigate('/')}
                    className="bg-navy text-white px-8 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold hover:bg-navy/90 transition-all text-sm lg:text-base"
                  >
                    Return Home
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="bg-white text-navy border-2 border-slate-100 px-8 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold hover:bg-slate-50 transition-all text-sm lg:text-base"
                  >
                    Print Details
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trust Badges */}
        {step !== 'confirmation' && (
          <div className="mt-8 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            <div className="flex items-center gap-3 lg:gap-4 p-4 lg:p-6 glass rounded-xl lg:rounded-2xl">
              <ShieldCheck className="text-primary lg:w-8 lg:h-8" size={24} />
              <div>
                <p className="font-bold text-navy text-xs lg:text-sm">Secure Booking</p>
                <p className="text-[10px] lg:text-xs text-slate-500">Your data is fully encrypted.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:gap-4 p-4 lg:p-6 glass rounded-xl lg:rounded-2xl">
              <Clock className="text-primary lg:w-8 lg:h-8" size={24} />
              <div>
                <p className="font-bold text-navy text-xs lg:text-sm">Instant Confirmation</p>
                <p className="text-[10px] lg:text-xs text-slate-500">No waiting for a callback.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:gap-4 p-4 lg:p-6 glass rounded-xl lg:rounded-2xl">
              <CheckCircle2 className="text-primary lg:w-8 lg:h-8" size={24} />
              <div>
                <p className="font-bold text-navy text-xs lg:text-sm">Expert Care</p>
                <p className="text-[10px] lg:text-xs text-slate-500">Board-certified specialists.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
