import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // 👈 import motion
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { addToCart } = useCart();
  const { darkMode } = useTheme();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("none");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🧠 Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products 😢");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  let filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  if (sortBy === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price-desc") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "name-asc") filtered.sort((a, b) => a.title.localeCompare(b.title));
  else if (sortBy === "name-desc") filtered.sort((a, b) => b.title.localeCompare(a.title));

  const clearFilters = () => {
    setSearchTerm("");
    setCategory("all");
    setSortBy("none");
  };

  if (loading)
    return <p className="text-center text-gray-500 dark:text-gray-400 mt-20">Loading products...</p>;
  if (error)
    return <p className="text-center text-red-500 dark:text-red-400 mt-20">{error}</p>;

  return (
    <motion.div
      className={`min-h-screen p-6 transition-colors ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🧭 Filter Bar with slide animation */}
      <motion.div
        className="max-w-5xl mx-auto mb-6 flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="none">Sort By</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="name-asc">Name: A → Z</option>
          <option value="name-desc">Name: Z → A</option>
        </select>

        <button
          onClick={clearFilters}
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Clear Filters
        </button>
      </motion.div>

      {/* 🛒 Product Grid with staggered animation */}
      {filtered.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard
                product={{
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.image,
                }}
                onAddToCart={addToCart}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
            😢 No products found.
          </p>
          <button
            onClick={clearFilters}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Reset Filters
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
