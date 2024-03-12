import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductSlice';
import clientReducer from './ClientSlice'
export const storeApp =configureStore({
   reducer:{
    productsData:productReducer,
    clientsData:clientReducer
   },
   devTools:true

})
