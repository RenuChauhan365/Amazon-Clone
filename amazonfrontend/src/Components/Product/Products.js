import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/productActions";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import ViewDetailsIcon from "@mui/icons-material/Visibility";
import AddToCartIcon from "@mui/icons-material/AddShoppingCart";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  console.warn(products);
  const loading = useSelector((state) => state.products.loading);

  console.log("Products:", products);
  console.log("Loading:", loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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

                <div style={{ color: "black" }}>$ {product.price}</div>
                <div style={{ color: "black" }}>{product.stock}</div>
                <div style={{ color: "black" }}>{product.ratings}</div>

                <div className="d-flex">
                  <Button
                    component={NavLink}
                    to="/details"
                    variant="contained"
                    color="primary"
                    startIcon={<ViewDetailsIcon />}
                    sx={{
                      backgroundColor: "#ffffff",
                      color: "black",
                      margin: "15px 10px 15px 10px",

                      "&:hover": { backgroundColor: "pink" },
                    }}
                  >
                    Details
                  </Button>
                  <Button
                    component={NavLink}
                    to="/cart"
                    variant="contained"
                    color="primary"
                    startIcon={<AddToCartIcon />}
                    sx={{
                      backgroundColor: "#ffffff",
                      color: "black",
                      margin: "15px 15px 15px 15px",
                      "&:hover": { backgroundColor: "#1976d2" },
                    }}
                  >
                    <small>Add Cart</small>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;