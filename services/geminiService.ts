
import { GoogleGenAI, Type } from "@google/genai";
import type { AIQuoteResponse } from "../types";

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        restorationQuote: {
            type: Type.OBJECT,
            properties: {
                overallCondition: { type: Type.STRING, description: "A brief summary of the furniture's current condition." },
                recommendedActions: { 
                    type: Type.ARRAY, 
                    items: { type: Type.STRING },
                    description: "A list of recommended high-level restoration actions."
                },
                tasks: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            taskName: { type: Type.STRING, description: "Name of the specific restoration task (e.g., 'Wood Stripping', 'Upholstery')." },
                            description: { type: Type.STRING, description: "Brief description of what the task involves." },
                            estimatedHours: { type: Type.NUMBER, description: "Estimated hours to complete the task." },
                            estimatedCost: { type: Type.NUMBER, description: "Estimated cost in ILS for this task." },
                        },
                        required: ["taskName", "description", "estimatedHours", "estimatedCost"]
                    },
                    description: "A detailed breakdown of restoration tasks."
                },
                totalEstimatedHours: { type: Type.NUMBER, description: "Total sum of estimated hours for all tasks." },
                totalEstimatedCost: { type: Type.NUMBER, description: "Total sum of estimated costs in ILS for all tasks." },
                estimatedTurnaround: { type: Type.STRING, description: "Estimated time to complete the entire restoration (e.g., '2-3 weeks')." }
            },
            required: ["overallCondition", "recommendedActions", "tasks", "totalEstimatedHours", "totalEstimatedCost", "estimatedTurnaround"]
        },
        marketAnalysis: {
            type: Type.OBJECT,
            properties: {
                woodType: { type: Type.STRING, description: "Identified type of wood." },
                furnitureStyle: { type: Type.STRING, description: "The style of the furniture (e.g., 'Victorian', 'Art Deco')." },
                estimatedAge: { type: Type.STRING, description: "Estimated age or period of the furniture (e.g., 'Late 19th Century')." },
                marketValueAsIs: { type: Type.NUMBER, description: "Estimated market value in ILS in its current condition." },
                potentialValueAfterRestoration: { type: Type.NUMBER, description: "Potential market value in ILS after successful restoration." },
                rarityAndNotes: { type: Type.STRING, description: "Notes on the furniture's rarity, maker, or other interesting facts." },
            },
            required: ["woodType", "furnitureStyle", "estimatedAge", "marketValueAsIs", "potentialValueAfterRestoration", "rarityAndNotes"]
        }
    }
};


export const generateQuote = async (
    imageBase64: string,
    mimeType: string,
    userPrompt: string
): Promise<AIQuoteResponse> => {
    try {
        const fullPrompt = `
            As an expert furniture restorer and appraiser from 'Restorno', analyze the provided image of a piece of furniture.
            Based on the image and the user's request, provide a detailed restoration quote and market analysis.
            The user's specific request is: "${userPrompt || 'General restoration and appraisal.'}"
            
            Your response must be in JSON format, adhering to the provided schema.
            All monetary values should be in Israeli New Shekels (ILS).
            The analysis should be thorough, professional, and tailored to the Israeli market.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: {
                parts: [
                    { inlineData: { data: imageBase64, mimeType } },
                    { text: fullPrompt },
                ],
            },
            config: {
                responseMimeType: 'application/json',
                responseSchema: responseSchema,
            },
        });

        const jsonText = response.text.trim();
        const parsedJson = JSON.parse(jsonText);
        
        // Basic validation
        if (!parsedJson.restorationQuote || !parsedJson.marketAnalysis) {
            throw new Error("Invalid JSON structure received from API.");
        }

        return parsedJson as AIQuoteResponse;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to generate quote from AI service.");
    }
};
