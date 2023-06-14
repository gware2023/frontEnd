import axios from "axios";

const API = axios.create({
  baseURL: "http://neuma.iptime.org:8080",
  headers: {},
});

export default API;
