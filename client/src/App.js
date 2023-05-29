import React from "react";
import { Route, Routes } from "react-router-dom";
import FlowersNav from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FlowersNav />

        <Routes>
          <Route path="/" element={<h2>Home</h2>}></Route>
          <Route path="/about" element={<h2>About</h2>}></Route>
          <Route path="/products" element={<h2>Products</h2>}></Route>
          <Route path="/review" element={<h2>Review</h2>}></Route>
          <Route path="/contact-us" element={<h2>Contact Us</h2>}></Route>
          <Route path="/cart" element={<h2>Cart</h2>}></Route>
          <Route path="/profile" element={<h2>Profile</h2>}></Route>
          <Route path="/*" element={<h2>Page Not Found</h2>}></Route>
        </Routes>

        <button className="btn btn-primary">Hello World</button>
      </header>
    </div>
  );
}

export default App;
