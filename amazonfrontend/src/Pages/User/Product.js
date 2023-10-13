import React from 'react';
import { Card, CardContent, CardMedia, Typography, Rating, Box } from '@mui/material';

const Product = ({product}) => {

	 const { name, description, price, stock, image, ratings }  = product

  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom var
        alt={name}variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {stock} items
        </Typography>
        <Box component="fieldset" borderColor="transparent"> <br/>
          <Typography component="legend"></Typography>
          <Rating name="read-only" value={ratings} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Product;
