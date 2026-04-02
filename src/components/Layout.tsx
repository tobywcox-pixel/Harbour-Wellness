import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Calendar, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Practitioners', path: '/practitioners' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-navy text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> (555) 123-4567</span>
            <span className="flex items-center gap-2"><Mail size={14} /> hello@harborwellness.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> 123 Wellness Way, Harbor City
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-lg lg:rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Heart fill="currentColor" size={18} className="lg:w-6 lg:h-6" />
                </div>
                <span className="text-lg lg:text-xl font-bold text-navy tracking-tight">Harbor Wellness</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === link.path ? "text-primary" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-primary p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-12 lg:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Heart className="text-primary lg:w-6 lg:h-6" fill="currentColor" size={20} />
              <span className="text-lg lg:text-xl font-bold">Harbor Wellness</span>
            </div>
            <p className="text-xs lg:text-sm leading-relaxed max-w-xs">
              Providing compassionate, professional, and patient-centered healthcare to our community. Your well-being is our lifelong commitment.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 lg:mb-6 text-sm lg:text-base">Quick Links</h4>
            <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/insurance" className="hover:text-primary transition-colors">Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 lg:mb-6 text-sm lg:text-base">Our Services</h4>
            <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm">
              <li><Link to="/services/physiotherapy" className="hover:text-primary transition-colors">Physiotherapy</Link></li>
              <li><Link to="/services/mental-health" className="hover:text-primary transition-colors">Mental Health</Link></li>
              <li><Link to="/services/chiropractic" className="hover:text-primary transition-colors">Chiropractic Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 lg:mb-6 text-sm lg:text-base">Contact Us</h4>
            <ul className="space-y-3 lg:space-y-4 text-xs lg:text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0 lg:w-[18px] lg:h-[18px]" />
                <span>123 Wellness Way, Harbor City, HC 54321</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0 lg:w-[18px] lg:h-[18px]" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0 lg:w-[18px] lg:h-[18px]" />
                <span>hello@harborwellness.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] lg:text-xs text-center md:text-left">
          <p>© 2026 Harbor Wellness Clinic. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
