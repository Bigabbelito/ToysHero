import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Chaeckout'
import ProductDetails from '../pages/procductDetails'
import Shop from '../pages/Shop'
import Login from '../pages/Login'
import SIgnup from '../pages/SIgnup'
import ProtectedRoute from './ProtectedRoute'

import Addproducts from '../admin/Addproducts'
import AllProducts from '../admin/AllProducts'
import Dahboard from '../admin/Dashboard'


const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='home' />}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='/*' element={<ProtectedRoute/>}>

    <Route path='checkout' element={<Checkout/>}/>
    <Route path='dashboard' element={<Dahboard/>}/>
    <Route path='dashboard/all-products' element={<AllProducts/>}/>
    <Route path='dashboard/add-product' element={<Addproducts/>}/>
    </Route>
   
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<SIgnup/>}/>
  </Routes>
  
}

export default Routers
