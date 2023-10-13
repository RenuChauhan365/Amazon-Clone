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
        <Route path="/register" element={<Register  setLoggedIn={setLoggedIn}/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/login" element={<Login  setLoggedIn={setLoggedIn} />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
        <Route path="/logout"  element={<Logout open={true} handleClose={() => {}} handleLogout={handleLogout} />}
        />
      </Routes>
    </>
  );
}

export default App;
