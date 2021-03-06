/**
 * 请求工具
 */
import axios, { AxiosInstance, AxiosResponse } from 'axios';
export default class Http {
  $http: AxiosInstance;
  constructor() {
    this.$http = axios.create({});
    this.init();
  }
  init() {
    this._defaultsConfig();
    this._interceptRequest();
    this._interceptResponse();
  }
  _defaultsConfig() {
    this.$http.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
    this.$http.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
    this.$http.defaults.responseType = 'json';
    this.$http.defaults.validateStatus = function (status) {
      return true;
    };
  }
  _interceptRequest() {
    this.$http.interceptors.request.use(
      (request) => request,
      (error) => Promise.reject(error)
    );
  }
  _interceptResponse() {
    this.$http.interceptors.response.use(
      (response) => {
        if (response.status === 200 && response.data && response.data.code === 0) {
          return Promise.resolve(response);
        }
        return Promise.reject(response);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  get<T = any, R = AxiosResponse<T>>(url: string, params: any): Promise<R> | Promise<any> {
    return this.$http.get(url, params);
  }
  post<T = any, R = AxiosResponse<T>>(url: string, params: any): Promise<R> | Promise<any> {
    return this.$http.post(url, params);
  }
}
