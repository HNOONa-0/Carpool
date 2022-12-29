import http from "./http";
export const apiUrl='http://localhost:5000';

export const getAllUsers=http.get(`${apiUrl}/list/users`)
export const getUserByName=http.get(`${apiUrl}/list/users`)
export const getUserByEmail=http.get(`${apiUrl}/list/users`)
export const getUserByPhone=http.get(`${apiUrl}/list/users`)


