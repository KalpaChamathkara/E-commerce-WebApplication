import { useState } from "react";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NewsLine from "./components/newsline.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <NewsLine />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
