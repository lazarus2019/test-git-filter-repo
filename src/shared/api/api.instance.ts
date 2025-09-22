import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "/api",
  signal: new AbortController().signal,
});
