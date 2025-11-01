import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 999, image: "https://via.placeholder.com/400", description: "A powerful laptop for work and play." },
  { id: 2, name: "Phone", price: 699, image: "https://via.placeholder.com/400", description: "A sleek smartphone with an excellent camera." },
  { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/400", description: "Wireless headphones with noise cancellation." },
];

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find the product that matches the ID in the URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-red-500">Product not found 😢</h2>
        <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-10">
      <Link to="/" className="text-blue-600 underline">← Back to Products</Link>

      <div className="flex flex-col md:flex-row mt-6 gap-6 items-center">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-xl shadow" />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mt-4">${product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
