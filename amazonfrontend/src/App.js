import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Pages/Auth/Register'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import Login from './Pages/Auth/Login'
import Pagenotfound from './Pages/Pagenotfound'

function App() {
  return (
    <Router> {/* Move the <Router> component here to wrap all the routes */}
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Pagenotfound/>}></Route>
      </Routes>
      <Footer />
    </>
  </Router>
  );
}

export default App;
