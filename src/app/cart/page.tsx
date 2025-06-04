"use client";
import { useCart } from "@/context/CartContext";

function cart() {
  const { cart } = useCart();
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Cart :</h1>
      {cart.length === 0 ? (
        <p>The shopping cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, i) => (
            <li key={i} className="border p-4 rounded">
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-gray-600">{item.price} dollars</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default cart;
