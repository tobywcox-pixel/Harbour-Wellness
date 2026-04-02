import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { Services, ServiceDetail } from './pages/Services';
import { Practitioners, PractitionerDetail } from './pages/Practitioners';
import Booking from './pages/Booking';
import { FAQPage, InsurancePage, ContactPage } from './pages/InfoPages';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/practitioners" element={<Practitioners />} />
          <Route path="/practitioners/:id" element={<PractitionerDetail />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
