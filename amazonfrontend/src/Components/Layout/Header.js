
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/Auth";
import { useSelector } from "react-redux";
import React, {useEffect ,useState}from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase
} from "@mui/material";



const Header = () => {

  const [auth, setAuth] = useAuth();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Get total quantity from Redux store
  const navigate = useNavigate();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);


  const handleLogout = () => {
    setShowLogoutAlert(true);
  };

useEffect(() => {
  console.log("Total Quantity Updated:", totalQuantity);
}, [totalQuantity]);

  const confirmLogout = () => {
    setAuth({
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/auth/login");
    setShowLogoutAlert(false);
  };


  return (

    <>
    <div  className="header">
    <AppBar  position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          <img
            src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White.png"
            alt="photo"
            style={{ width: "100px", height: "auto" }}
          ></img>
        </Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: 4,
            backgroundColor: "white",
            padding: "5px 40px",
          }}
        >
          <InputBase
            placeholder="Search Amazon.in"
            inputProps={{ "aria-label": "search" }}
            style={{ paddingLeft: 10 }}
          />
          <IconButton
            type="submit"
            aria-label="search"
            style={{ margainRight: 5 }}
          >
            <SearchIcon />
          </IconButton>
        </div>

        <div style={{ display: "flex" }}>
          <NavLink
            to="/"
            color="inherit"

            className="nav-link"
            style={{ textDecoration: "none", color: "white", marginLeft: 20 }}
          >
            Home
          </NavLink>

          <NavLink
          className="nav-link"
            to="/order"
            color="inherit"

            style={{ textDecoration: "none", color: "white", marginLeft: 20 }}
          >
            Dashboard
          </NavLink>

          <NavLink
          className="nav-link"
            to="/product"
            color="inherit"

            style={{ textDecoration: "none", color: "white", marginLeft: 20 }}
          >
            Product
          </NavLink>

          {
          !auth.user? (
            <>
              <NavLink
              className="nav-link"
                to="/auth/register"

                color="inherit"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: 20,
                  marginRight:2,


                }}
              >
                SignUp /
              </NavLink>
              <NavLink
                to="/auth/login"
                className="nav-link"
                color="inherit"

                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft:1,

                }}
              >
              Login
              </NavLink>




            </>
          ) : (
            <>
              <NavLink
                onClick={handleLogout}
                className="nav-link"
                color="inherit"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: 20,
                }}
              >
                Logout
              </NavLink>




            </>
          )}


        <div style={{ display: "flex" }}>
          <NavLink
            to="/cart"
            color="inherit"
            className="nav-link"
            style={{ textDecoration: "none", color: "white", marginLeft: 20 }}
          >
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <span className="cart-quantity"  style={{ marginLeft: 5 }}>{totalQuantity}</span>

          </NavLink>
        </div>


        </div>

        {showLogoutAlert && (
                  <div>
                    <p>Are you sure you want to logout?</p>
                    <button onClick={confirmLogout}>Yes</button>
                    <button onClick={() => setShowLogoutAlert(false)}>No</button>
                  </div>
                )}
      </Toolbar>
    </AppBar>


    </div>

    </>
  );
};

export default Header;
