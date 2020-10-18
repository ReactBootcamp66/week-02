import React from 'react';

import './ProductRow.css';

function ProductRow({ product }) {
  return (
    <tr className="row-item">
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
