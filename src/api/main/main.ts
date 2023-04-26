import axios from "axios";

const API = axios.create({
  baseURL: "url",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
