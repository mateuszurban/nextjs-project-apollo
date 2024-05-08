"use client";

import styles from "./Product.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  function addProdutToFavourites(e, props) {
    e.preventDefault();
    let localStorageContent = JSON.parse(localStorage.getItem("favourites"));

    if (localStorageContent === null) {
      localStorageContent = [];

      localStorageContent.push(props);

      localStorage.setItem("favourites", JSON.stringify(localStorageContent));
    } else {
      localStorageContent.push(props);

      localStorage.setItem("favourites", JSON.stringify(localStorageContent));
    }
  }

  return (
    <div>
      <Link href={`/${product.id}`}>
        <Image
          src={product.productPhoto}
          alt="product image"
          width="300"
          height="200"
        />
        <div className={styles.product}>
          <h3>{product.productName}</h3>
          <button onClick={(e) => addProdutToFavourites(e, product.id)}>
            <div className={styles.starComponentStyle}></div>
          </button>
          {product.productOriginCountry && (
            <p>Origin: {product.productOriginCountry}</p>
          )}
          {product.productFlavour && <p>Flavour: {product.productFlavour}</p>}
          <p>{product.productPriceUSD} USD</p>
        </div>
      </Link>
    </div>
  );
}
