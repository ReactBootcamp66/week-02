import React, { useState } from 'react';

const FunctionalComponent = ({ type }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Functional Component</h1>
      <p>Count: {count}</p>
      <p>Type: {type}</p>

      <button type="button" onClick={increment}>
        Inc
      </button>
    </div>
  );
};

export default FunctionalComponent;
