import React from 'react';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#8B4513] mb-2">{title}</h3>
        <p className="text-[#556B2F]">{description}</p>
    </div>
);

const ServicesSection: React.FC = () => {
    return (
        <section id="services-section" className="py-20 bg-gradient-to-br from-[#F5F5DC] to-[#faf8f0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-[#8B4513] mb-12">השירותים שלנו</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard 
                        icon="🛠️" 
                        title="שחזור ושיקום רהיטים" 
                        description="שחזור מקצועי עם שמירה על האותנטיות וההיסטוריה של הרהיט." 
                    />
                    <ServiceCard 
                        icon="🏺" 
                        title="מרקטפלייס עתיקות" 
                        description="פלטפורמה למכירה וקנייה של עתיקות עם הערכת שווי ומכירות פומביות." 
                    />
                    <ServiceCard 
                        icon="👥" 
                        title="קהילת חובבי עתיקות" 
                        description="פורום מקצועי לאומנים וקולקציונרים לשיתוף ידע וחוויות." 
                    />
                    <ServiceCard 
                        icon="📚" 
                        title="בית הספר הדיגיטלי" 
                        description="קורסים וסדנאות ללימוד טכניקות שחזור ושימור רהיטים." 
                    />
                    <ServiceCard 
                        icon="🔍" 
                        title="זיהוי והערכה" 
                        description="שירותי זיהוי והערכה מקצועיים של רהיטים ופריטי קולקציה." 
                    />
                    <ServiceCard 
                        icon="🚚" 
                        title="איסוף והובלה" 
                        description="שירות איסוף והובלה מאובטח עם ביטוח מלא לכל סוגי הרהיטים." 
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;