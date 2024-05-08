"use client";

import Button from "./Button";
import styles from "./ProductInfo.module.css";

export default function ProductInfo({ product }) {
  function addProductToCart(id) {
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    cartItems.push(id);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
  return (
    <div className={styles.productInfo}>
      <h2>{product.productName}</h2>
      {product.productOriginCountry && (
        <p>Origin: {product.productOriginCountry}</p>
      )}
      {product.productFlavour && <p>Flavour: {product.productFlavour}</p>}
      {product.productWeightGrams && (
        <p>Package: {product.productWeightGrams} grams</p>
      )}

      <p>{product.productDescription}</p>
      <p className={styles.productPrice}>{product.productPriceUSD} USD</p>
      <div onClick={() => addProductToCart(product.id)}>
        <Button text={"Add to cart"} />
      </div>
    </div>
  );
}
