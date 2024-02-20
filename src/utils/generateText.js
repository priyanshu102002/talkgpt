// const { GoogleGenerativeAI } = require("@google/generative-ai");
import {GoogleGenerativeAI} from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
let ans ;

const run = async ({ prompt }) => {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    ans = response.text();
    return ans;
}

export default run;


