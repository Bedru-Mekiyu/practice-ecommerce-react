import { motion, AnimatePresence } from "framer-motion";

export default function Cart({ cart, onIncrease, onDecrease, onRemove, onClear }) {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold mb-4">🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <motion.p
          className="text-gray-500 text-center py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Your cart is empty.
        </motion.p>
      ) : (
        <>
          <ul>
            <AnimatePresence>
              {cart.map((item) => (
                <motion.li
                  key={item.id}
                  className="flex justify-between items-center border-b py-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Product Info */}
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onDecrease(item.id)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      ➖
                    </motion.button>

                    <span>{item.quantity}</span>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onIncrease(item.id)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      ➕
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onRemove(item.id)}
                      className="ml-3 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                    >
                      Remove
                    </motion.button>
                  </div>

                  {/* Price */}
                  <div className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {/* Total + Clear Button */}
          <motion.div
            className="text-right mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold">
              Total:{" "}
              <span className="text-green-600">${totalPrice.toFixed(2)}</span>
            </h3>

            <motion.button
              onClick={onClear}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Clear Cart
            </motion.button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
