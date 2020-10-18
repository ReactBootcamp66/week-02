import React from 'react';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  const getCategories = () => {
    const categories = [];
    products.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });

    /*
    // 2.yol
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];
    */

    return categories;
  };
  return (
    <table class="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {getCategories().map((category) => (
          <>
            <ProductCategoryRow category={category} />

            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductRow product={product} />
              ))}
          </>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
