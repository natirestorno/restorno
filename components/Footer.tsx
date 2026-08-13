import React from 'react';
import type { View } from '../App';

type FooterLink = { label: string; view?: View; href?: string };

const FooterSection: React.FC<{ title: string; links: FooterLink[]; onNavigate: (view: View) => void }> = ({ title, links, onNavigate }) => (
    <div>
        <h3 className="text-lg font-bold text-[#DAA520] mb-4">{title}</h3>
        <ul className="space-y-2">
            {links.map(({ label, view, href }) => <li key={label}>
                {href ? <a href={href} className="text-gray-200 hover:text-white transition-colors">{label}</a> :
                    <button onClick={() => view && onNavigate(view)} className="text-gray-200 hover:text-white transition-colors text-right">{label}</button>}
            </li>)}
        </ul>
    </div>
);

const Footer: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
    const sections: { title: string; links: FooterLink[] }[] = [
        { title: 'שירותים', links: [{ label: 'שחזור רהיטים', view: 'services' }, { label: 'הערכת עתיקות', view: 'quote' }, { label: 'איסוף והובלה', view: 'services' }] },
        { title: 'קהילה', links: [{ label: 'פורום דיונים', view: 'community' }, { label: 'בית הספר הדיגיטלי', view: 'knowledge' }, { label: 'אירועים וסדנאות', view: 'community' }] },
        { title: 'מרקטפלייס', links: [{ label: 'קנייה ומכירה', view: 'marketplace' }, { label: 'מכירות פומביות', view: 'marketplace' }, { label: 'חומרים וכלים', view: 'marketplace' }] },
        { title: 'צור קשר', links: [{ label: '📞 03-1234567', href: 'tel:031234567' }, { label: '📧 info@restorno.co.il', href: 'mailto:info@restorno.co.il' }, { label: '💬 ווטסאפ', href: 'https://wa.me/97231234567' }] },
    ];
    return <footer className="bg-gradient-to-r from-[#36454F] to-[#8B4513] text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">{sections.map(section => <FooterSection key={section.title} {...section} onNavigate={onNavigate} />)}</div>
            <div className="mt-8 border-t border-white/20 pt-8 text-center"><p className="text-base text-gray-300">&copy; {new Date().getFullYear()} רסטורנו - בית לחובבי עתיקות | כל הזכויות שמורות</p></div>
        </div>
    </footer>;
};
export default Footer;
