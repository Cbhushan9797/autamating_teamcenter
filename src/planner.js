import { callLLM } from "./ollamaClient.js";

export async function generatePlan(userPrompt) {
  const plan = await callLLM(userPrompt);
  return JSON.parse(plan);
}
