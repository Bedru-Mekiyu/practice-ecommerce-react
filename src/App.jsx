import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import { useCart } from "./context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 999, image: "https://via.placeholder.com/150", description: "A powerful laptop for work and play." },
  { id: 2, name: "Phone", price: 699, image: "https://via.placeholder.com/150", description: "A sleek smartphone with an excellent camera." },
  { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/150", description: "Wireless headphones with noise cancellation." },
];

function App() {
  const { cartCount } = useCart();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyStore
        </Link>

        <Link
          to="/cart"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          🛒 Cart ({cartCount})
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
