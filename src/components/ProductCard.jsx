import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>

        <Link
          to={`/product/${product.id}`}
          className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
