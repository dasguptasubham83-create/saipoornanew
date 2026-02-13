
import { GoogleGenAI } from "@google/genai";
import { BlockType } from "../types";

export const generateContent = async (prompt: string): Promise<{
  type: BlockType;
  content: string;
  title?: string;
  language?: string;
}> => {
  // Initialize exactly as instructed in the guidelines
  // Use process.env.API_KEY as the primary key source
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
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

  const category = (classifierResponse.text?.trim().toLowerCase() as BlockType) || 'text';

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
    const candidate = imageResponse.candidates?.[0];
    if (candidate) {
      for (const part of candidate.content.parts) {
        if (part.inlineData) {
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
      systemInstruction: `You are a creative assistant on a blank canvas. 
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
