
import React from 'react';
import type { AIQuoteResponse } from '../types';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: string }> = ({ title, children, icon }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#B8860B]">
        <div className="flex items-center mb-4">
            <span className="text-3xl me-3">{icon}</span>
            <h3 className="text-xl font-bold text-[#8B4513]">{title}</h3>
        </div>
        {children}
    </div>
);

const QuoteResult: React.FC<{ data: AIQuoteResponse }> = ({ data }) => {
    const { restorationQuote, marketAnalysis } = data;

    return (
        <div className="mt-12 animate-fade-in space-y-8">
            <h2 className="text-3xl font-bold text-center text-[#8B4513]">ניתוח והצעת מחיר</h2>

            {/* Market Analysis Card */}
            <InfoCard title="ניתוח שוק והערכת שווי" icon="🏺">
                <div className="space-y-3 text-gray-700">
                    <p><strong>סוג עץ:</strong> {marketAnalysis.woodType}</p>
                    <p><strong>סגנון:</strong> {marketAnalysis.furnitureStyle}</p>
                    <p><strong>גיל מוערך:</strong> {marketAnalysis.estimatedAge}</p>
                    <p><strong>הערות ונדירות:</strong> {marketAnalysis.rarityAndNotes}</p>
                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
                        <div className="text-center">
                            <p className="text-sm text-gray-500">שווי נוכחי (כפי שהוא)</p>
                            <p className="text-2xl font-bold text-green-600">₪{marketAnalysis.marketValueAsIs.toLocaleString()}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-500">שווי פוטנציאלי (לאחר שיקום)</p>
                            <p className="text-2xl font-bold text-green-800">₪{marketAnalysis.potentialValueAfterRestoration.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </InfoCard>

            {/* Restoration Quote Card */}
            <InfoCard title="הצעת מחיר לשחזור" icon="🛠️">
                <div className="space-y-4 text-gray-700">
                    <p><strong>מצב כללי:</strong> {restorationQuote.overallCondition}</p>
                    <div>
                        <strong>פעולות מומלצות:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                            {restorationQuote.recommendedActions.map((action, i) => <li key={i}>{action}</li>)}
                        </ul>
                    </div>
                    
                    <div className="pt-4 border-t">
                        <h4 className="font-semibold mb-2">פירוט משימות ועלויות:</h4>
                        <ul className="space-y-2">
                            {restorationQuote.tasks.map((task, i) => (
                                <li key={i} className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                                    <span>{task.taskName} <span className="text-xs text-gray-500">({task.estimatedHours} שעות)</span></span>
                                    <span className="font-semibold text-gray-800">₪{task.estimatedCost.toLocaleString()}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t text-center font-bold">
                         <div>
                            <p className="text-sm text-gray-500 font-normal">זמן עבודה כולל</p>
                            <p className="text-xl text-[#36454F]">{restorationQuote.totalEstimatedHours} שעות</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-normal">עלות כוללת מוערכת</p>
                            <p className="text-xl text-green-700">₪{restorationQuote.totalEstimatedCost.toLocaleString()}</p>
                        </div>
                    </div>
                     <p className="text-sm text-center text-gray-500 pt-4 border-t"><strong>זמן ביצוע מוערך:</strong> {restorationQuote.estimatedTurnaround}</p>
                </div>
            </InfoCard>
        </div>
    );
};

export default QuoteResult;
