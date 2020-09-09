import axios from "axios";
import { apiInfo } from "@/constants";
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 50000, // 请求超时时间
  baseURL: apiInfo.baseUrl,
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 设置请求头 token等
    config.headers.Accept = "application/vnd.github.v3+json";
    return config;
  },
  (error) => {
    // Do something with request error
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  (response) => {
    // 设置统一响应错误信息
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
