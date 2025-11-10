import React, { useState } from 'react';
import type { View } from '../App';

interface SignUpProps {
    onSignUp: () => void;
    onNavigate: (view: Extract<View, 'login' | 'home'>) => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUp, onNavigate }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd register the user here
        console.log('Signing up with:', name, email, password);
        onSignUp();
    };

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-md px-6 lg:px-8">
                <div className="mx-auto lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#8B4513] sm:text-4xl">
                        הרשמה
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        הצטרף לקהילה שלנו וקבל גישה לכל הכלים.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                     <div>
                        <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">שם מלא</label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B8860B] sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
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
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B8860B] sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="block w-full rounded-md bg-gradient-to-r from-[#B8860B] to-[#DAA520] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:from-[#DAA520] hover:to-[#B8860B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8860B]">
                            הרשמה
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    כבר יש לך חשבון?{' '}
                    <button onClick={() => onNavigate('login')} className="font-semibold leading-6 text-[#B8860B] hover:text-[#DAA520]">
                        התחבר
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
