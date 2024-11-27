import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';
import queryString from 'query-string';

const baseURL = process.env.REACT_APP_API_URL;

const publicClient: AxiosInstance = axios.create({
    baseURL,
    paramsSerializer: (params) => queryString.stringify(params),
});

publicClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
    return {
        ...config,
        headers: {
            'Content-Type': 'application/json',
        } as AxiosRequestHeaders,
    };
});

publicClient.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response && response.data) return response.data;
        return response;
    },
    (error) => {
        return Promise.reject(error.response);
    }
);

export default publicClient;
