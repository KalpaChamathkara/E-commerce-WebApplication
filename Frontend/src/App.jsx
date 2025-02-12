import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NewsLine from "./components/newsline.jsx";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/productspage.jsx";

function App() {
  return (
    <>
      <NewsLine />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
