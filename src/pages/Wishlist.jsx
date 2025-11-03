import { motion, AnimatePresence } from "framer-motion";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <motion.div
      className="p-6 bg-gray-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center mb-6">❤️ Wishlist</h1>

      {wishlist.length === 0 ? (
        <motion.p
          className="text-center text-gray-500 text-lg mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Your wishlist is empty.
        </motion.p>
      ) : (
        <motion.div
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence>
            {wishlist.map((item) => (
              <motion.div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center border-b py-4 gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.25 }}
              >
                {/* 🖼️ Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain"
                />

                {/* 🧾 Product Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>

                {/* ❤️ Actions */}
                <div className="flex items-center gap-3">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => addToCart(item)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: [1, 1.3, 1],
                      transition: { duration: 0.3 },
                    }}
                    onClick={() => toggleWishlist(item)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Remove
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* 🧹 Clear Wishlist Button */}
          <motion.div
            className="text-right mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={clearWishlist}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Clear Wishlist
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* 🔙 Link to Continue Shopping */}
      <div className="text-center mt-10">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          ← Continue Shopping
        </Link>
      </div>
    </motion.div>
  );
}
