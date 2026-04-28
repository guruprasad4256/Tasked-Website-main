import axios, { AxiosInstance } from "axios";

const API_BASE_URL: string =
    import.meta.env.MODE === "production"
        ? "https://api.manhoursonhire.com"
        : "http://localhost:5000";


export const api: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});