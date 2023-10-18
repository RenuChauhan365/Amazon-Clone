import React  , {useState  , useEffect} from "react";
import { Card, Button, CardContent, CardActions, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateCartItemQuantity, removeFromCart } from "../../Redux/cartSlice";


const CartItem = ({ item }) => {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);


  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    dispatch(updateCartItemQuantity({ productId: item.product_id, quantity: quantity + 1 }));

  };

  const handleDecrement = () => {
    if (quantity >=1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      dispatch(updateCartItemQuantity({ productId: item.product_id, quantity: quantity - 1 }));

    }
  };


  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.product_id));
  };

  return (
    <div className="cart-products">
      <div className="col mb-4 ">
        <Card className=" p-5">

          <CardContent >
            <img src={item.productImage} alt="" />
            <Typography variant="h5" component="div">
              {item.productName}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Price: $ {item.productPrice}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="secondary" variant="outlined" onClick={handleIncrement}>
              +
            </Button>
             &nbsp; {quantity}
            <Button size="small" color="secondary" variant="outlined" onClick={ handleDecrement}>
              -
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default CartItem;
