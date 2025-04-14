import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.REACT_APP_GOOGLE_API_KEY || ""
);

export const generateSchedule = async (tasks: string[]): Promise<any> => {
  try {
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are a helpful daily planner assistant. The user has provided these tasks they want to accomplish today:
      ${tasks.join("\n")}
      
      Please create an optimal schedule for these tasks considering:
      1. Time constraints (typical work hours 9AM-5PM)
      2. Logical grouping of similar tasks
      3. Energy levels throughout the day
      4. Any apparent dependencies between tasks
      
      Return your response as a JSON object with this structure:
      {
        "explanation": "string (2-3 sentences explaining your reasoning)",
        "schedule": [
          {
            "time": "string (e.g. '9:00 AM')",
            "task": "string",
            "reason": "string (why scheduled at this time)"
          }
        ]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse the JSON response (Gemini returns text, so we need to extract JSON)
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}") + 1;
    const jsonString = text.slice(jsonStart, jsonEnd);
    console.log("jsonString", jsonString);
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error generating schedule:", error);
    throw error;
  }
};
