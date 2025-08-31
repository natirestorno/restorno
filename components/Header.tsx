
import React, { useState } from 'react';

interface HeaderProps {
    onNavigate: (view: 'home' | 'quote') => void;
}

const NavLink: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => (
    <li>
        <button onClick={onClick} className="text-white hover:text-[#B8860B] transition-colors duration-300 py-2 px-4 rounded-full hover:bg-white/10">
            {children}
        </button>
    </li>
);

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-[#8B4513] to-[#36454F] text-white shadow-lg sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <button onClick={() => onNavigate('home')} className="text-3xl font-black text-[#B8860B] tracking-wider" style={{ fontFamily: "'Heebo', sans-serif" }}>
                            רסטורנו
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <ul className="ms-10 flex items-baseline space-x-4">
                            <NavLink onClick={() => onNavigate('home')}>בית</NavLink>
                            <NavLink>שירותים</NavLink>
                            <NavLink>קהילה</NavLink>
                            <NavLink>מרקטפלייס</NavLink>
                            <NavLink>ידע</NavLink>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                         <a href="#" className="bg-[#25D366] py-2.5 px-6 rounded-full font-bold transition-transform hover:scale-105 shadow-md flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" /><path d="M12.293 7.293a1 1 0 011.414 0l2 2a1 1 0 01-1.414 1.414L11 9.414V15a1 1 0 11-2 0V9.414l-3.293 3.293a1 1 0 01-1.414-1.414l2-2a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            <span>וואטסאפ</span>
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                       <NavLink onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}>בית</NavLink>
                        <NavLink>שירותים</NavLink>
                        <NavLink>קהילה</NavLink>
                        <NavLink>מרקטפלייס</NavLink>
                        <NavLink>ידע</NavLink>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
