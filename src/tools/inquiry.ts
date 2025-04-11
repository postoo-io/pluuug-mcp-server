import type { ZodRawShape } from "zod";
import inquiryApi from "../api/inquiry/inquiry.js";
import {
  type InquiryListParams,
  inquiryListSchema,
} from "../api/inquiry/type.js";
import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";

export const getInquiryListTool: [ZodRawShape, ToolCallback<ZodRawShape>] = [
  inquiryListSchema.shape,
  async (params: InquiryListParams) => {
    const data = await inquiryApi.getInquiryList(params);
    const isDataEmpty = data.results.length === 0;
    if (isDataEmpty) {
      return {
        content: [{ type: "text", text: "의뢰가 없습니다." }],
      };
    }
    const baseInfo = data.results.map(
      ({ name, estimate, inquiryDate, status }) => {
        return [
          "이름 | 예상견적 | 문의일시 | 상태 | 폴더",
          "------|------|------|--------|--------",
          `${name} | ${estimate} | ${inquiryDate} | ${status.title} | ${status.folder.name}`,
        ].join("\n");
      }
    )[0];
    return {
      content: [{ type: "text", text: baseInfo }],
    };
  },
];
