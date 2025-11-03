import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, ShoppingCart, Heart } from "lucide-react"; // icons
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [isCartOpen, setIsCartOpen] = useState(false);


  return (
    <>
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600 dark:text-blue-400"
      >
        MyStore
      </Link>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link to="/wishlist" className="text-gray-700 dark:text-gray-300">
          <Heart />
        </Link>
        <Link to="/cart" className="text-gray-700 dark:text-gray-300">
          <ShoppingCart />
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-xl hover:scale-110 transition"
          >
            🛒
           
          </button>
      </div>
   
      
    </nav>
    <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

    </>
    
  );
}
