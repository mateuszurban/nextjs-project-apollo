"use client";

import CartItems from "@/components/CartItems";
import { PRODUCTS } from "../../constants/products";
import { useEffect, useState } from "react";

export default function Cart() {
  let products = PRODUCTS;

  // This is probably not an ideal way to fix "localstorage vs nextjs", but it's enough for demonstration purposes.
  const [cartItems, setCartItems] = useState("");

  useEffect(() => {
    let localStorageCartItems;
    localStorageCartItems = JSON.parse(localStorage.getItem("cart"));
    setCartItems(localStorageCartItems);
  }, []);

  // Filters "in" items from PRODUCTS, it they match localStorage id's
  // In proper app, this would probably be an API call for products with a matching ID?
  let cartProducts = products.filter((product) =>
    cartItems.includes(product.id)
  );

  return (
    <>
      <CartItems products={cartProducts} />
    </>
  );
}
