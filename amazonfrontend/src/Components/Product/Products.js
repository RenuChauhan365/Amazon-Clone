import React, { useEffect ,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/productActions";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import ViewDetailsIcon from "@mui/icons-material/Visibility";
import AddToCartIcon from "@mui/icons-material/AddShoppingCart";
import {addToCart} from "../../Redux/cartSlice";
import ProductDetails from "./ProductDetails";
import Rating from '@mui/material/Rating';
import Cart from "../Cart/Cart";
import WishlistIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

const Products = () => {
  const dispatch = useDispatch();
  const [wishlist, setWishlist] = useState([]);

  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToWishlist = (productId) => {
    // Handle adding/removing product to/from wishlist
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  const handleAddToCart = (productId ,price_per_unit) => {
    dispatch(addToCart({productId ,quantity:1,price_per_unit })); // Dispatch the action to add item to cart
  };


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4 box"
              key={product.id}
            >
              <div className="card">

                <div className="card-body">
                  <div
                    className="card-img-top card-img-cover"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>

                <p style={{ color: "black",  marginLeft:'15px'}}> Price : $ {product.price}</p>
                <p style={{ color: "black" , marginLeft:'15px' }}> In Stock : {product.stock}</p>

                 <Rating
                  name="product-rating"
                  value={product.ratings}
                  precision={0.5}
                  readOnly >

                 </Rating>


                 <hr/>

                <div className="d-flex">
                  <Button
                    component={NavLink}
                    to={`/product/details/${product.id}`}
                    variant="contained"
                    color="primary"
                    startIcon={<ViewDetailsIcon />}
                    sx={{
                      backgroundColor: "#ffffff",
                      color: "black",
                      margin: "15px 10px 15px 10px",

                      "&:hover": { backgroundColor: "#edbee8" },
                    }}
                  >

                  </Button>

                  <Button
                  onClick={() => handleAddToCart(product.id , product.price)}
                    variant="contained"
                    color="primary"
                    startIcon={<AddToCartIcon/>}
                    sx={{
                      backgroundColor: "#ffffff",
                      color: "black",
                      margin: "15px 15px 15px 15px",
                      "&:hover": { backgroundColor: "#1976d2" },  }} >


                  </Button>

                  <IconButton
                    onClick={() => handleAddToWishlist(product.id)}
                    color={isInWishlist(product.id) ? "secondary" : "danger"}
                  >
                    <WishlistIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}

    <ProductDetails product={products}></ProductDetails>
        </div>

      </div>
    </>
  );
};

export default Products;
