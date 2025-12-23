import axios from "axios";
import { SYSTEM_PROMPT } from "./systemPrompt.js";

export async function callLLM(userPrompt) {
  const res = await axios.post(
    `${process.env.OLLAMA_URL}/api/generate`,
    {
      model: process.env.OLLAMA_MODEL,
      prompt: SYSTEM_PROMPT + "\nUSER:\n" + userPrompt,
      stream: false
    }
  );
  return res.data.response;
}