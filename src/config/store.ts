import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducer";

//redux store digunakan sebagai gudang data
export const store = configureStore({
    reducer: reducers, //tempat berkumpulnya rak data
    devTools: true, //config untuk debug redux
})

//state adalah tempat menampung data yang ada di redux 
export type Rootstate = ReturnType<typeof store.getState>

//dispatch adalah mengubah , menambah data di state
// untuk mengubah , menambah data di state
export type AppDispatch = typeof store.dispatch