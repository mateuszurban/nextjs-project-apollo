"use client";

import FavouritesList from "@/components/FavouritesList";
import { PRODUCTS } from "../../constants/products";

export default function Favourites() {
  let products = PRODUCTS;
  let localStorageFavourites = JSON.parse(localStorage.getItem("favourites"));

  // Filters "in" items from PRODUCTS, it they match localStorage id's
  // In proper app, this would probably be an API call for products with a matching ID?
  let favouriteProducts = products.filter((product) =>
    localStorageFavourites.includes(product.id)
  );

  return (
    <>
      <FavouritesList products={favouriteProducts} />
    </>
  );
}
