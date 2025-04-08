import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Products } from './components/Products';
import { Vision2030 } from './components/Vision2030';
import { AboutUs } from './components/AboutUs';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { Careers } from './components/Careers';
import { Login } from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { HelpCenter } from './components/HelpCenter';
import { APIReference } from './components/APIReference.tsx';
import { LanguageProvider } from './contexts/LanguageContext';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainContent() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Vision2030 />
      <AboutUs />
      <CTA />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Helmet>
          <title>Aidra - AI Innovation for Business</title>
          <meta name="description" content="Transform your business through AI innovation with Aidra's comprehensive solutions." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https:; img-src 'self' https: data:; font-src 'self' https:; connect-src 'self' https:;" />
          <link rel="preconnect" href="https://images.unsplash.com" />
        </Helmet>
        <div className="min-h-screen bg-white">
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white -z-10" />
          <Navigation />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/careers" element={<Careers />} />
            <Route 
              path="/help/*" 
              element={
                <ProtectedRoute>
                  <HelpCenter />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/api/*" 
              element={
                <ProtectedRoute>
                  <APIReference />
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;