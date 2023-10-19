import React  , {useState  , useEffect} from "react";
import { Card, Button, CardContent, CardActions, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateCartItemQuantity, removeFromCart } from "../../Redux/cartSlice";
import { incrementQuantity, decrementQuantity } from "../../Redux/cartSlice";


const CartItem = ({ item }) => {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrementQuantity = (ProductId) => {
    dispatch(incrementQuantity({ ProductId }));
  };

  const handleDecrementQuantity = (ProductId) => {
    dispatch(decrementQuantity({ ProductId }));
  };


  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.ProductId));
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
            <Button size="small" color="secondary" variant="outlined"
            onClick={() => handleIncrementQuantity(item.ProductId)}

             >
              +
            </Button>
             &nbsp; {item.quantity}
            <Button size="small" color="secondary" variant="outlined"
            onClick={() => handleDecrementQuantity(item.ProductId)}
            >
              -
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default CartItem;
