import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2> Welcome to the e-commerse webiste</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
