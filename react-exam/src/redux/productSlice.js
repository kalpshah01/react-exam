import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createProduct=createAsyncThunk("productSlice/createProduct",async (productData)=>{
    const response= await axios.post("http://localhost:3000/products",productData);
    return response.data;
});
export const fetchProduct=createAsyncThunk("productSlice/fetchProduct",async ()=>{
    const response= await axios.get("http://localhost:3000/products");
    return response.data;
});
export const deleteProduct=createAsyncThunk("productSlice/deleteProduct",async(id)=>{
    await axios.delete(`http://localhost:3000/products/${id}`);
    return id;
});
export const editProduct=createAsyncThunk("productSlice/editProduct",async({id,editData})=>{
    const response=await axios.put(`http://localhost:3000/products/${id}`,editData);
    return response.data;
});


const productSlice=createSlice({
    name:"productSlice",
    initialState:{
        loading:false,
        products:[],
        error:false
    },
    reducers:{

    },
    extraReducers:(builder)=>{
builder.addCase(createProduct.pending,(state,action)=>{
state.loading=true;
}).addCase(fetchProduct.pending,(state,action)=>{
state.loading=true;
}).addCase(editProduct.pending,(state,action)=>{
state.loading=true;
}).addCase(deleteProduct.pending,(state,action)=>{
state.loading=true;
}).addCase(createProduct.rejected,(state,action)=>{
state.loading=false;
state.error=true;
}).addCase(fetchProduct.rejected,(state,action)=>{
state.loading=false;
state.error=true;
}).addCase(editProduct.rejected,(state,action)=>{
state.loading=false;
state.error=true;
}).addCase(deleteProduct.rejected,(state,action)=>{
state.loading=false;
state.error=true;
}).addCase(createProduct.fulfilled,(state,action)=>{
    state.loading=false;
    state.products.push(action.payload);
}).addCase(fetchProduct.fulfilled,(state,action)=>{
    state.loading=false;
    state.products=action.payload;
}).addCase(editProduct.fulfilled,(state,action)=>
{
    state.loading=false;
    state.products=state.products.map((product)=>product.id === action.payload.id ? action.payload : product)
}).addCase(deleteProduct.fulfilled,(state,action)=>{
    state.loading=false;
    state.products=state.products.filter((product)=> product.id !== action.payload)
})
}
})


export default productSlice.reducer