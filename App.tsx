import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import ServicesSection from './components/ServicesSection';
import CommunitySection from './components/CommunitySection';
import QuoteForm from './components/QuoteForm';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CommunityPage from './components/CommunityPage';
import KnowledgePage from './components/KnowledgePage';
import MarketplacePage from './components/MarketplacePage';

export type View = 'home' | 'quote' | 'login' | 'signup' | 'community' | 'knowledge' | 'marketplace' | 'services';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for auth token in localStorage on initial load
    const token = localStorage.getItem('userToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
    
    if (view === 'services') {
      setCurrentView('home');
      setTimeout(() => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogin = () => {
    // Simulate successful login
    localStorage.setItem('userToken', 'mock-token');
    setIsAuthenticated(true);
    navigateTo('home'); // Navigate to home after login
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsAuthenticated(false);
    navigateTo('home'); // Navigate to home after logout
  };

  const renderContent = () => {
    switch(currentView) {
      case 'home':
        return (
          <>
            <HeroSection onGetQuoteClick={() => navigateTo('quote')} />
            <GallerySection />
            <ServicesSection />
            <CommunitySection />
          </>
        );
      case 'quote':
        return <QuoteForm />;
      case 'login':
        return <Login onLogin={handleLogin} onNavigate={navigateTo} />;
      case 'signup':
        return <SignUp onSignUp={handleLogin} onNavigate={navigateTo} />; // onSignUp also logs in
      case 'community':
        return <CommunityPage />;
      case 'knowledge':
        return <KnowledgePage />;
      case 'marketplace':
        return <MarketplacePage />;
      default:
        return <HeroSection onGetQuoteClick={() => navigateTo('quote')} />;
    }
  }

  return (
    <div className="bg-gradient-to-br from-[#F5F5DC] to-[#faf8f0] text-[#36454F]">
      <Header 
        onNavigate={navigateTo} 
        isAuthenticated={isAuthenticated} 
        onLogout={handleLogout} 
      />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;