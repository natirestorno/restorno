import React, { useState } from 'react';
import Lightbox from './Lightbox';

interface GalleryItemProps {
    title: string;
    description: string;
    beforeImg: string;
    afterImg: string;
    onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ title, description, beforeImg, afterImg, onClick }) => (
    <button 
        onClick={onClick}
        className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white text-right w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2"
        aria-label={`View details for ${title}`}
    >
        <div className="relative h-64 overflow-hidden">
            <img 
                loading="lazy" 
                src={beforeImg} 
                alt="לפני שחזור" 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out opacity-100 group-hover:opacity-0 group-hover:scale-105" 
            />
            <img 
                loading="lazy"
                src={afterImg} 
                alt="אחרי שחזור" 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105" 
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B8860B]/80 text-white py-2 px-4 rounded-full font-bold text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                העבר עכבר לראות אחרי
            </div>
            <div className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-2a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1V7a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-[#8B4513]">{title}</h3>
            <p className="mt-2 text-[#556B2F] text-sm">{description}</p>
        </div>
    </button>
);

const galleryItems = [
    {
        title: "כיסא ויקטוריאני מהמאה ה-19",
        description: "שחזור מלא של כיסא עתיק עם ריפוד חדש ושיקום עץ האגוז המקורי.",
        beforeImg: "https://picsum.photos/id/107/400/300",
        afterImg: "https://picsum.photos/id/117/400/300",
        largeBeforeImg: "https://picsum.photos/id/107/1200/800",
        largeAfterImg: "https://picsum.photos/id/117/1200/800",
    },
    {
        title: "שולחן אוכל מהתקופה העות'מנית",
        description: "שיקום מלא של עץ הזית הטבעי עם שימור הפטינה המקורית.",
        beforeImg: "https://picsum.photos/id/219/400/300",
        afterImg: "https://picsum.photos/id/220/400/300",
        largeBeforeImg: "https://picsum.photos/id/219/1200/800",
        largeAfterImg: "https://picsum.photos/id/220/1200/800",
    },
    {
        title: "ארון בגדים בסגנון ארט דקו",
        description: "החייאת ארון משנות ה-30 עם שיקום מנגנונים וצביעה מקורית.",
        beforeImg: "https://picsum.photos/id/355/400/300",
        afterImg: "https://picsum.photos/id/365/400/300",
        largeBeforeImg: "https://picsum.photos/id/355/1200/800",
        largeAfterImg: "https://picsum.photos/id/365/1200/800",
    }
];


const GallerySection: React.FC = () => {
    const [lightboxData, setLightboxData] = useState<{ title: string; beforeImg: string; afterImg: string } | null>(null);

    const openLightbox = (item: { title: string; largeBeforeImg: string; largeAfterImg: string }) => {
        setLightboxData({
            title: item.title,
            beforeImg: item.largeBeforeImg,
            afterImg: item.largeAfterImg,
        });
    };

    const closeLightbox = () => {
        setLightboxData(null);
    };

    return (
        <>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-[#8B4513] mb-12">
                        מעבר מהמם: לפני ואחרי
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item, index) => (
                             <GalleryItem
                                key={index}
                                {...item}
                                onClick={() => openLightbox(item)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {lightboxData && (
                <Lightbox 
                    isOpen={!!lightboxData}
                    onClose={closeLightbox}
                    {...lightboxData}
                />
            )}
        </>
    );
};

export default GallerySection;