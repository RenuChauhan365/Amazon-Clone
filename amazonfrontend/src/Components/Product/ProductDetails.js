import React , { useEffect, useState }  from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ProductDetails = () => {

	const { pid } = useParams();
  const products = useSelector((state) => state.products.products);
  const [product, setProduct] = useState(null);


 useEffect (() =>{
	const productFromStore = products.find(
		(product) => product.id === parseInt(pid, 10)
	);

	if (productFromStore) {
		setProduct(productFromStore);
		localStorage.setItem("productDetails", JSON.stringify(productFromStore));
	} else {
		const savedProduct = JSON.parse(localStorage.getItem("productDetails"));
		if (savedProduct && savedProduct.id === parseInt(pid, 10)) {
			setProduct(savedProduct);
		}
	}
} , [pid, products])


	if (!product) {
    return <div className="text-danger">Product not found</div>;
  }

	console.log(product)
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 box
		product-details-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} key={product.id}>
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
				<Button>
				<NavLink to='/product'>
				<ArrowBackIcon/> </NavLink>
			</Button>
      </Card>


    </div>
  );
};

export default ProductDetails;
