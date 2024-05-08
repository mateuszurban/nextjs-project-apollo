"use client";

import styles from "./FavouriteProduct.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function FavouriteProduct({ product }) {
  function removeFromFavourites(id) {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    let newFavouritesArray = favourites.filter((fav) => fav !== id);
    localStorage.setItem("favourites", JSON.stringify(newFavouritesArray));

    // Same as in CartProduct component - this reload is to be replaced by managing state higher in hierarchy.
    window.location.reload();
  }

  function addToCart(id) {
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    cartItems.push(id);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  return (
    <div className={styles.favouriteProduct}>
      <Link href={`/${product.id}`}>
        <Image
          src={product.productPhoto}
          alt="product image"
          width="300"
          height="200"
        />
      </Link>
      <div className={styles.favouriteProductDetails}>
        <h3>{product.productName}</h3>
        <p>Origin: {product.productOriginCountry}</p>
        <p>Flavour: {product.productFlavour}</p>
        <p>{product.productPriceUSD} USD</p>
        <div className={styles.buttonContainer}>
          <div
            className={styles.addFavButton}
            onClick={() => addToCart(product.id)}
          >
            <Button text={"Add to cart"} />
          </div>
          <div
            className={styles.removeFavButton}
            onClick={() => removeFromFavourites(product.id)}
          >
            <Button text={"Remove from favourites"} />
          </div>
        </div>
        {/* My initial instinct here is: buttons are probably easier to intuitively understand (based on color, here), than a smaller icon with an additonal text explainer. */}
        {/* <Image src={CART_DARK} alt="add to cart" /> */}
        {/* <Image src={DELETE_DARK} alt="remove from favourites" /> */}
      </div>
    </div>
  );
}
