import axios from "axios";
import { STUDENT_API_BASE_URL } from "../constants/ApiConstants";

export function save(studentData){
    return axios.post(STUDENT_API_BASE_URL,studentData)
}

export function getAll(){
    return axios.get(STUDENT_API_BASE_URL)
}

export function getById(id){
    return axios.get(`${STUDENT_API_BASE_URL}/${id}`)
}

export function remove(id){
    return axios.delete(`${STUDENT_API_BASE_URL}/${id}`)
}

export function update(id,studentData){
    return axios.put(`${STUDENT_API_BASE_URL}/${id}`,studentData)
}