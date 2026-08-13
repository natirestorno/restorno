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
  const getViewFromHash = (): View => {
    const candidate = window.location.hash.replace('#/', '') as View;
    return ['home', 'quote', 'login', 'signup', 'community', 'knowledge', 'marketplace', 'services'].includes(candidate) ? candidate : 'home';
  };
  const [currentView, setCurrentView] = useState<View>(getViewFromHash);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for auth token in localStorage on initial load
    const token = localStorage.getItem('userToken');
    if (token) setIsAuthenticated(true);
    const handleHashChange = () => setCurrentView(getViewFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: View) => {
    if (view === 'services') {
      window.location.hash = '/home';
      setCurrentView('home');
      setTimeout(() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
      return;
    }
    window.location.hash = `/${view}`;
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <HeroSection onGetQuoteClick={() => navigateTo('quote')} onCommunityClick={() => navigateTo('community')} />
            <GallerySection />
            <ServicesSection />
            <CommunitySection onJoin={() => navigateTo(isAuthenticated ? 'community' : 'signup')} />
          </>
        );
      case 'quote':
        return <QuoteForm />;
      case 'login':
        return <Login onLogin={handleLogin} onNavigate={navigateTo} />;
      case 'signup':
        return <SignUp onSignUp={handleLogin} onNavigate={navigateTo} />; // onSignUp also logs in
      case 'community':
        return <CommunityPage onJoin={() => navigateTo(isAuthenticated ? 'community' : 'signup')} />;
      case 'knowledge':
        return <KnowledgePage />;
      case 'marketplace':
        return <MarketplacePage />;
      default:
        return <HeroSection onGetQuoteClick={() => navigateTo('quote')} onCommunityClick={() => navigateTo('community')} />;
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
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;