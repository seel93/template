import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { API_BASE_URL } from '../config';

const APPLICATION_JSON = 'application/json';

export const APPLICATION_JSON_HEADER = {
    Accept: APPLICATION_JSON,
    'Content-Type': APPLICATION_JSON
};

const config: AxiosRequestConfig = {
    baseURL: API_BASE_URL,
    headers: APPLICATION_JSON_HEADER
};

export interface HttpError {
    name: string;
    message: string;
    status: number;
    statusText: string;
    url?: string;
}

export function isString(data: any) {
    return data !== undefined && typeof data === 'string';
}

export function isObject(data: any) {
    return data !== undefined && typeof data === 'object';
}

export const getMessage = (e: AxiosError) => {
    let message = '';
    if (e.response && isObject(e.response) && e.response.data) {
        if (isString(e.response.data)) {
            message = e.response.data;
        } else if (isObject(e.response.data) && isString(e.response.data.message)) {
            message = e.response.data.message;
        }
    } else if (isString(e.message)) {
        message = e.message;
    }
    return message;
};

export const createHttpError = (e: AxiosError): HttpError => {
    if (e.response) {
        return {
            name: e.name,
            message: `${getMessage(e)} ${e.response.status}`,
            status: e.response.status,
            statusText: e.response.statusText,
            url: e.config.url
        };
    } else if (e.request) {
        return {
            name: e.name,
            message: e.message,
            status: 400,
            statusText: 'Something happened to the request',
            url: e.config.url
        };
    } else {
        return {
            name: e.name,
            message: e.message,
            status: 500,
            statusText: 'Other error',
            url: e.config.url
        };
    }
};

const apiInstance = axios.create(config);
apiInstance.interceptors.response.use(
    (response: AxiosResponse) => Promise.resolve(response),
    (error: AxiosError) => {
        return Promise.reject(createHttpError(error));
    }
);
export default apiInstance;
