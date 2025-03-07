import React from "react";
import Navber from "./components/Navber/Navber";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Cart from "./pages/Cart/cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
const App = ()=>{
    return(
        <div className="app">
        <Navber/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/order" element={<PlaceOrder/>}/>
        </Routes>
        </div>
    )
}
export default App;