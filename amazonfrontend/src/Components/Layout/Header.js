import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector ,useDispatch } from "react-redux";
import React, {useEffect ,useState}from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/Auth";
import { selectCartItems } from "../../Redux/cartSlice"; // Import the selectCartItems selector
import { setSearchQuery } from '../../Redux/searchSlice';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase
} from "@mui/material";


const Header = () => {
  const totalQuantity = useSelector(state =>  state.cart.totalQuantity);

  console.log("totalQuantity is " ,totalQuantity)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQueryLocal] = useState('');
  const [auth, setAuth] = useAuth();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);


  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQueryLocal(query);
    dispatch(setSearchQuery(query)); // Dispatch the action to update search query in the Redux store
  };


  const handleLogout = () => {
    setShowLogoutAlert(true);
  };


  useEffect(() => {
    if (totalQuantity) {
      localStorage.setItem("totalQuantity", totalQuantity);
    } else {
      localStorage.setItem("totalQuantity", 0);
    }
  }, [totalQuantity]);

  const confirmLogout = () => {
    setAuth({
      user: null,
      token: ""
    });

    localStorage.removeItem("auth");
    localStorage.removeItem("userData")
    localStorage.removeItem("totalPrice")
    localStorage.removeItem("cart")
    localStorage.removeItem("productDetails")
    localStorage.removeItem("totalQuantity")





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
            value={searchQuery}
            onChange={handleSearchInputChange}
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

            className="nav-link"
            style={{ textDecoration: "none", color: "white", marginLeft: 20 }}
          >
            Home
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
          !auth.token? (
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
          className="nav-link"
            to="/order"
            color="inherit"

            style={{ textDecoration: "none", color: "white", marginLeft: 20 }}
          >
            Order
          </NavLink>
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



            </>
          )}


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
