import React from 'react';

const CommunityPage: React.FC = () => {
    return (
        <div className="bg-white">
            <header className="bg-gradient-to-r from-[#faf8f0] to-[#F5F5DC] py-16 text-center">
                 <h1 className="text-5xl font-black text-[#8B4513]">קהילת רסטורנו</h1>
                 <p className="mt-4 text-xl text-[#556B2F]">מקום למפגש, שיתוף ולמידה</p>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
                {/* Forum Section */}
                <section>
                    <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-10">דיונים אחרונים בפורום</h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {['זיהוי עץ אלון בכיסא ישן', 'השיטה הטובה ביותר להסרת צבע ישן', 'שאלה לגבי ריפוד קטיפה', 'איפה מוצאים חלקים מקוריים?'].map(thread => (
                            <a href="#" key={thread} className="block bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-semibold text-lg text-[#36454F]">{thread}</h3>
                                <p className="text-sm text-gray-500">נכתב על ידי: אמן העץ • 3 תגובות</p>
                            </a>
                        ))}
                         <div className="text-center pt-4">
                            <button className="bg-transparent border-2 border-[#8B4513] text-[#8B4513] font-bold py-2 px-6 rounded-full hover:bg-[#8B4513] hover:text-white transition-all duration-300">
                                עבור לפורום
                            </button>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section>
                    <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-10">גלריית פרויקטים של חברים</h2>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1">
                                <img src={`https://picsum.photos/id/${200+i}/500/500`} alt={`פרויקט מספר ${i}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Events Section */}
                <section>
                    <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-10">אירועים וסדנאות קרובים</h2>
                     <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                         <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#B8860B]">
                             <p className="font-bold text-[#B8860B]">25 באוגוסט, 2024</p>
                             <h3 className="text-xl font-bold text-[#8B4513] mt-1">סדנת שחזור כסאות עתיקים</h3>
                             <p className="mt-2 text-gray-600">סדנה מעשית בה נלמד טכניקות לשיקום וריפוד מחדש.</p>
                         </div>
                          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#B8860B]">
                             <p className="font-bold text-[#B8860B]">12 בספטמבר, 2024</p>
                             <h3 className="text-xl font-bold text-[#8B4513] mt-1">מפגש קהילה: שוק עתיקות</h3>
                             <p className="mt-2 text-gray-600">מפגש חברים בשוק הפשפשים ביפו, סיור והרצאה.</p>
                         </div>
                     </div>
                </section>
            </div>
        </div>
    );
};

export default CommunityPage;
