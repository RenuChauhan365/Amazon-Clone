import React from "react";
import { useSelector } from "react-redux";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.product_id}>
          <p>{item.product_name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total Price: {item.total_price}</p>
          {/* ... (other item properties) */}
        </div>
      ))}
    </div>
  );
};

export default CartItem;
