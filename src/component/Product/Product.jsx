import React, { use } from 'react';
import AvailableProduct from '../AvailableProduct/AvailableProduct'

const Product = ({ProductPromise}) => {
    console.log(ProductPromise);
    const Products = use(ProductPromise);
    console.log(Products);
    return (
        <div>
            <AvailableProduct Products={Products}></AvailableProduct>
        </div>
    );
};

export default Product;