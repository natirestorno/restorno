
import React from 'react';

interface HeroSectionProps {
    onGetQuoteClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetQuoteClick }) => {
    return (
        <section className="py-20 md:py-32 text-center relative overflow-hidden bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5DC]/90 to-[#faf8f0]/90"></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl md:text-7xl font-black text-[#8B4513] leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                    בית לחובבי עתיקות
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-[#556B2F] font-light">
                    שימור • ידע • קהילה • חדשנות בתחום שחזור רהיטים
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <button 
                        onClick={onGetQuoteClick}
                        className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
                    >
                        🛠️ קבל הצעת מחיר מבוססת AI
                    </button>
                    <button className="bg-transparent border-2 border-[#8B4513] text-[#8B4513] font-bold py-4 px-8 rounded-full hover:bg-[#8B4513] hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-lg">
                        👥 הצטרף לקהילה
                    </button>
                </div>
                <div className="mt-12 text-sm text-[#556B2F]">
                    ⭐ דירוג 4.9 • 500+ פרויקטים הושלמו • קהילה של 2,000+ חובבי עתיקות
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
