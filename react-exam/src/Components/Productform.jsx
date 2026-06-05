import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../redux/productSlice'

function Productform() {

  const dispatch=useDispatch();
  const [productForm,setProductForm]=useState({
    title:"",
    price:"",
    image:"",
    category:""
  })
  const handleChange=(e)=>{
setProductForm({
  ...productForm,
  [e.target.name]:e.target.value
})
  }
  const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(productForm);
    dispatch(createProduct(productForm));
    setProductForm({
title:"",
    price:"",
    image:"",
    category:""
  
    });

  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add New Product</h2>
        <div className="form-group">
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' className="form-control" onChange={handleChange} value={productForm.title} required/>
        </div>
        <div className="form-group">
          <label htmlFor='price'>Price</label>
          <input type='number' name='price' className="form-control" onChange={handleChange} value={productForm.price} required/>
        </div>
        <div className="form-group">
          <label htmlFor='image'>Image URL</label>
          <input type='text' name='image' className="form-control" onChange={handleChange} value={productForm.image} placeholder="https://..." required/>
        </div>
        <div className="form-group">
          <label htmlFor='category'>Category</label>
          <input type='text' name='category' className="form-control" onChange={handleChange} value={productForm.category} required/>
        </div>
        <button type='submit' className="btn-submit">Add Product</button>
        <div style={{marginTop: '1rem', textAlign: 'center'}}>
          <a href="/productlist" style={{color: 'mediumpurple', fontWeight: '500'}}>View Products</a>
        </div>
      </form>
    </div>
  )
}

export default Productform
