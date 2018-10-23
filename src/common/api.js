//Base API configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    //Set common parameters for each requesr to the API
    config.params.APPID = 'd9947bfbe4d5f42fa39c0d5e08ff915f';
    config.params.units = 'imperial';
    return config;
}, function (error) {
    return Promise.reject(error);
});