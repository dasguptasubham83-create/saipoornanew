import { GoogleGenAI } from "@google/genai";
import { BlockType } from "../types";

export const generateContent = async (prompt: string): Promise<{
  type: BlockType;
  content: string;
  title?: string;
  language?: string;
}> => {
  // Use the API_KEY from the environment
  const apiKey = process.env.API_KEY || "";
  const ai = new GoogleGenAI({ apiKey });
  
  // Decide the content type first
  const classifierResponse = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Categorize the following request into one of these types: 'text', 'image', 'code', or 'idea'. 
    - Use 'text' for stories, essays, or info.
    - Use 'image' for visual generation requests.
    - Use 'code' for snippets.
    - Use 'idea' for lists or brainstorming.
    
    Request: "${prompt}"
    Return ONLY the category word.`,
  });

  const categoryStr = classifierResponse.text?.trim().toLowerCase();
  const category = (categoryStr as BlockType) || 'text';

  if (category === 'image') {
    const imageResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        }
      }
    });

    let imageUrl = '';
    
    // Bulletproof extraction for TypeScript strict mode
    const candidate = imageResponse.candidates?.[0];
    const parts = candidate?.content?.parts;

    if (parts && Array.isArray(parts)) {
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }
    }

    return {
      type: 'image',
      content: imageUrl,
      title: 'Generated Visual'
    };
  }

  // Handle text/code/idea
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: `You are a creative assistant for SAI POORNA. 
      If the user wants code, provide only the code block. 
      If the user wants an idea, provide a structured list.
      If the user wants text, provide formatted markdown.`,
    }
  });

  const text = response.text || "No content generated.";
  
  return {
    type: category,
    content: text,
    title: prompt.length > 30 ? prompt.substring(0, 30) + '...' : prompt
  };
};