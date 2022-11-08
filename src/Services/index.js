// exportar APIs deste arquivo
import axios from "axios";

export const gitApi = axios.create({
    baseURL: "https://api.github.com/users"
})

export const ecommerceAPI = axios.create({
    baseURL: "https://backend-webdev.herokuapp.com"
})