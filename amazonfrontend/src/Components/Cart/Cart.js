import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, clearCartItems } from '../../Redux/cartAction';
import { selectCartItems, selectTotalQuantity, selectTotalPrice } from '../../Redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

  const handleAddToCart = (productId) => {
    dispatch(addItemToCart(productId));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCartItems());
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.product_id}>
            {item.product_name} - Quantity: {item.quantity}
            <button onClick={() => handleAddToCart(item.product_id)}>+</button>
            <button onClick={() => handleRemoveFromCart(item.product_id)}>-</button>
          </li>
        ))}
      </ul>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: {totalPrice}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
