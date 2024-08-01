import axios from "axios";
import { BASE_URL as baseURL } from "./urls";

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = token;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 403) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

type TApiResponse<T> = {
    isSuccess: boolean;
    data: T;
    status: number;
    message?: string;
};

type TMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export async function sendRequest<T>(
    url: string,
    method: TMethod,
    requestData?: any,
    signal?: AbortSignal
): Promise<TApiResponse<T>> {
    return axiosInstance
        .request({
            method,
            url,
            data: requestData,
            ...(signal ? { signal } : {}),
        })
        .then((response) => {
            return {
                isSuccess: true,
                data: response.data as T,
                status: response.status,
            };
        })
        .catch((error) => {
            const response = error?.response?.data || {};

            return {
                isSuccess: false,
                ...response,
                message: "خطایی رخ داده است.",
            };
        });
}
