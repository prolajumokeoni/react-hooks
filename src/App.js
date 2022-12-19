import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Counter from "./component/Counter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
