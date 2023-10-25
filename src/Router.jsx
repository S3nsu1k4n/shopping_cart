import React from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ErrorPage from "./ErrorPage";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const RouterComponent = ({items, setItems}) => {

  return (
    <>
    <BrowserRouter>
    <Navbar items={items}/>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart items={items} />} />
        <Route path="/product/:id" element={<Product items={items} setItems={setItems} />} />
      </Routes>
      </BrowserRouter>
    </>
    );
}

export default RouterComponent;