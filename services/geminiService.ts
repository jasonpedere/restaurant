
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getChefRecommendation = async (preference: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User preference: ${preference}. You are the Head Chef of RR Garden Feast Buffet in Cabanatuan City. Recommend a personalized "Feast Combo" from our buffet. Be inviting, professional, and highlight Filipino flavors if possible. Keep it under 100 words.`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error getting chef recommendation:", error);
    return "I'm currently busy in the kitchen, but I recommend starting with our signature Crispy Pata and ending with Halo-Halo!";
  }
};
