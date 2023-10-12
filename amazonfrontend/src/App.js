import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Login from "./Pages/Auth/Login";
import Pagenotfound from "./Pages/Pagenotfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
