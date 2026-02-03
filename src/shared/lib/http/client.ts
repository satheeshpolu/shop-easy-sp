import CONSTANTS from "@/utils/constants";
import axios from "axios";

export const httpClient = axios.create({
  baseURL: CONSTANTS.API.BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});
