import React from 'react';

function ProductName({params}) {
    console.log(params)
    return (
        <div>

            Category Name: {params.categoryName}
            Product Name : {params.ProductName}
        </div>
    );
}

export default ProductName;