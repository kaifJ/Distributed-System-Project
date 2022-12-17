import axios from "axios";

const baseURL = "https://ds-booking.fly.dev/"

export const AxiosInstance = axios.create({ baseURL: baseURL });
export const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}