import React, { use } from 'react';

const Product = ({ProductPromise}) => {
    console.log(ProductPromise);
    const data = use(ProductPromise);
    console.log(data);
    return (
        <div>
            hello
        </div>
    );
};

export default Product;