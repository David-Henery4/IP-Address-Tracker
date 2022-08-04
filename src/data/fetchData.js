import axios from "axios";

export const baseFetch = axios.create({
  baseURL: "https://geo.ipify.org/api/v2",
});
