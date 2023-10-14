import "./App.css";
import React , {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Login from "./Pages/Auth/Login";
import Pagenotfound from "./Pages/Pagenotfound";
import Header from "./components/Layout/Header";
import Logout from "./Pages/Auth/Logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./components/Product/Product";

function App() {


 const [isLoggedIn, setLoggedIn] = useState(false); // Define setLoggedIn function
 const handleLogout = () =>{
  setLoggedIn(false)
 }
  return (
    <>
    <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/auth/register" element={<Register  setLoggedIn={setLoggedIn}/>}></Route>
        <Route path="/auth/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/auth/login" element={<Login  setLoggedIn={setLoggedIn} />}></Route>
        <Route path="/auth/logout"  element={<Logout open={true} handleClose={() => {}} handleLogout={handleLogout} />}/>


         <Route path="/product" element ={<Product/> }> </Route>

        <Route path="*" element={<Pagenotfound/>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;



