import React, { useState, useEffect } from 'react'
import { createProduct, deleteProduct, editProduct, fetchProduct } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductList() {
    const [search,setSearch]=useState("");
    const [sort, setSort] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });
  const [editId, setEditId] = useState(null);

  const handleedit = (products) => {
    setProductData({
title:products.title,
price:products.price,
image:products.image,
category:products.category
    });
    setEditId(products.id);
  };
  const handlechange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(
        editProduct({
          id: editId,
          editData: productData,
        }),
      );
    } else {
      dispatch(createProduct(productData));
    }

    setProductData({
      title: "",
      price: "",
      image: "",
      category: ""
    });
    setEditId(null);
  };

  const handledelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const filterBooking=products.filter((product)=>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  const sortbooking=[...filterBooking];

  if(sort === "low"){
    sortbooking.sort((a, b) => a.price - b.price);  
  }
  if(sort === "high"){
    sortbooking.sort((a, b) => b.price - a.price);  
  }
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <div className="product-list-container">
      <div style={{backgroundColor: 'white', padding: '2rem', borderRadius: '8px', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', color: 'darkslategray'}}>
        <h2 style={{marginBottom: '1.5rem', color: 'darkslategray'}}>Add/Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={handlechange}
              value={productData.title}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              onChange={handlechange}
              value={productData.price}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image"
              className="form-control"
              onChange={handlechange}
              placeholder="enter image name like img1.png "
              value={productData.image}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              className="form-control"
              onChange={handlechange}
              value={productData.category}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            {editId ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
        <div className="search-sort-container">
          <input 
            type="search" 
            name='search' 
            placeholder='Search by title...' 
            onChange={(e)=>setSearch(e.target.value)} 
            value={search}
            className="form-control"
            style={{flex: 1, minWidth: '200px', borderColor: 'lightgray'}}
          /><br/><br/>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="form-control"
            style={{minWidth: '150px', borderColor: 'lightgray'}}
          >
            <option value="">Default</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
        <table align='center' >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortbooking.map((product,index) => (
            <tr key={product.id}>
              <td>{index+1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <img src={product.image} alt={product.title} style={{width: '50px', height: '50px'}} />
              </td>
              <td>
                <button onClick={() => handleedit(product)}>Edit</button>
                {" "}
                <button onClick={() => handledelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

  )
}

export default ProductList
