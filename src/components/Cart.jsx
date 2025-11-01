// Cart.jsx
export default function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
}) {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-3"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    ➖
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => onIncrease(item.id)}
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    ➕
                  </button>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="ml-3 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>

                <div className="font-semibold">
                  ${item.price * item.quantity}
                </div>
              </li>
            ))}
          </ul>

          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">
              Total: <span className="text-green-600">${totalPrice}</span>
            </h3>

            <button
              onClick={onClear}
              className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
