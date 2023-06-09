import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Chaeckout'
import ProductDetails from '../pages/procductDetails'
import Shop from '../pages/Shop'
import Login from '../pages/Login'
import SIgnup from '../pages/SIgnup'
import ProtectedRoute from './ProtectedRoute'

 import AddProduct from '../admin/AddProduct'
 import AllProducts from '../admin/AllProducts'
import Dashboard from '../admin/Dashboard'
import Users from '../admin/Users'


const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='home' />}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='/:id' element={<ProductDetails/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='/*' element={<ProtectedRoute/>}>

    <Route path='checkout' element={<Checkout/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='dashboard/all-products' element={<AllProducts/>}/>
    <Route path='dashboard/add-product' element={<AddProduct/>}/>
    <Route path='dashboard/users' element={<Users/>}/>
    </Route>
   
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<SIgnup/>}/>
  </Routes>
  
}

export default Routers
