"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavBar() {
  const { cartItems } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="flex items-center justify-end px-10 py-6 min-w-full gap-4 border-b mb-10">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link
        href="/cart"
        className={`flex items-center justify-between gap-1 ${
          cartItems.length !== 0 && isMounted ? "mr-3 relative" : ""
        }`}
      >
        <span>Cart</span>
        <ShoppingCart size={16} />
        {isMounted && cartItems.length !== 0 && (
          <span className="border rounded-full w-6 h-6 text-center absolute -top-3 -right-5 bg-amber-200 text-black">
            {cartItems.length}
          </span>
        )}
      </Link>
      <Link href="/about">About</Link>
    </header>
  );
}

export default NavBar;
