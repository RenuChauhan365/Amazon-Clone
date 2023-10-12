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

const Header = () => {
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
            marginLeft: "auto",
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
            to="/register"
            color="inherit"
            style={{ textDecoration: "none", color: "white", marginLeft: 20 }}
          >
            Sign Up
          </NavLink>
          <IconButton color="inherit" style={{ marginLeft: 20 }}>
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
