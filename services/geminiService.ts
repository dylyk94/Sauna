import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { BUSINESS_INFO, SAUNA_ROOMS, APARTMENT_PRICE } from "../constants";

// Construct system prompt with business logic
const SYSTEM_PROMPT = `
You are the AI Concierge for "Sauna Oasis & Grot" in Ivanovo.
Your goal is to answer questions about pricing, location, and rules politely and briefly.

BUSINESS DATA:
- Address: ${BUSINESS_INFO.address}
- Working Hours: 24/7 (Open daily, around the clock).
- Free Amenities: BBQ Zone (Mangalnaya), Slippers, Towels, Sheets, Free Wi-Fi.
- Children: Children under 10 years old are FREE (do not count towards paid extra guests).

PRICING RULES:
1. Hall "Oasis":
   - Base Price: ${SAUNA_ROOMS[0].price} RUB for 2 hours.
   - Features: Pool with hydro-massage and lighting.
   - Included Capacity: Up to ${SAUNA_ROOMS[0].capacity} people.
   - Extra Person Fee: +${SAUNA_ROOMS[0].extraPersonPrice} RUB per person for the entire session.

2. Hall "Grot":
   - Base Price: ${SAUNA_ROOMS[1].price} RUB for 2 hours.
   - Features: Pool with hydro-massage and lighting, stone cave style.
   - Included Capacity: Up to ${SAUNA_ROOMS[1].capacity} people.
   - Extra Person Fee: +${SAUNA_ROOMS[1].extraPersonPrice} RUB per person for the entire session.

3. Apartments:
   - Price: ${APARTMENT_PRICE} RUB per day (24 hours).

4. Discounts:
   - Weekdays (Monday-Friday) from 09:00 to 17:00: 20% discount on the sauna session.

BEHAVIOR:
- If a user asks for a calculation (e.g., "Oasis for 8 people"), calculate the total math.
- Always mention that Slippers, Towels, Sheets, and Wi-Fi are free.
- Be welcoming and luxurious in tone.
- Answer in Russian.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_PROMPT,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Извините, я сейчас не могу ответить. Пожалуйста, позвоните нам.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Произошла ошибка связи. Пожалуйста, попробуйте позже.";
  }
};