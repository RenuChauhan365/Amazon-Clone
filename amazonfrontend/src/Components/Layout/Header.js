import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/Auth";



const Header = () => {

  const [auth, setAuth] = useAuth();


  const handleLogout = () => {
    setAuth({
      user: null,
      token: "",
    });

    localStorage.removeItem("auth");

  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
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
            style={{ marginRight: 5 }}
          >
            <SearchIcon />
          </IconButton>
        </div>

        <div style={{ display: "flex" }}>
          <NavLink
            to="/"
            color="inherit"
            style={{ textDecoration: "none", color: "white", marginLeft: 20 }}
          >
            Home
          </NavLink>

          <NavLink
            to="/"
            color="inherit"
            style={{ textDecoration: "none", color: "white", marginLeft: 20 }}
          >
            Order
          </NavLink>

          <NavLink
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
                to="/auth/register"
                color="inherit"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: 20,
                  marginRight:2
                }}
              >
                SignUp /
              </NavLink>
              <NavLink
                to="/auth/login"
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
                to="/auth/login"
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
            style={{ textDecoration: "none", color: "white", marginLeft: 20 }}
          >
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </NavLink>
        </div>

        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
