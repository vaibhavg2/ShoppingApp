import axios from 'axios';
import { IGetProductsResponse } from '../models';

// const isProduction = process.env.NODE_ENV === 'production';

export const getProducts = async () => {
  let response: IGetProductsResponse;

  // if (isProduction) {
    response = await axios.get("https://dummyjson.com/products");
    console.log(response);
    
  // } else {
    // response = require('../static/json/products.json');
    // console.log("kjkjk");
    
  // }

  const  products = response.data.products || [];

  return products;
};
