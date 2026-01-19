import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { ConsultationPage } from './pages/ConsultationPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';
import { FranchisePage } from './pages/FranchisePage';

import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <FloatingActions />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service-details" element={<ServiceDetailsPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
