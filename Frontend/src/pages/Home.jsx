import React from "react";
import { Routes } from "react-router-dom";
import "./home.css"; // Importing CSS for styling
import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer.jsx";
import ProductCard from "/src/components/ProductCard.jsx";

const HomePage = () => {
  // Dummy product categories
  const categories = [
    "Consumer Electronics",
    "Home & Kitchen",
    "Fashion & Apparel",
    "Machinery & Tools",
    "Health & Beauty",
    "Automobiles & Accessories",
    "Sports & Outdoor",
    "Toys & Hobbies",
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

      {/* Hero Section with Categories Sidebar */}
      <section className="hero-container">
        {/* Sidebar Categories */}
        <div className="category-sidebar">
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        {/* Hero Banner with Search */}
        <div className="hero-banner">
          <img src="/images/alibaba-banner.jpg" alt="Electroshop Deals" />
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products, suppliers..."
            />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* Best Selling Section */}
      <section className="best-selling">
        <h2> Best Selling Items</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trending Deals Section */}
      <section className="trending-deals">
        <h2> Trending Deals</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
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
