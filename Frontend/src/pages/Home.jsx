import React from "react";
import { Routes } from "react-router-dom";
import "./css/home.css"; // Importing CSS for styling
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
      name: "Google Pixel Phone",
      price: 399,
      imageUrl: "https://mofo.lk/wp-content/uploads/2023/06/5.webp",
    },
    {
      id: 2,
      name: "Acer Laptop",
      price: 899,
      imageUrl:
        "https://buyabans.com/storage/product/5578/acpcli58gb1tb12g_2_1.jpg",
    },
    {
      id: 3,
      name: "JBL Headphones",
      price: 150,
      imageUrl: "https://buyabans.com/storage/product/4867/7002018_2_262.jpg",
    },
    {
      id: 4,
      name: "Samsung Smartwatch",
      price: 199,
      imageUrl: "https://buyabans.com/storage/product/8703/rmwatchbsbk_3.jpg",
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
          <img
            src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-118763.jpg?t=st=1739367501~exp=1739371101~hmac=7c0daa95730d6cf427f337a875aa4824cde34b7595b5c0b4e49c8e794c536b35&w=1380"
            alt="Alibaba Deals"
          />
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
