import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

export async function runMCP(plan) {
  const transport = new StdioClientTransport({
    command: "npx",
    args: ["@playwright/mcp@latest"]
  });

  const client = new Client(
    { name: "teamcenter-agent", version: "1.0.0" },
    { transport }
  );

  await client.connect();

  for (const step of plan) {
    await client.callTool(step.tool, step.arguments);
  }

  await client.close();
}
