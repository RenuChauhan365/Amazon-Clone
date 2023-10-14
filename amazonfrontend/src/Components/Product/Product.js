import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() =>{

    // Fetch products from the backend API using Axios
   axios.get( `${process.env.REACT_APP_API}/api/products`)
      .then(response => {
        setProducts(response.data.products);
        console.log(response.data.products)
      })
      .catch(error => {
        console.error('Error fetching products:', error.response);
      });

    } ,[])


  const handleSearch = () => {
    // Search products based on searchQuery
    axios.get(`/api/products/search?name=${searchQuery}`)
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error searching products:', error);
      });
  };

  const handleAddToCart = (productId) => {
    // Implement logic to add the product to the cart
    console.log('Product added to cart:', productId);
  };

  return (
    <div>
      <TextField
        label="Search Products"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
     &nbsp; <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>


      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
              </CardContent>
              <CardActions>
                <Button variant="contained" onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>


    </div>
  );
};

export default Product;
