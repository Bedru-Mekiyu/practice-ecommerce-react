import { motion } from "framer-motion";
import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

  return (
    <motion.div
      className="p-6 bg-gray-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Shopping Cart</h1>
      <Cart
        cart={cart}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
    </motion.div>
  );
}
