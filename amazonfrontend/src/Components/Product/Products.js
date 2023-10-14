import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/productActions';

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
    <>
<div className='container mt-5'>
<div className='row'>

{products.map((product) => (

  <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>

    <div className='card'>
    <div className="card-body">
      <div style={{ color: 'black' }} className='card-img-top'> <img src={product.image} alt="img" height= '200px' width = '300px' /> </div>
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.description}</p>
     </div>

      <div  style={{ color: 'black' }}>$ {product.price}</div>
      <div  style={{ color: 'black' }}>{product.stock}</div>
      <div  style={{ color: 'black' }}>{product.ratings}</div>

    </div>


       </div>
     ) )}
      </div>
       </div>
    </>
  )
};

export default Products;
