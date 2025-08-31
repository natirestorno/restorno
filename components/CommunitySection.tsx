
import React from 'react';

const CommunitySection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-[#8B4513] mb-4">הצטרף לקהילת חובבי העתיקות</h2>
                        <p className="text-lg text-[#556B2F] mb-6">
                            קהילה של יותר מ-2,000 חובבי עתיקות, אומנים וקולקציונרים שחולקים ידע, חוויות והשראה בתחום שימור ושחזור רהיטים.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['✨ פורום מקצועי לדיונים ושאלות', '✨ גלריית פרויקטים ומקרי בוחן', '✨ מנטורינג ממומחים מנוסים', '✨ סדנאות ואירועים מיוחדים'].map(item => (
                                <li key={item} className="flex items-center text-gray-700">
                                    <span className="text-xl me-3">{item.split(' ')[0]}</span>
                                    <span>{item.split(' ').slice(1).join(' ')}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg inline-block">
                            הצטרף חינם עכשיו
                        </a>
                    </div>
                    <div className="hidden lg:block">
                        <img src="https://picsum.photos/id/431/600/400" alt="Community gathering" className="rounded-xl shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
