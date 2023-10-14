import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
      <Typography variant="h5" style={{ color: 'black' }}>{product.name}</Typography>
<Typography variant="body1" style={{ color: 'black' }}>{product.description}</Typography>
<Typography variant="body2" style={{ color: 'black' }}>$ {product.price}</Typography>
 </CardContent>
    </Card>
  );
};

export default ProductCard;
