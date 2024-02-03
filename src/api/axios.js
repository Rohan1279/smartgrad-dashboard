import axios from "axios";
export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
//  attaches jwt tokens and retries request if token expired
export const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
  // withCredentials: true, // sends cookies with request token
});
