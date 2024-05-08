"use client";

import Hero from "@/components/Hero";
import HERO_IMAGE_DEFAULT from "../assets/hero.jpg";
import Products from "@/components/Products";
import { PRODUCTS } from "../constants/products";
import { useEffect } from "react";

export default function Home() {
  // To prevent errors created by an empty localstorage:
  function populateLocalStorage() {
    let localStorageFavourites = JSON.parse(localStorage.getItem("favourites"));

    if (localStorageFavourites === null) {
      localStorageFavourites = [];
      localStorage.setItem(
        "favourites",
        JSON.stringify(localStorageFavourites)
      );
    }

    let localStorageCart = JSON.parse(localStorage.getItem("cart"));

    if (localStorageCart === null) {
      localStorageCart = [];
      localStorage.setItem("cart", JSON.stringify(localStorageCart));
    }
  }

  useEffect(() => {
    populateLocalStorage();
  }, []);

  return (
    <>
      {/* Hero with a wider props selection, to facilitate creating seasonal offers and other page's hero sections more easily. */}
      <Hero
        heroImage={HERO_IMAGE_DEFAULT}
        heroCTAText={"Custom gift coffee blends, for your taste only"}
        heroLinkURL={"/gifts"}
        heroButtonText={"Shop now"}
      />
      <Products
        products={PRODUCTS}
        headerText={"Check our bestsellers"}
        buttonVisible={true}
      />
    </>
  );
}
