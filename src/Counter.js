import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const add = () => setCounter(counter + amount);

  const handleChange = (event) => {
    const { value } = event.target;
    setAmount(Number(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    add();
  };

  return (
    <div className="container">
      <div className="btn-conrainer">
        <h3>Counter: {counter}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <label>
        Add your input:
        <input type="number" value={amount} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Add to current counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default Counter;
