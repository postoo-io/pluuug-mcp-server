import axiosInstance from "../../axiosInstance.js";
import type { InquiryListParams, InquiryListResponse } from "./type.js";

export class InquiryApi {
  async getInquiryList(params?: InquiryListParams) {
    try {
      const { data } = await axiosInstance.get<InquiryListResponse>(
        "/v1/inquiry",
        { params }
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
