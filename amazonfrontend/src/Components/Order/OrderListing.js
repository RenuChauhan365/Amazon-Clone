import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = styled((theme) => ({
  orderListing: {
    backgroundColor: "#f9f9f9",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  },
  listItem: {
  },
}));


const OrderListing = () => {

  const classes = useStyles();

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice.toFixed(2));

  console.log("cartItems in order listing " , cartItems)
  return (
    <div className={classes.orderListing}>

      <h2  className="text-center">Order History</h2>
      <div className="d-flex flex-column">
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <button className="btn btn-success"> Place Order </button>
       </div>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.product_id} className={classes.listItem}>
            <img src={item.productImage} alt="productImage" />
            <ListItemText
              primary={item.productName}
              secondary={`Quantity: ${item.quantity} - Price: $${item.productPrice}`}
            />
          </ListItem>
        ))}
      </List>
    </div>


  );
};

export default OrderListing;
