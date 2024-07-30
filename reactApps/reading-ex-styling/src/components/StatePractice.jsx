import React, { useState } from 'react';

function StatePractice() {
  // Declare a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const handleIncrement = () => {
    // Update the count by incrementing it
    setCount(count + 1);
  };

  const handleDecrement = () => {
    // Update the count by decrementing it
    setCount(count - 14);
  };

  const handleReset = () => {
    // Update the count by reseting it
    setCount(count === 0);
  };

  // JSX rendering
  return (
    <div>
      {/* Display the current count */}
      <p>Count: {count}</p>

      {/* Button to trigger the handleIncrement function */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StatePractice;