"use client";

import { CartItem, Product, useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Data = {
  message: string;
  order: { cartItems: CartItem[]; totalPrice: number };
  createdAt: Date;
};

function CheckoutPage() {
  const [data, setData] = useState<Data | undefined>();
  const { cartItems, dispatch } = useCart();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartItems, totalPrice }),
        });
        const response = await res.json();
        setData(response);
        toast.success(response.message);
        dispatch({ type: "CLEAR", payload: {} as Product });
      } catch {
        toast.error("Your order hasn't recieved");
      }
    };
    fetchData();
  }, []);
  return (
    <main className="mx-auto">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>
      <p>This is a fake payment page. Purchase completed. 🎉</p>
      {data && (
        <div className="max-w-2xl mx-auto border rounded-md p-6 mt-8">
          <p className="text-xl font-semibold mb-4">Your order was : </p>
          {data.order.cartItems.map((item: CartItem) => (
            <p key={item.product.id}>
              {item.quantity === 1 ? `1 item - ` : `${item.quantity} items - `}
              {item.product.name} - ${item.product.price}
            </p>
          ))}
          <p>Payment amount : ${data.order.totalPrice}</p>
          <p>
            Order registration date :{" "}
            {new Date(data.createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      )}
    </main>
  );
}

export default CheckoutPage;
