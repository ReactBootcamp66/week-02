import React from 'react';
import './ProductCategoryRow.css';

function ProductCategoryRow({ category }) {
  return (
    <tr className="category-item">
      <td colSpan={2}>{category}</td>
    </tr>
  );
}

export default ProductCategoryRow;
