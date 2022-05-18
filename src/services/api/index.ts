import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.2.193:8081",
});

export default api;