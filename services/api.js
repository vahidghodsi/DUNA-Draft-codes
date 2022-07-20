import axios from "axios";

// Add a request interceptor
export const api = axios.create();

// api.interceptors.request.use(
//   async function (config) {
//     //if token is found add it to the header
//     config.headers["Accept-Language"] = "fa-IR";
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return promise.reject(error);
//   }
// );
