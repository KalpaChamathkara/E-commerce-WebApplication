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
      name: "Google Pixel Phone",
      category: "Automobiles & Accessories",
      price: 399,
      imageUrl: "https://mofo.lk/wp-content/uploads/2023/06/5.webp",
    },
    {
      id: 2,
      name: "Acer Laptop",
      category: "Automobiles & Accessories",
      price: 899,
      imageUrl:
        "https://buyabans.com/storage/product/5578/acpcli58gb1tb12g_2_1.jpg",
    },
    {
      id: 3,
      name: "JBL Headphones",
      category: "Automobiles & Accessories",
      price: 150,
      imageUrl: "https://buyabans.com/storage/product/4867/7002018_2_262.jpg",
    },
    {
      id: 4,
      name: "Samsung Smartwatch",
      category: "Automobiles & Accessories",
      price: 199,
      imageUrl: "https://buyabans.com/storage/product/8703/rmwatchbsbk_3.jpg",
    },
    {
      id: 5,
      name: "Olsenmark Blender and Grinder",
      category: "Home & Kitchen",
      price: 79,
      imageUrl: "https://buyabans.com/storage/product/10242/aklo_paoject.png",
    },
    {
      id: 6,
      name: "Black & Decker 330W One Cup Coffee Maker (Black)",
      category: "Home & Kitchen",
      price: 120,
      imageUrl:
        "https://buyabans.com/storage/product/5621/lpbdcmdcm25nb5_1.jpg",
    },
    {
      id: 7,
      name: "Men's Chic Casual Sneakers",
      category: "Fashion & Apparel",
      price: 90,
      imageUrl:
        "https://coolplanet.lk/cdn/shop/files/Web_0004_Layer35.jpg?v=1738051910&width=130",
    },
    {
      id: 8,
      name: "Women's Chic Casual Sneakers",
      category: "Fashion & Apparel",
      price: 110,
      imageUrl:
        "https://coolplanet.lk/cdn/shop/files/Web_0016_Layer23.jpg?v=1738051465&width=130",
    },
    {
      id: 9,
      name: "Garner Bright Complete Moisturizing Serum in Lotion 400ml",
      category: "Health & Beauty",
      price: 120,
      imageUrl:
        "https://www.essentials.lk/cdn/shop/products/GarnierBrightCompleteMoisturizingSeruminLotion400ml.jpg?crop=center&height=600&v=1669715649&width=600",
    },
    {
      id: 10,
      name: "Medicare Collagen Jelly Cream 50ml",
      category: "Health & Beauty",
      price: 90,
      imageUrl:
        "https://www.essentials.lk/cdn/shop/files/MedicubeCollagenJellyCream50ml.jpg?crop=center&height=1000&v=1737189349&width=1000",
    },
    {
      id: 11,
      name: "Maestro Melody Eau De Perfume For Women 100ml",
      category: "Health & Beauty",
      price: 110,
      imageUrl:
        "https://www.essentials.lk/cdn/shop/files/MaestroMelodyEauDePerfumeForWomen100ml.jpg?crop=center&height=1000&v=1725601382&width=1000",
    },
    {
      id: 10,
      name: "Xiaomi HuoHou Incom Stainless Steel 6pcs Knife Set",
      category: "Home & Kitchen",
      price: 90,
      imageUrl:
        "https://buyabans.com/storage/product/10101/new_kalo_apoject.png",
    },
    {
      id: 11,
      name: "Samsung Refrigerator",
      category: "Home & Kitchen",
      price: 110,
      imageUrl:
        "https://singerwebcdn.azureedge.net/resources/products/normal/SMGRT41DG6A2BS8IG-01.webp",
    },
    {
      id: 12,
      name: "Toyota FJ Cruiser Diecast Toy Car ",
      category: "Toys & Hobbies",
      price: 110,
      imageUrl:
        "https://coolplanet.lk/cdn/shop/files/0020_DSC08326.jpg?v=1738744005&width=130",
    },
    {
      id: 13,
      name: "Zinc Alloy Diecast Toy ",
      category: "Toys & Hobbies",
      price: 110,
      imageUrl:
        "https://coolplanet.lk/cdn/shop/files/0017_DSC08331.jpg?v=1738740844&width=130",
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
