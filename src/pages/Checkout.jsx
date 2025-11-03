import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((v) => v.trim() === "")) {
      alert("Please fill out all fields");
      return;
    }
    setSubmitted(true);
    clearCart();
    setTimeout(() => navigate("/"), 3000);
  };

  if (submitted)
    return (
      <div className="flex flex-col items-center justify-center mt-20 text-center">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">
          🎉 Order Placed Successfully!
        </h2>
        <p className="text-gray-600">
          Thank you for your purchase, {form.name}.  
          You’ll be redirected to the home page shortly.
        </p>
      </div>
    );

  if (cart.length === 0)
    return (
      <div className="flex flex-col items-center justify-center mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Your cart is empty 🛒
        </h2>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Shop
        </Link>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold mb-4">Checkout Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <div className="flex gap-3">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={form.zip}
            onChange={handleChange}
            className="w-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white mt-4 px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Place Order (${total.toFixed(2)})
        </button>
      </form>

      {/* Order Summary */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        <ul className="divide-y divide-gray-200">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between py-3">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} × ${item.price}
                </p>
              </div>
              <p className="font-semibold text-blue-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
