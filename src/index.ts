#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { getInquiryListTool } from "./tools/inquiry.js";

const main = async () => {
  try {
    const server = new McpServer({
      name: "pluuug MCP Server",
      version: process.env.npm_package_version ?? "1.0.0",
    });

    server.tool("get-inquiry-list", ...getInquiryListTool);
  } catch (err) {
    console.error("서버 오류", err);
    process.exit(1);
  }
};

main();
