import {Routes,Route} from "react-router-dom"
import { Login } from "../AllPages/Login"
import { Signup } from "../AllPages/Signup"
import {  Books } from  "../AllPages/Books"
import { Cart } from "../AllPages/Cart"
import { PrivateRoute } from "../PrivateRoute/PrivateRoute"
import DetailPage from "../AllPages/DetailPage"
import { Checkout } from "../AllPages/Checkout"

export const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Signup/>}/> 
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/book" element={<PrivateRoute><Books/></PrivateRoute>}/>
        <Route path="/book/:id" element={<PrivateRoute><DetailPage/></PrivateRoute>}/>
        <Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>}/>
    </Routes>
}