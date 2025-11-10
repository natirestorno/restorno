import React, { useState, useEffect } from 'react';

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    beforeImg: string;
    afterImg: string;
    title: string;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, beforeImg, afterImg, title }) => {
    const [showAfter, setShowAfter] = useState(false);

    useEffect(() => {
        // Reset to 'before' view when a new item is opened
        if (isOpen) {
            setShowAfter(false);
        }
    }, [isOpen]);

    useEffect(() => {
        // Disable body scroll when lightbox is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
        >
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 id="lightbox-title" className="text-xl font-bold text-[#8B4513]">{title}</h2>
                    <button 
                        onClick={onClose} 
                        className="text-3xl text-gray-500 hover:text-gray-800 transition-colors"
                        aria-label="Close lightbox"
                    >
                        &times;
                    </button>
                </div>

                {/* Image container */}
                <div className="flex-grow p-4 overflow-hidden flex items-center justify-center">
                    <img 
                        src={showAfter ? afterImg : beforeImg} 
                        alt={showAfter ? `After restoration of ${title}` : `Before restoration of ${title}`}
                        className="max-w-full max-h-[calc(90vh-150px)] object-contain rounded-md"
                    />
                </div>

                {/* Controls */}
                <div className="p-4 border-t flex justify-center items-center gap-4">
                     <span className={`font-semibold transition-colors ${!showAfter ? 'text-[#B8860B]' : 'text-gray-500'}`}>
                        לפני
                    </span>
                    <label htmlFor="toggle" className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id="toggle" className="sr-only" checked={showAfter} onChange={() => setShowAfter(!showAfter)} />
                            <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform transform duration-300 ease-in-out ${showAfter ? 'translate-x-6' : ''}`}></div>
                        </div>
                    </label>
                    <span className={`font-semibold transition-colors ${showAfter ? 'text-[#B8860B]' : 'text-gray-500'}`}>
                        אחרי
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
