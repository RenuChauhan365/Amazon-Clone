import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/productActions';
import ProductCard from './ProductCard';

const Products = () => {


  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  console.warn(products)
  const loading = useSelector((state) => state.products.loading);

  console.log('Products:', products);
  console.log('Loading:', loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>

      <h1>all Product</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
};

export default Products;
