import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // 🧠 Close drawer on ESC key
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Cart Drawer */}
          <motion.div
            className="fixed top-0 right-0 w-80 sm:w-96 h-full bg-white shadow-2xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 text-lg"
              >
                ✖
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">
                  Your cart is empty.
                </p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-contain"
                    />
                    <div className="flex-1 ml-3">
                      <h3 className="font-semibold text-sm line-clamp-1">{item.name}</h3>
                      <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>

                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="px-2 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          ➖
                        </button>
                        <span className="min-w-[1rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="px-2 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          ➕
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      🗑️
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-gray-50">
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-gray-800">Total:</span>
                <span className="font-bold text-blue-600">${total.toFixed(2)}</span>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  to="/cart"
                  onClick={onClose}
                  className="bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Go to Cart
                </Link>

                <button
                  onClick={clearCart}
                  className="bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
