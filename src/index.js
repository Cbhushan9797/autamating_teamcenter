import "dotenv/config";
import { generatePlan } from "./planner.js";
import { runMCP } from "./mcpClient.js";

const userPrompt = `
Login to Teamcenter.
Go to Home → NewStuffs.
Take a screenshot.
`;

(async () => {
  const plan = await generatePlan(userPrompt);
  await runMCP(plan);
})();
