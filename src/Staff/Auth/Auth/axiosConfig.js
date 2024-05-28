import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert("ERROR FROM AXIOS: " + error);
    console.log("EROR FROM AXIOSCONFIG: " + error);
    return Promise.reject(error);
  }
);

export default axios;
/* Request Interceptor: Adds a token from localStorage to request headers if available.
Response Interceptor: Checks for a 401 error (unauthorized). If found, it removes the token from localStorage and redirects to the login page. */
