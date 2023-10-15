import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../../Redux/cartSlice";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice.toFixed(2));
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>

      <div className="cartlistdiv d-flex">

 <div>

        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: {totalPrice}</p>
 </div>
 <div>
        <Button onClick={handleClearCart} variant="contained" color="primary" style={{float:'right' , marginLeft:'200px'}}>
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
