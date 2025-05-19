import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/postBlog", // cambia el puerto si tu backend es diferente
  timeout: 8000,
});

export default api;