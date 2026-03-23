import { GoogleGenAI, Type } from "@google/genai";

async function generateNewsDescriptions() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const imageUrls = Array.from({ length: 30 }, (_, i) => `https://raw.githubusercontent.com/townlinksolutions/townlinksolutions/main/masthappna_naik/images/news/news${i + 1}.jpg`);

  const results = [];

  for (let i = 0; i < imageUrls.length; i++) {
    const url = imageUrls[i];
    console.log(`Analyzing image ${i + 1}...`);
    
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            text: `Analyze this news clipping image and provide:
            1. A catchy title (English and Kannada).
            2. A short description (English and Kannada).
            3. A detailed content description (English and Kannada).
            Format the output as JSON.`
          },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: Buffer.from(await (await fetch(url)).arrayBuffer()).toString('base64')
            }
          }
        ],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              titleEn: { type: Type.STRING },
              titleKn: { type: Type.STRING },
              shortDescEn: { type: Type.STRING },
              shortDescKn: { type: Type.STRING },
              contentEn: { type: Type.STRING },
              contentKn: { type: Type.STRING }
            },
            required: ["titleEn", "titleKn", "shortDescEn", "shortDescKn", "contentEn", "contentKn"]
          }
        }
      });

      const data = JSON.parse(response.text);
      results.push({ id: i + 1, url, ...data });
    } catch (error) {
      console.error(`Error analyzing image ${i + 1}:`, error);
      // Fallback dummy data if analysis fails
      results.push({
        id: i + 1,
        url,
        titleEn: `News Clipping ${i + 1}`,
        titleKn: `ಸುದ್ದಿ ತುಣುಕು ${i + 1}`,
        shortDescEn: `Summary of news clipping ${i + 1}`,
        shortDescKn: `ಸುದ್ದಿ ತುಣುಕು ${i + 1} ರ ಸಾರಾಂಶ`,
        contentEn: `Detailed content for news clipping ${i + 1}.`,
        contentKn: `ಸುದ್ದಿ ತುಣುಕು ${i + 1} ಕ್ಕೆ ವಿವರವಾದ ವಿಷಯ.`
      });
    }
  }

  console.log(JSON.stringify(results, null, 2));
}

generateNewsDescriptions();
