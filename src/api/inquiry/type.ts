import { z } from "zod";

export const inquiryListSchema = z.object({
  cursor: z.string().optional(),
  folder_id: z.string().optional(),
  page_size: z.number().optional(),
  search: z.string().optional(),
  status_id: z.string().optional(),
});
export type InquiryListParams = z.infer<typeof inquiryListSchema>;
export type InquiryListResponse = {
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    name: string;
    estimate: number;
    inquiryDate: string;
    status: {
      id: number;
      title: string;
      folder: { id: number; name: string };
    };
    client: {
      id: number;
      status: { id: number; title: string };
      companyName: string;
      inCharge: string;
      position: string;
      contact: string;
      email: string;
    } | null;
    contract: {
      id: number;
      title: string;
      amount: number;
      type: string;
      status: string;
      startDate: string;
      endDate: string;
    } | null;
  }[];
};
