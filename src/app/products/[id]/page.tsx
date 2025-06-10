"use client";
import { CartItem, Product, useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ProductPage() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const { cartItems, dispatch } = useCart();
  const addedToCart = cartItems.find(
    (p: CartItem) => p.product.id === product?.id
  );

  useEffect(() => {
    const product = products.find((p) => p.id === id);
    if (!product) return notFound();
    setProduct(product);
  }, [products, id]);
  if (!product) return;

  return (
    <div className="flex flex-col gap-5 max-w-2xl mx-auto">
      <div className="border p-6 rounded-2xl flex gap-6">
        <div className="flex flex-col justify-between">
          <h1 className="text-xl font-bold text-nowrap">{product.name}</h1>
          <p className="text-lg mt-2">Price: {product.price} dollars</p>
        </div>
        <Image
          src={product.url}
          alt={product.name}
          width={600}
          height={400}
          className="border rounded-xl"
        />
      </div>
      <div className="flex justify-between items-center gap-8 mt-4">
        <button
          disabled={!!addedToCart}
          onClick={() => {
            dispatch({ type: "ADD", payload: product });
            addedToCart ? null : toast.success("added to the cart");
          }}
          className=" w-full px-4 py-2 bg-blue-600 cursor-pointer disabled:cursor-none dark:bg-gray-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-gray-800 transition"
        >
          {!!addedToCart ? "added to cart" : "Add to cart"}
        </button>
        {cartItems.length !== 0 && !!addedToCart ? (
          <div className="flex gap-3 items-center justify-between">
            <button
              className="px-4 py-2 bg-gray-400 rounded-lg hover:bg-gray-500"
              onClick={() =>
                dispatch({
                  type: "REDUCE",
                  payload: product,
                })
              }
            >
              {addedToCart.quantity === 1 ? (
                <Trash2 size={16} className="text-red-500" />
              ) : (
                <Minus size={16} />
              )}
            </button>
            <p className="text-nowrap">
              {
                cartItems.find((p: CartItem) => p.product.id === product.id)
                  ?.quantity
              }
            </p>
            <button
              className="px-4 py-2 bg-gray-400 rounded-lg hover:bg-gray-500 cursor-pointer"
              onClick={() => dispatch({ type: "ADD", payload: product })}
            >
              <Plus size={16} />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductPage;
