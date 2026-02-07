
let ai: any = null;

// Initialize AI client safely
const initializeAI = async () => {
  if (ai) return ai;
  try {
    const { GoogleGenAI } = await import("@google/genai");
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    return ai;
  } catch (error) {
    console.warn("GoogleGenAI import failed, using fallback responses:", error);
    return null;
  }
};

export const getChefRecommendation = async (preference: string) => {
  try {
    const client = await initializeAI();
    if (!client) {
      return "I'm currently busy in the kitchen, but I recommend starting with our signature Crispy Pata and ending with Halo-Halo!";
    }
    
    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User preference: ${preference}. You are the Head Chef of Mesa Familia in Cabanatuan City. Recommend a personalized "Feast Combo" from our buffet. Be inviting, professional, and highlight Filipino flavors if possible. Keep it under 100 words.`,
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
