import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Shopping Cart</h1>
      <Cart
        cart={cart}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
    </div>
  );
}
