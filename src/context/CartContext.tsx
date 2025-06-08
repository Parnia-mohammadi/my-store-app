"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
  url: string;
  thumbnailUrl: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartAction = { type: string; payload: Product };

type CartContextType = {
  cartItems: CartItem[];
  dispatch: Dispatch<CartAction>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartItem[], { type, payload }: CartAction) => {
  switch (type) {
    case "ADD": {
      const existingItem = state.find(
        (cartItem: CartItem) => cartItem.product.id === payload.id
      );
      return existingItem
        ? state.map((cartItem: CartItem) =>
            cartItem.product.id === payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...state, { product: payload, quantity: 1 }];
    }
    case "REDUCE": {
      return state.map((cartItem) =>
        cartItem.product.id === payload.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
    case "REMOVE": {
      return state.filter((cartItem) => cartItem.product.id !== payload.id);
    }
    default:
      return state;
  }
};

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
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
