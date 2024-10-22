import { combineSlices } from "@reduxjs/toolkit";
import authSlice from "./auth";


 const slices = combineSlices({
   authSlice
})
export default slices