import axios from "axios";

const baseURL = "http://localhost:3001/"

export const AxiosInstance = axios.create({ baseURL: baseURL });