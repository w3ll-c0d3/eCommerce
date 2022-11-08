// exportar APIs deste arquivo
import axios from "axios";

export const gitApi = axios.create({
    baseURL: "https://api.github.com/users"
})

export const eApi = axios.create({
    baseURL: "http://localhost:8080"
})