import {  createSlice } from "@reduxjs/toolkit";
import { postSignIn } from "./authApi";


export interface SignInState {
    user: null | object
    token: null | string
    status: 'idle' | 'loading' | 'success' | 'error'
    message: null | string
}


const initialState:SignInState = {
    user: null,
    token: null,
    status: 'idle',
    message: null,
}

export const signInSlice = createSlice({
    name:"signin",
    initialState,
    reducers:{ //synchronus actions /functions
    },
    extraReducers: (builder) => { //asyncschronus actions /functions
        builder.addCase(postSignIn.pending, (state) =>{
            state.status = 'loading'
        })
        builder.addCase(postSignIn.fulfilled, (state,action) =>{
            console.log("Fulfilled Payload:", action.payload); 
            state.status = 'success'
            state.user = action.payload.data.data.user
            state.token = action.payload.data.data.token
            state.message = action.payload.data.data.data.message
        })
        builder.addCase(postSignIn.rejected, (state,action) =>{
            console.log("rejected Payload:", action.payload); 
            state.status = 'error'
            state.message = action.payload?.data.message
        })
    }
})  

export {postSignIn}
export const selectUser = (state: {signin: SignInState}) => state.signin.user
export default signInSlice.reducer //selector