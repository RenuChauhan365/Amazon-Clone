import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
import {  Routes, Route } from "react-router-dom";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Pagenotfound from "./Pages/Pagenotfound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./components/Product/Products";
import Header from "./components/Layout/Header";
import ProductDetails from "./components/Product/ProductDetails";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import OrderListing from "./components/Order/OrderListing";
import { useAuth } from "./Context/Auth";
function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/auth/register" element={<Register />}></Route>

        <Route path="/auth/login" element={<Login />}></Route>

        <Route path="/product" element={<Product />}>

        </Route>

        <Route path="/product/details/:pid" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<OrderListing />} />
        {/*{isAuthenticated && (
          <>

          </>
        )}*/}

        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
