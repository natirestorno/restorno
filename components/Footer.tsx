
import React from 'react';

const FooterSection: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-bold text-[#B8860B] mb-4">{title}</h3>
        <ul className="space-y-2">
            {links.map((link) => (
                <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">{link}</a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-[#36454F] to-[#8B4513] text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <FooterSection title="שירותים" links={['שחזור רהיטים', 'ריפוד מקצועי', 'הערכת עתיקות', 'איסוף והובלה']} />
                    <FooterSection title="קהילה" links={['פורום דיונים', 'בית הספר הדיגיטלי', 'גלריית פרויקטים', 'אירועים וסדנאות']} />
                    <FooterSection title="מרקטפלייס" links={['קנייה ומכירה', 'מכירות פומביות', 'הערכות שווי', 'חומרים וכלים']} />
                    <FooterSection title="צור קשר" links={['📞 03-1234567', '📧 info@restaurno.co.il', '📍 פתח תקווה, ישראל', '💬 ווטסאפ']} />
                </div>
                <div className="mt-8 border-t border-white/20 pt-8 text-center">
                    <p className="text-base text-gray-400">&copy; 2024 רסטורנו - בית לחובבי עתיקות | כל הזכויות שמורות</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
