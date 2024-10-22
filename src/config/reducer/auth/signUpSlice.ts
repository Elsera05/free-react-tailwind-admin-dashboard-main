import { createSlice } from "@reduxjs/toolkit";
import { postSignUp } from "./authApi";
import { RootState } from "@reduxjs/toolkit/query";

export interface SignUpState {
    user: null | object;
    status: 'idle' | 'loading' | 'success' | 'error';
    message: null | string;
}

const initialState: SignUpState = {
    user: null,
    status: 'idle',
    message: null,
}


export const signUpSlice = createSlice({
    name: "signup",
    initialState,
    reducers: { 
    },
    extraReducers: (builder) => { 
        builder.addCase(postSignUp.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(postSignUp.fulfilled, (state, action) => {
            console.log("Fulfilled Payload:", action.payload); 
            state.status = 'success'
            state.user = action.payload.data;
            state.message = action.payload.message;
        })
        builder.addCase(postSignUp.rejected, (state, action) => {
            console.log("Rejected Payload:", action.payload); 
            state.status = 'error'
            state.message = action.payload?.data.message
        })
    }
})

export { postSignUp }
export const selectUser = (state:RootState)=> state.signup.user
// export const selectUser = (state: { signup: SignUpState }) => state.signup.user
export default signUpSlice.reducer // selector
