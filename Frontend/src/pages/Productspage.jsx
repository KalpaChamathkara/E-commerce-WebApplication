import React, { useState } from "react";
import "./css/productspage.css";
import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer.jsx";
import ProductCard from "/src/components/ProductCard.jsx";

const ProductsPage = () => {
  const categories = [
    "All",
    "Consumer Electronics",
    "Home & Kitchen",
    "Fashion & Apparel",
    "Machinery & Tools",
    "Health & Beauty",
    "Automobiles & Accessories",
    "Sports & Outdoor",
    "Toys & Hobbies",
  ];

  const allProducts = [
    {
      id: 1,
      name: "Smartphone",
      category: "Consumer Electronics",
      price: 399,
      imageUrl: "/images/smartphone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      category: "Consumer Electronics",
      price: 899,
      imageUrl: "/images/laptop.jpg",
    },
    {
      id: 3,
      name: "Headphones",
      category: "Consumer Electronics",
      price: 150,
      imageUrl: "/images/headphones.jpg",
    },
    {
      id: 4,
      name: "Smartwatch",
      category: "Consumer Electronics",
      price: 199,
      imageUrl: "/images/smartwatch.jpg",
    },
    {
      id: 5,
      name: "Blender",
      category: "Home & Kitchen",
      price: 79,
      imageUrl: "/images/blender.jpg",
    },
    {
      id: 6,
      name: "Coffee Maker",
      category: "Home & Kitchen",
      price: 120,
      imageUrl: "/images/coffeemaker.jpg",
    },
    {
      id: 7,
      name: "Running Shoes",
      category: "Fashion & Apparel",
      price: 90,
      imageUrl: "/images/shoes.jpg",
    },
    {
      id: 8,
      name: "Jacket",
      category: "Fashion & Apparel",
      price: 110,
      imageUrl: "/images/jacket.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="products-page">
      <Navbar />

      {/* Sticky Search Bar */}
      <div className="sticky-search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => console.log("Searching for:", searchQuery)}>
          Search
        </button>
      </div>

      <div className="products-container">
        {/* Sidebar with Categories */}
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Section */}
        <section className="products-section">
          {/* Product Grid */}
          <div className="product-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="no-products">No products found.</p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
