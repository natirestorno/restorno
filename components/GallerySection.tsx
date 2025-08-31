
import React from 'react';

interface GalleryItemProps {
    title: string;
    description: string;
    beforeImg: string;
    afterImg: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ title, description, beforeImg, afterImg }) => (
    <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
        <div className="relative h-64">
            <img src={beforeImg} alt="לפני שחזור" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0" />
            <img src={afterImg} alt="אחרי שחזור" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B8860B]/80 text-white py-2 px-4 rounded-full font-bold text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                העבר עכבר לראות אחרי
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-[#8B4513]">{title}</h3>
            <p className="mt-2 text-[#556B2F] text-sm">{description}</p>
        </div>
    </div>
);

const GallerySection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-[#8B4513] mb-12">
                    מעבר מהמם: לפני ואחרי
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <GalleryItem
                        title="כיסא ויקטוריאני מהמאה ה-19"
                        description="שחזור מלא של כיסא עתיק עם ריפוד חדש ושיקום עץ האגוז המקורי."
                        beforeImg="https://picsum.photos/id/107/400/300"
                        afterImg="https://picsum.photos/id/117/400/300"
                    />
                    <GalleryItem
                        title="שולחן אוכל מהתקופה העות'מנית"
                        description="שיקום מלא של עץ הזית הטבעי עם שימור הפטינה המקורית."
                        beforeImg="https://picsum.photos/id/219/400/300"
                        afterImg="https://picsum.photos/id/220/400/300"
                    />
                    <GalleryItem
                        title="ארון בגדים בסגנון ארט דקו"
                        description="החייאת ארון משנות ה-30 עם שיקום מנגנונים וצביעה מקורית."
                        beforeImg="https://picsum.photos/id/355/400/300"
                        afterImg="https://picsum.photos/id/365/400/300"
                    />
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
