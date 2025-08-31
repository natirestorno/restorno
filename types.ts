
export interface RestorationTask {
  taskName: string;
  description: string;
  estimatedHours: number;
  estimatedCost: number;
}

export interface RestorationQuote {
  overallCondition: string;
  recommendedActions: string[];
  tasks: RestorationTask[];
  totalEstimatedHours: number;
  totalEstimatedCost: number;
  estimatedTurnaround: string;
}

export interface MarketAnalysis {
  woodType: string;
  furnitureStyle: string;
  estimatedAge: string;
  marketValueAsIs: number;
  potentialValueAfterRestoration: number;
  rarityAndNotes: string;
}

export interface AIQuoteResponse {
  restorationQuote: RestorationQuote;
  marketAnalysis: MarketAnalysis;
}
