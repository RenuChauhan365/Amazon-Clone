import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../../Redux/cartSlice";
import { Button, List, ListItem } from "@mui/material";
import CartItem from "./CartItem";
import {useNavigate} from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice.toFixed(2));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };


  const handleCheckout = () =>{
navigate("/order")
  }



  return (
    <div>

      <div className="cartlistdiv d-flex">

 <div>

        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: {totalPrice}</p>
 </div>
 <div>
        <Button onClick={handleCheckout} variant="contained" color="success" style={{float:'right' , marginLeft:'200px'}}>
        Checkout
        </Button>

        <Button onClick={handleClearCart} variant="contained" color="info" style={{float:'right' , marginLeft:'200px'}}>
               Clear Cart
        </Button>


 </div>


      </div>



      <List>
        {cartItems.map((item) => (
          <ListItem key={item.product_id} className="d-flex">
            <CartItem item={item} />
            <Button
              onClick={() => handleRemoveFromCart(item.product_id)}
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
