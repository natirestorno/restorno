
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import ServicesSection from './components/ServicesSection';
import CommunitySection from './components/CommunitySection';
import QuoteForm from './components/QuoteForm';

type View = 'home' | 'quote';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gradient-to-br from-[#F5F5DC] to-[#faf8f0] text-[#36454F]">
      <Header onNavigate={navigateTo} />
      <main>
        {currentView === 'home' && (
          <>
            <HeroSection onGetQuoteClick={() => navigateTo('quote')} />
            <GallerySection />
            <ServicesSection />
            <CommunitySection />
          </>
        )}
        {currentView === 'quote' && (
           <QuoteForm />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
