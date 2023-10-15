import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = styled((theme) => ({
  orderListing: {
    // Define your Attractive style here
    // Example styles:
    backgroundColor: "#f9f9f9",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  },
  listItem: {
    // Additional styles for list items if needed
  },
}));


const OrderListing = () => {

  const classes = useStyles();

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className={classes.orderListing}>
      <h2>Order Summary</h2>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.product_id} className={classes.listItem}>
            <ListItemText
              primary={item.product ? item.product.name : item.name}
              secondary={`Quantity: ${item.quantity} - Price: $${item.price_per_unit * item.quantity}`}
            />
          </ListItem>
        ))}
      </List>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default OrderListing;
