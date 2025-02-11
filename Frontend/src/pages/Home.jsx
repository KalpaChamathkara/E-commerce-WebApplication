import React from "react";
import { Routes } from "react-router-dom";
import "./home.css"; // Importing CSS for styling
import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer.jsx";
import ProductCard from "/src/components/ProductCard.jsx";

const HomePage = () => {
  // Dummy product categories
  const categories = [
    {
      id: 1,
      name: "Mobiles & Tablets",
      imageUrl: "/images/category-mobile.jpg",
    },
    {
      id: 2,
      name: "Laptops & Accessories",
      imageUrl: "/images/category-laptop.jpg",
    },
    { id: 3, name: "Smart Watches", imageUrl: "/images/category-watch.jpg" },
    { id: 4, name: "Audio Devices", imageUrl: "/images/category-audio.jpg" },
  ];

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 399,
      imageUrl: "/images/smartphone.jpg",
    },
    { id: 2, name: "Laptop", price: 899, imageUrl: "/images/laptop.jpg" },
    {
      id: 3,
      name: "Headphones",
      price: 150,
      imageUrl: "/images/headphones.jpg",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 199,
      imageUrl: "/images/smartwatch.jpg",
    },
  ];

  return (
    <div className="homepage">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="/images/hero-banner.jpg"
          alt="Electronics Sale"
          className="hero-banner"
        />
      </section>

      {/* Category Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-list">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.imageUrl} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discount Offer Section */}
      <section className="discount-banner">
        <h2>🔥 Flash Sale - Up to 50% Off!</h2>
        <p>Hurry, limited time offer!</p>
        <button className="shop-now-btn">Shop Now</button>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
