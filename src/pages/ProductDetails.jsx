import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch single product from API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500 mt-20">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-20">{error}</p>;
  if (!product) return <p className="text-center text-gray-500 mt-20">Product not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain mx-auto md:mx-0 rounded-lg border"
        />

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4 capitalize">{product.category}</p>
          <p className="text-lg text-gray-800 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-6 text-blue-600">${product.price}</p>

          <div className="flex gap-4">
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.image,
                })
              }
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() =>
                toggleWishlist({
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.image,
                })
              }
              className={`px-5 py-2 rounded-lg transition ${
                isWishlisted(product.id)
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {isWishlisted(product.id) ? "♥ Wishlisted" : "♡ Wishlist"}
            </button>
          </div>

          <Link
            to="/"
            className="block mt-8 text-blue-600 hover:underline text-sm"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
