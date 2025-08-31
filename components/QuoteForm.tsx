
import React, { useState } from 'react';
import { generateQuote } from '../services/geminiService';
import type { AIQuoteResponse } from '../types';
import Spinner from './Spinner';
import QuoteResult from './QuoteResult';

// Helper to convert file to base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = (error) => reject(error);
  });
};

const QuoteForm: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [promptText, setPromptText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<AIQuoteResponse | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file));
            setResult(null);
            setError(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!image) {
            setError('אנא העלה תמונה של הרהיט.');
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const imageBase64 = await fileToBase64(image);
            const generatedResult = await generateQuote(imageBase64, image.type, promptText);
            setResult(generatedResult);
        } catch (err) {
            console.error(err);
            setError('אירעה שגיאה בעת הפקת הצעת המחיר. אנא נסה שוב מאוחר יותר.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-[#B8860B]">הערכה חכמה</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-[#8B4513] sm:text-4xl">
                        קבל הצעת מחיר ושמאות לשחזור בעזרת AI
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        העלה תמונה של הרהיט, הוסף תיאור קצר, והמערכת החכמה שלנו תנתח את המצב, תמליץ על טיפולים, ותספק הערכת עלויות ושווי שוק.
                    </p>
                </div>
                
                <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="furniture-photo" className="block text-sm font-semibold leading-6 text-gray-900">
                                העלה תמונה
                            </label>
                            <div className="mt-2.5">
                                <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        {preview ? (
                                            <img src={preview} alt="Preview" className="mx-auto h-48 w-auto rounded-md object-contain" />
                                        ) : (
                                            <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-[#B8860B] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#B8860B] focus-within:ring-offset-2 hover:text-[#DAA520]">
                                                <span>{image ? "החלף תמונה" : "בחר קובץ"}</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
                                            </label>
                                            <p className="ps-1">או גרור ושחרר</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF עד 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">תיאור ודרישות (אופציונלי)</label>
                            <div className="mt-2.5">
                                <textarea
                                    name="description"
                                    id="description"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B8860B] sm:text-sm sm:leading-6"
                                    placeholder="לדוגמה: 'אני רוצה לשחזר את העץ ולהחליף את הריפוד בבד קטיפה ירוק'."
                                    value={promptText}
                                    onChange={(e) => setPromptText(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button type="submit" disabled={loading} className="block w-full rounded-md bg-gradient-to-r from-[#B8860B] to-[#DAA520] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:from-[#DAA520] hover:to-[#B8860B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8860B] disabled:opacity-50 disabled:cursor-not-allowed">
                                {loading ? 'מעבד...' : 'הפק הצעת מחיר'}
                            </button>
                        </div>
                    </form>

                    {loading && (
                        <div className="mt-8 text-center">
                            <Spinner />
                            <p className="mt-4 text-gray-600 animate-pulse">המערכת מנתחת את התמונה... זה עשוי לקחת רגע.</p>
                        </div>
                    )}
                    {error && <div className="mt-8 text-center text-red-600 bg-red-100 p-4 rounded-md">{error}</div>}
                    {result && <QuoteResult data={result} />}
                </div>
            </div>
        </div>
    );
};

export default QuoteForm;
