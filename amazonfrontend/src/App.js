import "./App.css";
import React , {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Login from "./Pages/Auth/Login";
import Pagenotfound from "./Pages/Pagenotfound";
import Header from "./Components/Layout/Header";
import Logout from "./Pages/Auth/Logout";
import Product from "./Pages/User/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  const product = {
    name: 'Sample Product',
    description: 'This is a sample product description.',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 19.99,
    img: 'https://images.pexels.com/photos/17132133/pexels-photo-17132133/free-photo-of-a-fujifilm-xt4-camera-with-a-lens.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    stock :'12',
     ratings : '5'

  };


 const [isLoggedIn, setLoggedIn] = useState(false); // Define setLoggedIn function
 const handleLogout = () =>{
  setLoggedIn(false)
 }
  return (
    <>
    <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage product={product} />}></Route>
        <Route path="/auth/register" element={<Register  setLoggedIn={setLoggedIn}/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/login" element={<Login  setLoggedIn={setLoggedIn} />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
        <Route path="/logout"  element={<Logout open={true} handleClose={() => {}} handleLogout={handleLogout} />}/>
        <Route path="/product" element ={<Product product={product} /> }></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;



