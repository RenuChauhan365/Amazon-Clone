import axios from "axios";
import { addToCart, removeFromCart, clearCart } from "../Redux/cartSlice";

export const addItemToCart = (product) => async (dispatch) => {

  try {
    const {ProductId ,quantity , productPrice ,  productImage   ,productName ,TotalPrice} = product

    console.log("Adding item to cart:", ProductId ,quantity);
    const token = localStorage.getItem("auth");
    console.log("Token : ", token);

    const response = await axios.post(
      `${process.env.REACT_APP_API}/api/cart/add`,


      { ProductId: ProductId, quantity: quantity, productPrice:productPrice, productImage:productImage ,productName:productName  ,TotalPrice:TotalPrice} ,
     { headers: {
        authorization: `Bearer ${token}`
      }}

    )

    console.log("This is a Response",response)
    console.log("API Response Data:", response.data);

    dispatch(addToCart(response.data));
  } catch (error) {
    console.log(error.message);
  }
};


export const removeItemFromCart = (product) => async (dispatch) => {
  try {

    const { ProductId} = product
    console.log("ProductId is --->>" ,ProductId)

    const token = localStorage.getItem("auth");
    console.log("Token : ", token);

   const res =  await axios.delete(`${process.env.REACT_APP_API}/api/cart/remove`,
    {
      headers: {
        authorization: `Bearer ${token}`
      },
      data: {
        ProductId: ProductId
      }
    }
    );

    console.log("API Response Data:", res.data);

    dispatch(removeFromCart(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const clearCartItems = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("auth");
    console.log("Token : ", token);

    await axios.delete(`${process.env.REACT_APP_API}/api/cart/removeAll`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(clearCart());
  } catch (error) {
    console.log(error.message);
  }
};
