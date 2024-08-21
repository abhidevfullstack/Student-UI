import axios from "axios";
import { ADMIN_API_BASE_URL } from "../constants/ApiConstants";

export function login(credentials){
    return axios.post(`${ADMIN_API_BASE_URL}/login`,credentials);
}

export function storeToken(token){
    localStorage.setItem("token",token);
}

export function removeToken(){
    localStorage.removeItem("token");
}

export function getToken(){
    return localStorage.getItem("token");
}