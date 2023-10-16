

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/productActions";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import ViewDetailsIcon from "@mui/icons-material/Visibility";
import AddToCartIcon from "@mui/icons-material/AddShoppingCart";
import {addToCart} from "../Redux/cartSlice";
import ProductDetails from "../components/Product/ProductDetails";
import Rating from '@mui/material/Rating';

function HomePage() {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const handleAddToCart = (productId ,price_per_unit) => {
    dispatch(addToCart({productId ,quantity:1,price_per_unit })); // Dispatch the action to add item to cart
  };


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="h-75">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_HERO_NTA_Day-1_2X_EN._CB575872412_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jup23p1/unrecheroroe/upd/MA_3000._CB576088600_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/Jupiter/JupiterGW/Unrec_Decor_PC_Day1_new._CB575919233_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/GW/desktop/Non_Pea_Unrec_Phase_1_Tallhero_3000x1200._CB577613664_.jpg
"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/Events_23/Jupiter_23/pre_book/GW/FINALCREATIVES_v2/PEAGW/DAY1GW/DAY2GW/D97892620_ITEL_P55_GW_Jupiter23_PC_Hero_3000x1200_1._CB575934035_.jpg
"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="
		https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Jupiter2023GW/Homepage_DesktopHeroTemplate_3000x1200_toys_2x-NEW._CB575816411_.jpg
"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="
		https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/GW/Phase1/Unrec/D98486283_Jupiter1_PC_Hero_3000x1200._CB575915971_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>

        </div>

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
                    Details
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

                    <small>Add Cart</small>
                  </Button>
                </div>
              </div>
            </div>
          ))}

    <ProductDetails product={products}></ProductDetails>
        </div>

      </div>




      </div>

      {/*<pre> {JSON.stringify(auth, null, 4)} </pre>*/}

    </>
  );
}
export default HomePage;
