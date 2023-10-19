import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  clearCart } from "../../Redux/cartSlice";
import {removeItemFromCart ,clearCartItems} from  "../../Redux/cartAction";
import { Button, List, ListItem } from "@mui/material";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../../Redux/cartSlice";



const Cart = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.items);

  const totalPrice = useSelector((state) => state.cart.totalPrice.toFixed(2));
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);


console.log("cartItems in  remove " , cartItems)


  const handleRemoveFromCart = (ProductId , productPrice , quantity) => {
    dispatch(removeItemFromCart({ProductId, productPrice, quantity}));
  };


  const handleClearCart = () => {
    dispatch(clearCartItems());
  };

  const handleCheckout = () => {
    navigate("/order");
  };

  return (
    <div>
      <div className="cartlistdiv d-flex">
        <div>
          <p>Total Quantity: {totalQuantity}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
        <div>
          <Button
            onClick={handleCheckout}
            variant="contained"
            color="success"
            style={{ float: "right", marginLeft: "200px" }}
          >
            Checkout
          </Button>
          
          <Button
            onClick={handleClearCart}
            variant="contained"
            color="info"
            style={{ float: "right", marginLeft: "200px" }}
          >
            Clear Cart
          </Button>
        </div>
      </div>

      <List>
        {cartItems.map((item) => (
          <ListItem key={item.ProductId} className="d-flex">
            <CartItem item={item} key={item.ProductId}></CartItem>

            <Button
              onClick={() => handleRemoveFromCart(item.ProductId)}
              variant="contained"
              color="secondary"
              style={{ marginLeft: "50px" }}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Cart;
