import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  Card, CardContent, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';

const ProductDetails = () => {

	const { pid } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product.id === parseInt(pid, 10));

	if (!product) {
    return <div>Product not found</div>;
  }



	console.log(product)
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 box" key={product.id}>
      <Card>

			<div className=".card-img-cover">
       <img src={product.image} alt="img" />
			</div>


        <CardContent>
          <Typography variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body2"   style={{ color: "black",  marginLeft:'15px'}} color="text.secondary">
            Price: ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary"  style={{ color: "black",  marginLeft:'15px'}}>
            Stock: {product.stock}
          </Typography>
					<Rating
                  name="product-rating"
                  value={product.ratings}
                  precision={0.5}
                  readOnly >

                 </Rating>
        </CardContent>
        <div className="d-flex justify-content-between p-2">

        </div>
      </Card>
    </div>
  );
};

export default ProductDetails;
