import axios from "axios";

const baseURL = "https://openapi.pluuug.com";

const instance = axios.create({
  baseURL,
  timeout: 1000 * 120,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use((config) => {
  config.headers["X-API-KEY"] = process.env.API_KEY;
  return config;
});

export default instance;
