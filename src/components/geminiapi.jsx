import { GoogleGenerativeAI } from "@google/generative-ai";





const genAi = new GoogleGenerativeAI(import.meta.env.VITE_KEY);

const generationConfig = {
    stopSequences: ["red"],
    maxOutputTokens: 30720,
    temperature: 0.9,
    topP: 1,
    topK: 1,
};



const model = genAi.getGenerativeModel({ model: "gemini-pro", generationConfig });

export async function run(message) {
    // For text-only input, use the gemini-pro model
    const model = genAi.getGenerativeModel({ model: "gemini-pro"});

    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: "Hello, Im bot .",
            },
            {
                role: "model",
                parts: "nice to met you",
            },
        ],
        generationConfig: {
            maxOutputTokens: 1000,
        },
    });

    const msg =message;

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text
}
