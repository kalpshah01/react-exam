import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'

import Productform from './Components/Productform'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/dashboard' element={<PrivateRoute>
      <Productform/>
      </PrivateRoute>}></Route>
      <Route path='/productlist' element={<PrivateRoute>
      <ProductList/>
      </PrivateRoute>}></Route>

   </Routes>
   </>
  )
}

export default App
