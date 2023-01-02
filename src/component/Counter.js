import React, { useState } from "react";
import "./Counter.css";

const defaultAmount = {
amount: 0,
}

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [amountValue, setAmountValue] = useState(defaultAmount);
  const { amount } = amountValue;

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const add = () => setCounter(counter + amountValue);
  const reset = () => setCounter(0)

  const resetInput = () => {
    setAmountValue(defaultAmount);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    setAmountValue(Number( value ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    add();
    resetInput();
  };

 

  return (
    <div className="container">
      <div className="btn-container">
        <h3>Counter: {counter}</h3>
        <button onClick={increment}>Increment</button>
        <br />
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>reset</button>
      </div>
      <label>
        Add your input number:
        <input type="number" name="amount" value={amount} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Add to current counter</button>
    </div>
  );
}

export default Counter;
