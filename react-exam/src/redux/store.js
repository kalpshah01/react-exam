import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productSlice"


const store=configureStore({
    reducer:{
        product:ProductSlice
    }
})

export default store