import React, { useState } from 'react';

const articles = [
 { icon:'🪵', title:'מדריך: זיהוי סוגי עץ נפוצים', description:'למד לזהות עץ אלון, אגוז, מהגוני ועוד על פי המרקם, הצבע והמשקל.', category:'עבודה עם עץ', details:'בדקו את כיוון הסיבים, המשקל והנקבוביות באור טבעי. התחילו תמיד באזור נסתר ואל תסתמכו על צבע הגימור בלבד.' },
 { icon:'🎨', title:'טכניקות לגימור מושלם', description:'סקירה של סוגי גימור שונים: לכה, שמן, ווקס ופוליטורה.', category:'טכניקות שימור', details:'נקו ושייפו בהדרגה, בצעו דוגמה באזור נסתר והניחו שכבות דקות. אפשרו לכל שכבה להתייבש לפי הוראות היצרן.' },
 { icon:'🛋️', title:'הכל על ריפוד קלאסי', description:'מהם הכלים הדרושים וכיצד לבחור את הבד המתאים לפרויקט הריפוד שלך.', category:'ריפוד', details:'צלמו כל שלב בפירוק, שמרו את הבד הישן כתבנית ובדקו את מצב הקפיצים והרצועות לפני בחירת הבד החדש.' },
 { icon:'🔍', title:'זיהוי סגנונות: מתקופת הבארוק ועד ארט דקו', description:'מדריך ויזואלי להבנת ההבדלים בין סגנונות ריהוט לאורך ההיסטוריה.', category:'היסטוריה', details:'השוו בין מבנה, פרופורציות, חיבורים ועיטורים. חותמות יצרן וחומרי גלם מספקים רמז אמין יותר מאשר המראה לבדו.' },
 { icon:'✨', title:'שימור פטינה: מתי כדאי ומתי לא', description:'המדריך המלא לשמירה על האופי והערך ההיסטורי של הרהיט שלך.', category:'טכניקות שימור', details:'פטינה מקורית עשויה להיות חלק מהערך ההיסטורי. לפני הסרה אגרסיבית, תעדו את המצב והתייעצו עם משמר מקצועי.' },
 { icon:'💡', title:'טיפים לתחזוקה שוטפת של עתיקות', description:'כיצד לשמור על הרהיטים העתיקים שלך במצב הטוב ביותר לאורך שנים.', category:'תחזוקה', details:'הרחיקו משמש ישירה ומלחות קיצונית, הסירו אבק במטלית רכה והימנעו מחומרי ניקוי רב-תכליתיים שאינם מותאמים לגימור.' },
];

const KnowledgePage: React.FC = () => {
 const [query,setQuery]=useState(''); const [open,setOpen]=useState<string|null>(null);
 const filtered=articles.filter(a => `${a.title} ${a.description} ${a.category}`.includes(query.trim()));
 return <div className="bg-gradient-to-br from-[#F5F5DC] to-[#faf8f0] py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center max-w-2xl mx-auto"><h1 className="text-5xl font-black text-[#8B4513]">מרכז הידע</h1><p className="mt-4 text-xl text-[#556B2F]">כל המידע, המדריכים והכלים להפוך למקצוען</p>
   <label className="sr-only" htmlFor="knowledge-search">חיפוש במרכז הידע</label><input id="knowledge-search" value={query} onChange={e=>setQuery(e.target.value)} type="search" placeholder="חפש מאמר, מדריך או טכניקה..." className="mt-8 w-full max-w-lg p-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#B8860B]" />
  </div><div className="mt-20"><h2 className="text-3xl font-bold text-center text-[#8B4513] mb-12">מאמרים נבחרים</h2>
   {filtered.length ? <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{filtered.map(a=><article key={a.title} className="bg-white p-6 rounded-xl shadow-md">
    <div className="flex items-center mb-4"><span className="text-4xl me-4">{a.icon}</span><div><span className="text-xs font-semibold bg-yellow-100 text-[#B8860B] py-1 px-2 rounded-full">{a.category}</span><h3 className="text-lg font-bold text-[#8B4513] mt-1">{a.title}</h3></div></div><p className="text-gray-600 text-sm">{a.description}</p>
    {open===a.title && <p className="mt-4 pt-4 border-t text-sm text-gray-700">{a.details}</p>}<button onClick={()=>setOpen(open===a.title?null:a.title)} aria-expanded={open===a.title} className="text-sm font-bold text-[#B8860B] hover:underline mt-4">{open===a.title?'סגור':'קרא עוד ←'}</button>
   </article>)}</div>:<p className="text-center text-gray-600 bg-white rounded-xl p-8">לא נמצאו מאמרים התואמים לחיפוש.</p>}
  </div></div></div>;
};
export default KnowledgePage;
