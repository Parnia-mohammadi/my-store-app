"use client";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

function cart() {
  const { cartItems, dispatch } = useCart();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const router = useRouter();

  const handleCheckout = async () => {
    router.push("/checkout");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Cart :</h1>
      {cartItems.length === 0 ? (
        <p>The shopping cart is empty.</p>
      ) : (
        <div className="border rounded-xl p-4">
          <table className="w-full text-center border-collapse *:*:border **:border-gray-500">
            <thead className="*:w-1/4">
              <tr className="*:border *:p-2">
                <th>Product Name</th>
                <th>Price</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => (
                <tr key={i} className="*:border *:p-4">
                  <td>
                    <p className="font-medium">{item.product.name}</p>
                  </td>
                  <td>{item.product.price}</td>
                  <td>
                    <div className="flex items-center justify-between">
                      <button
                        className="bg-gray-400 hover:bg-gray-500 p-2 rounded-md"
                        disabled={item.quantity === 0}
                        onClick={() =>
                          dispatch({
                            type: "REDUCE",
                            payload: item.product,
                          })
                        }
                      >
                        <Minus size={16} />
                      </button>
                      {item.quantity}
                      <button
                        className="bg-gray-400 hover:bg-gray-500 p-2 rounded-md"
                        onClick={() =>
                          dispatch({ type: "ADD", payload: item.product })
                        }
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        className="bg-red-300 rounded-md p-2 hover:bg-red-400"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: item.product })
                        }
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between w-full gap-6 mt-6 font-bold text-xl">
            <p>Total Price :</p>
            <p>{totalPrice}</p>
          </div>
          <button
            onClick={() => handleCheckout()}
            className="bg-gray-700 w-full p-4 mt-6 rounded-md hover:bg-gray-800"
          >
            Continue Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default cart;
