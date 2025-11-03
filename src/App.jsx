import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails"; // 👈 add this
import Wishlist from "./pages/Wishlist"; // (we’ll build this next)
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} /> {/* 👈 new */}
        <Route path="/wishlist" element={<Wishlist />} /> {/* next step */}
        <Route path="/checkout" element={<Checkout />} /> {/* 👈 new */}

      </Routes>
    </div>
  );
}
