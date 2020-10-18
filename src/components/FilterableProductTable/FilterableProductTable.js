import React, { useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable/ProductTable';

const defaultProducts = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  {
    category: 'Electronics',
    price: '$199.99',
    stocked: true,
    name: 'Nexus 7',
  },
];
const FilterableProductTable = () => {
  const [term, setTerm] = useState('');

  const getFilteredProducts = () => {
    const filteredProducts = defaultProducts.filter(
      (product) => product.name.indexOf(term) !== -1
    );

    return filteredProducts;
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setTerm(value);
  };
  return (
    <>
      <SearchBar value={term} onChange={handleSearchChange} />
      <ProductTable products={getFilteredProducts()} />
    </>
  );
};

export default FilterableProductTable;
