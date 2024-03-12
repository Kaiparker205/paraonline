import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { getProducts } from "../../reducer/ProductSlice";
import SingleProduct from "./SingleProduct";
import './products.css'
function Products() {
    const dispatch = useDispatch()
useEffect(() => {
dispatch(getProducts())
}, [])
const { value, isLoading, err } = useSelector(state => state.productsData)


if (err != null) {
    return (
      <Typography variant="h4" color="error" gutterBottom>
        {err}
      </Typography>
    );
  }
  return (
    <section id="page-content">
      {isLoading ? (
         <CircularProgress />
      ) : (
        <ul className="gallery">
          {value.map((item) => (
             <SingleProduct key={item.id} product={item}/>
          ))}
        </ul>
      )}
    </section>
  );
  
}

export default Products
