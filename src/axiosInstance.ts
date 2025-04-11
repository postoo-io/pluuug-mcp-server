import axios from "axios";

const baseURL = "https://openapi-dev.pluuug.com";

const instance = axios.create({
  baseURL,
  timeout: 1000 * 120, // 2분
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use((config) => {
  config.headers["X-API-KEY"] = process.env.API_KEY;
  return config;
});

export default instance;
