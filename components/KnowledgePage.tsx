import React from 'react';

interface ArticleCardProps {
    icon: string;
    title: string;
    description: string;
    category: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ icon, title, description, category }) => (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center mb-4">
             <span className="text-4xl me-4">{icon}</span>
             <div>
                <span className="text-xs font-semibold bg-yellow-100 text-[#B8860B] py-1 px-2 rounded-full">{category}</span>
                <h3 className="text-lg font-bold text-[#8B4513] mt-1">{title}</h3>
             </div>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <a href="#" className="text-sm font-bold text-[#B8860B] hover:underline mt-4 inline-block">קרא עוד ←</a>
    </div>
);


const KnowledgePage: React.FC = () => {
    return (
         <div className="bg-gradient-to-br from-[#F5F5DC] to-[#faf8f0] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-5xl font-black text-[#8B4513]">מרכז הידע</h1>
                    <p className="mt-4 text-xl text-[#556B2F]">כל המידע, המדריכים והכלים להפוך למקצוען</p>
                    <div className="mt-8">
                        <input 
                            type="search"
                            placeholder="חפש מאמר, מדריך או טכניקה..."
                            className="w-full max-w-lg p-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B]"
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-12">מאמרים נבחרים</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ArticleCard 
                            icon="🪵"
                            title="מדריך: זיהוי סוגי עץ נפוצים"
                            description="למד לזהות עץ אלון, אגוז, מהגוני ועוד על פי המרקם, הצבע והמשקל."
                            category="עבודה עם עץ"
                        />
                         <ArticleCard 
                            icon="🎨"
                            title="טכניקות לגימור מושלם"
                            description="סקירה של סוגי גימור שונים: לכה, שמן, ווקס ופוליטורה."
                            category="טכניקות שימור"
                        />
                         <ArticleCard 
                            icon="🛋️"
                            title="הכל על ריפוד קלאסי"
                            description="מהם הכלים הדרושים וכיצד לבחור את הבד המתאים לפרויקט הריפוד שלך."
                            category="ריפוד"
                        />
                        <ArticleCard 
                            icon="🔍"
                            title="זיהוי סגנונות: מתקופת הבארוק ועד ארט דקו"
                            description="מדריך ויזואלי להבנת ההבדלים בין סגנונות ריהוט לאורך ההיסטוריה."
                            category="היסטוריה"
                        />
                        <ArticleCard 
                            icon="✨"
                            title="שימור פטינה: מתי כדאי ומתי לא"
                            description="המדריך המלא לשמירה על האופי והערך ההיסטורי של הרהיט שלך."
                            category="טכניקות שימור"
                        />
                        <ArticleCard 
                            icon="💡"
                            title="טיפים לתחזוקה שוטפת של עתיקות"
                            description="כיצד לשמור על הרהיטים העתיקים שלך במצב הטוב ביותר לאורך שנים."
                            category="תחזוקה"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KnowledgePage;
