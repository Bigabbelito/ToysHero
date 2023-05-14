import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Chaeckout'
import ProductDetails from '../pages/procductDetails'
import Shop from '../pages/Shop'
import Login from '../pages/Login'
import SIgnup from '../pages/SIgnup'
import ProtectedRoute from './ProtectedRoute'



const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='home' />}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<ProtectedRoute>
      <Checkout/>
    </ProtectedRoute>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<SIgnup/>}/>
  </Routes>
  
}

export default Routers
