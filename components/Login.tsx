import React, { useState } from 'react';
import type { View } from '../App';

interface LoginProps {
    onLogin: () => void;
    onNavigate: (view: Extract<View, 'signup' | 'home'>) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onNavigate }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd validate credentials here
        console.log('Logging in with:', email, password);
        onLogin();
    };

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-md px-6 lg:px-8">
                <div className="mx-auto lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#8B4513] sm:text-4xl">
                        התחברות
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        שמחים לראות אותך שוב!
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">כתובת אימייל</label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B8860B] sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">סיסמה</label>
                        <div className="mt-2.5">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B8860B] sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="block w-full rounded-md bg-gradient-to-r from-[#B8860B] to-[#DAA520] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:from-[#DAA520] hover:to-[#B8860B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8860B]">
                            התחבר
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    אין לך חשבון?{' '}
                    <button onClick={() => onNavigate('signup')} className="font-semibold leading-6 text-[#B8860B] hover:text-[#DAA520]">
                        הרשם עכשיו
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
