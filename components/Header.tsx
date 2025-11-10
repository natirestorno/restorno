import React, { useState } from 'react';
import type { View } from '../App';

interface HeaderProps {
    onNavigate: (view: View) => void;
    isAuthenticated: boolean;
    onLogout: () => void;
}

const NavLink: React.FC<{ children: React.ReactNode; onClick?: () => void, isButton?: boolean }> = ({ children, onClick, isButton = false }) => {
    if (isButton) {
        return (
             <button onClick={onClick} className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white font-bold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-px">
                {children}
            </button>
        )
    }
    return (
        <li>
            <button onClick={onClick} className="text-white hover:text-[#B8860B] transition-colors duration-300 py-2 px-4 rounded-full hover:bg-white/10">
                {children}
            </button>
        </li>
    );
};


const Header: React.FC<HeaderProps> = ({ onNavigate, isAuthenticated, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        onLogout();
        setIsMenuOpen(false);
    }

    const handleNavigate = (view: View) => {
        onNavigate(view);
        setIsMenuOpen(false);
    }

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
                            <NavLink onClick={() => onNavigate('services')}>שירותים</NavLink>
                            <NavLink onClick={() => onNavigate('community')}>קהילה</NavLink>
                            <NavLink onClick={() => onNavigate('marketplace')}>מרקטפלייס</NavLink>
                            <NavLink onClick={() => onNavigate('knowledge')}>ידע</NavLink>
                        </ul>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                         {isAuthenticated ? (
                            <NavLink onClick={onLogout} isButton={true}>התנתק</NavLink>
                         ) : (
                            <>
                                <NavLink onClick={() => onNavigate('login')}>התחברות</NavLink>
                                <NavLink onClick={() => onNavigate('signup')} isButton={true}>הרשמה</NavLink>
                            </>
                         )}
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
                       <NavLink onClick={() => handleNavigate('home')}>בית</NavLink>
                        <NavLink onClick={() => handleNavigate('services')}>שירותים</NavLink>
                        <NavLink onClick={() => handleNavigate('community')}>קהילה</NavLink>
                        <NavLink onClick={() => handleNavigate('marketplace')}>מרקטפלייס</NavLink>
                        <NavLink onClick={() => handleNavigate('knowledge')}>ידע</NavLink>
                         <div className="border-t border-white/20 my-2"></div>
                         {isAuthenticated ? (
                            <NavLink onClick={handleLogout}>התנתק</NavLink>
                         ) : (
                            <>
                                <NavLink onClick={() => handleNavigate('login')}>התחברות</NavLink>
                                <NavLink onClick={() => handleNavigate('signup')}>הרשמה</NavLink>
                            </>
                         )}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;