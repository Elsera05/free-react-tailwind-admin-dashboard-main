import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL;
interface IAuthData {
    email: String,
    password: String
}

export const postSignIn = createAsyncThunk('auth/postSignIn',
    async (data: IAuthData) => {
        const res = await axios.post(`${API_URL}/auth/signin`, {
            email: data.email,
            password: data.password,
        })
        return res
    })

export const postSignUp = createAsyncThunk('auth/postSignUp',
    async (data: IAuthData): Promise<object> => {
    
        const res = await axios.post(`${API_URL}/auth/signup`, {
            email: data.email,
            password: data.password,
        })
        return res.data;
        
    })
