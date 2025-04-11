import axiosInstance from "../../axiosInstance.js";
import type { InquiryListParams, InquiryListResponse } from "./type.js";

export class InquiryApi {
  async getInquiryList(params?: InquiryListParams) {
    try {
      const pageSize = params?.page_size;
      const parsedPageSize =
        typeof pageSize === "string" ? parseInt(pageSize, 10) : pageSize;
      const isValidPageSize =
        typeof parsedPageSize === "number" &&
        !isNaN(parsedPageSize) &&
        parsedPageSize > 0;

      const { data } = await axiosInstance.get<InquiryListResponse>(
        "/v1/inquiry",
        {
          params: {
            ...params,
            page_size: isValidPageSize ? parsedPageSize : 10,
          },
        }
      );
      return data;
    } catch (err) {
      console.error(err);
      return { next: null, previous: null, results: [] };
    }
  }
}

const inquiryApi = new InquiryApi();

export default inquiryApi;
