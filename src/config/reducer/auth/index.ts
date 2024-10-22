import { combineSlices } from "@reduxjs/toolkit";
import { signInSlice } from "./signInSlice";
import { signUpSlice } from "./signUpSlice";


 const authSlices = combineSlices(
   signInSlice,
   signUpSlice
)
export default authSlices


//combineslice ini bawaan dari redux toolkit


// import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

// const initialState = {
//     user: null,
//     token: null
// }

// export const authSlice = createSlice({
//     name:"auth",
//     initialState,
//     reducers:{
//     },
//     extraReducers: {}
// })