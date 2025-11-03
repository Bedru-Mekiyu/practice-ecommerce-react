import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext"; // ❤️
import { useTheme } from "../context/ThemeContext"; // 🌗

export default function ProductCard({ product, onAddToCart }) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { darkMode } = useTheme();

  const { id, name, price, image } = product;
  const wishlisted = isWishlisted(id);

  return (
    <motion.div
      className={`rounded-2xl shadow-md overflow-hidden border transition-all duration-300 ${
        darkMode
          ? "bg-gray-800 border-gray-700 hover:border-blue-500"
          : "bg-white border-gray-200 hover:border-blue-400"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: darkMode
          ? "0 0 20px rgba(59,130,246,0.3)"
          : "0 0 20px rgba(59,130,246,0.2)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative p-4 flex flex-col justify-between h-full">
        {/* ❤️ Wishlist toggle */}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 text-xl"
          title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          {wishlisted ? (
            <span className="text-red-500">❤️</span>
          ) : (
            <span className="text-gray-400 hover:text-red-500 transition">🤍</span>
          )}
        </button>

        {/* 🖼️ Product image */}
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
        />

        {/* 🧾 Product info */}
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{name}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-bold mb-4">
          ${price.toFixed(2)}
        </p>

        {/* 🛒 Actions */}
        <div className="flex justify-between items-center gap-2 mt-auto">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Add to Cart
          </button>

          <Link
            to={`/product/${id}`}
            className="flex-1 text-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
