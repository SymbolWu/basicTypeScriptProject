import axios, { AxiosInstance } from "axios";

interface ServiceType extends AxiosInstance {
  genCancelSource?: any;
}
class Service {
  public request: ServiceType;
  constructor() {
    this.request = axios.create({
      timeout: 50000, // 请求超时时间
    });
    axios.CancelToken;
    this.requestInterceptors();
    this.responseInterceptors();
    this.request.genCancelSource = this.genCancelSource;
  }
  genCancelSource = () => {
    return axios.CancelToken.source();
  };
  requestInterceptors = () => {
    this.request.interceptors.request.use(
      (config) => {
        // 设置请求头 token等
        // config.headers.Accept = "application/vnd.github.v3+json";
        // config.headers = {
        //   "Content-Type": "application/x-www-form-urlencoded",
        // };
        if (config.method === "GET" || config.method === "get") {
          config.params = config.params || {};
          config.params.t = new Date().valueOf(); //添加时间戳
        }
        return config;
      },
      (error) => {
        // Do something with request error
        Promise.reject(error);
      }
    );
  };
  responseInterceptors = () => {
    // response 拦截器
    this.request.interceptors.response.use(
      (response) => {
        // 设置统一响应错误信息
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };
}
export default new Service().request;
