import React  , {useState} from "react";
import { Card, Button, CardContent, CardActions, Typography } from "@mui/material";


const CartItem = ({ item }) => {

  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity >=1) {
      setQuantity(quantity - 1);
    }
  };


  console.log("all items" , item)


  return (
    <div className="cart-products">
      <div className="col mb-4 ">
        <Card className=" p-5">

          <CardContent >
            <Typography variant="h5" component="div">
               Name:{item.product ? item.product.name : item.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Price: $ {item.price_per_unit}
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
