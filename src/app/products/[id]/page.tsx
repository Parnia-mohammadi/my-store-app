"use client";
import { Product, useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ProductPage() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const { cart, addCart } = useCart();
  const isAddedToCart = product && cart.includes(product);

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
        <img
          src={product.url}
          alt={product.name}
          width="600px"
          height="400px"
          className="border rounded-xl"
        />
      </div>
      <button
        disabled={isAddedToCart}
        onClick={() => addCart(product)}
        className="mt-4 px-4 py-2 bg-blue-600 cursor-pointer disabled:cursor-none dark:bg-gray-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-gray-800 transition"
      >
        {isAddedToCart ? "added to cart" : "Add to cart"}
      </button>
    </div>
  );
}

export default ProductPage;
