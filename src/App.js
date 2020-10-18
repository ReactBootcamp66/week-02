import React from 'react';
import './App.css';

import Greetings from './components/Greetings';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

function App() {
  return (
    <div className="container">
      <Greetings name="John Doe" />
      <FilterableProductTable />
    </div>
  );
}

export default App;
