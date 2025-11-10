import React, { useState } from 'react';

// --- Sub-components specific to MarketplacePage ---

// Card for Auction Items
const AuctionCard: React.FC<{ item: any }> = ({ item }) => (
    <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden group border-2 border-transparent hover:border-[#B8860B] transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-56">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 m-2 rounded-full animate-pulse">
                LIVE
            </div>
        </div>
        <div className="p-4">
            <h3 className="font-bold text-lg text-[#8B4513] truncate">{item.title}</h3>
            <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
                <span>
                    <span className="font-bold text-[#36454F]">הצעה נוכחית:</span> ₪{item.currentBid.toLocaleString()}
                </span>
                <span>{item.bidsCount} הצעות</span>
            </div>
            <div className="mt-3 text-center bg-yellow-100 text-[#B8860B] font-bold py-1 rounded-full text-sm">
                ⏳ נותרו {item.timeLeft}
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white font-bold py-2.5 px-4 rounded-full transition-all duration-300 transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2">
                הגש הצעה
            </button>
        </div>
    </div>
);

// Card for Direct Sale Items
const ProductCard: React.FC<{ item: any }> = ({ item }) => (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-56">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
            {item.condition && <div className="absolute top-2 left-2 bg-white/80 text-[#556B2F] text-xs font-semibold px-2 py-1 rounded-md">{item.condition}</div>}
        </div>
        <div className="p-4 text-right">
            <h3 className="font-bold text-lg text-[#8B4513] truncate">{item.title}</h3>
            <p className="text-sm text-gray-500">נמכר על ידי {item.seller}</p>
            <p className="text-xl font-semibold text-green-700 mt-2">₪{item.price.toLocaleString()}</p>
            <button className="mt-4 w-full bg-[#8B4513] text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                הוסף לסל
            </button>
        </div>
    </div>
);

// --- Mock Data ---

const auctionItems = [
    { image: "https://picsum.photos/id/219/400/300", title: "שולחן כתיבה ויקטוריאני נדיר", currentBid: 2400, bidsCount: 12, timeLeft: "יומיים ו-4 שעות" },
    { image: "https://picsum.photos/id/431/400/300", title: "מראת קיר מוזהבת מתקופת הבארוק", currentBid: 850, bidsCount: 7, timeLeft: "12 שעות" },
    { image: "https://picsum.photos/id/355/400/300", title: "ארון בגדים ארט דקו מקורי", currentBid: 3200, bidsCount: 18, timeLeft: "3 ימים" },
    { image: "https://picsum.photos/id/543/400/300", title: "סט כלי תה מפורצלן", currentBid: 450, bidsCount: 21, timeLeft: "שעתיים" },
];

const directSaleItems = [
    { image: "https://picsum.photos/id/107/400/300", title: "סט 4 כסאות אוכל", price: 1800, seller: "דניאל לוי", condition: "משוחזר" },
    { image: "https://picsum.photos/id/117/400/300", title: "שידת לילה מעץ אגוז", price: 1100, seller: "יעל כהן", condition: "מצב מצוין" },
    { image: "https://picsum.photos/id/220/400/300", title: "כורסת טלוויזיה וינטג'", price: 1500, seller: "גלריה 'פעם'", condition: "דרוש ריפוד" },
    { image: "https://picsum.photos/id/654/400/300", title: "מנורת שולחן פליז", price: 650, seller: "אספן פרטי", condition: "שמור היטב" },
    { image: "https://picsum.photos/id/789/400/300", title: "ארגז כלים לנגרות", price: 900, seller: "סדנת 'העץ הטוב'", condition: "וינטג'" },
    { image: "https://picsum.photos/id/123/400/300", title: "שטיח פרסי עבודת יד", price: 4200, seller: "משפחת אברהמי", condition: "עתיק" },
];

const categories = [
    { name: "רהיטים", icon: "🛋️" },
    { name: "כלי עבודה", icon: "🛠️" },
    { name: "חומרי גלם", icon: "🪵" },
    { name: "אמנות ועיצוב", icon: "🏺" },
];

// --- Main Marketplace Component ---

const MarketplacePage: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-[#F5F5DC] to-[#faf8f0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-black text-[#8B4513]">מרקטפלייס</h1>
                    <p className="mt-4 text-xl text-[#556B2F]">קנייה ומכירה של עתיקות, חומרים וכלים</p>
                    <div className="mt-8 flex justify-center gap-4">
                         <input 
                            type="search"
                            placeholder="חפש פריט, סגנון או תקופה..."
                            className="w-full max-w-lg p-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B]"
                        />
                        <button className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            מכור פריט
                        </button>
                    </div>
                </header>

                {/* Auctions Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-right text-[#8B4513] mb-6">מכירות פומביות לוהטות 🔥</h2>
                    <div className="flex gap-8 pb-4 -mx-4 px-4 overflow-x-auto">
                        {auctionItems.map((item, index) => <AuctionCard key={index} item={item} />)}
                    </div>
                </section>

                {/* Categories Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-8">קניות לפי קטגוריה</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {categories.map(cat => (
                            <button key={cat.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                                <div className="text-5xl mb-2">{cat.icon}</div>
                                <h3 className="text-lg font-bold text-[#36454F]">{cat.name}</h3>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Direct Sales Section */}
                <section>
                    <h2 className="text-3xl font-bold text-right text-[#8B4513] mb-8">פריטים מהקהילה שלנו</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        {directSaleItems.map((item, index) => <ProductCard key={index} item={item} />)}
                    </div>
                </section>

                 {/* Pagination */}
                <nav className="flex justify-center items-center mt-16 space-x-2" dir="ltr">
                    <button className="p-2 rounded-md hover:bg-gray-200">«</button>
                    <button className="px-4 py-2 rounded-md hover:bg-gray-200">1</button>
                    <button className="px-4 py-2 rounded-md bg-[#B8860B] text-white">2</button>
                    <button className="px-4 py-2 rounded-md hover:bg-gray-200">3</button>
                    <button className="p-2 rounded-md hover:bg-gray-200">»</button>
                </nav>
            </div>
        </div>
    );
};

export default MarketplacePage;
