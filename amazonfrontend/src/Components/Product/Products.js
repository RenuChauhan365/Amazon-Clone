import React, { useEffect ,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/productActions";
import { NavLink } from "react-router-dom";
import { Button ,Pagination,CircularProgress  } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ViewDetailsIcon from "@mui/icons-material/Visibility";
import AddToCartIcon from "@mui/icons-material/AddShoppingCart";
import ProductDetails from "./ProductDetails";
import Rating from '@mui/material/Rating';
import WishlistIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import {toast} from 'react-toastify'
import { selectCartItems } from "../../Redux/cartSlice";
import { updateTotalQuantity ,removeFromCart } from "../../Redux/cartSlice"; // Add this import
import { addItemToCart } from '../../Redux/cartAction';
import { isAuthenticated, useAuth } from "../../Context/Auth"; // Import useAuth from the correct path

const Products = () => {

  const { auth } = useAuth(); // Use the useAuth hook inside the functional component
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); // Initialize quantity with a default value of 1
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState(1); // Current page number
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const searchQuery = useSelector((state) => state.search.query); //  search state in Redux
  const [itemsPerPage] = useState(8); // Number of items per page

  const cartItems = useSelector( state => state.cart.items);


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


  const handleAddToCart = (productId , quantity,  productPrice , productImage ,productName) => {
    //if (!isAuthenticated()) {
    //  toast.error("Please login to add items to the cart.");
    //  return;
    //}

    const product = {
      ProductId: productId,
      quantity:quantity,
      productPrice: productPrice,
      productImage:productImage,
      productName:productName

    };

    const productInCartIndex = cartItems.findIndex(
      (item) => item.ProductId === productId
    );
    if (productInCartIndex !== -1) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(addItemToCart(product));
    }

    dispatch(updateTotalQuantity());

  };

 // Filter products based on search query
 const filteredProducts = products.filter((product) =>
 product.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  // pagination
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const handlePageChange = (event, value) => {
    setPage(value);
  };

// searching

  if (loading) {
    return  (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress color="success" />
      </div>
    );
  }


  return (
    <>
      <div className="container mt-5">

        <Pagination
          count={Math.ceil(products.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
          shape="rounded"
          size="large"
          style={{ marginBottom: "20px" }}
        />

        <div className="row">
          {currentProducts.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4 "
              key={product.id}
    >
              <div className="card">
              <div className="card-img-top card-img-cover"
                 style={{ backgroundImage: `url(${product.image})` }} > </div>

                <div className="card-body">
              &nbsp;    <strong className="card-title">{product.name}</strong>
              <p className="card-text">{product.description}</p>
                  <p style={{ color: "black",  marginLeft:'15px'}}> Price : $ {product.price}</p>
                <p style={{ color: "black" , marginLeft:'15px' }}> In Stock : {product.stock}</p>


                 <Rating
                  name="product-rating"
                  value={product.ratings}
                  precision={0.5}
                  style={{marginLeft:'15px'}}
                  readOnly >
                 </Rating>



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
                  onClick={() => handleAddToCart(product.id , quantity, product.price , product.image , product.name)}
                    variant="contained"
                    color="primary"
                    startIcon={
                      cartItems.some((item) => item.ProductId === product.id) ? (
                        <DoneIcon style={{ color: "green" }} />
                      ) : (
                        <AddToCartIcon />
                      )
                    }

                    sx={{
                      backgroundColor: "#ffffff",
                      color: "black",
                      margin: "15px 15px 15px 15px",
                      padding:" 0px 45px",
                      "&:hover": { backgroundColor: "#1976d2" },
                       }} >
  {cartItems.some((item) => item.ProductId === product.id) ? "Added" : " "}


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
            </div>
          ))}

    <ProductDetails product={products}></ProductDetails>
        </div>

      </div>
    </>
  );
};

export default Products;
