"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
  url: string;
  thumbnailUrl: string;
};
type CartContextType = { cart: Product[]; addCart: (product: Product) => void };

const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const addCart = (product: Product) => {
    setCart((prevProducts) => [...prevProducts, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("You should use useCart inside the CartProvider.");
  return context;
}
