"use client";

import CartItems from "@/components/CartItems";
import { PRODUCTS } from "../../constants/products";

export default function Cart() {
  let products = PRODUCTS;
  let localStorageCartItems = JSON.parse(localStorage.getItem("cart"));

  // Filters "in" items from PRODUCTS, it they match localStorage id's
  // In proper app, this would probably be an API call for products with a matching ID?
  let cartProducts = products.filter((product) =>
    localStorageCartItems.includes(product.id)
  );

  return (
    <>
      <CartItems products={cartProducts} />
    </>
  );
}
