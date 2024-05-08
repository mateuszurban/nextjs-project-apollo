import styles from "./CartProduct.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function CartProduct({ product }) {
  function removeFromCart(id) {
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    let newCartItemsArray = cartItems.filter((cartItem) => cartItem !== id);
    localStorage.setItem("cart", JSON.stringify(newCartItemsArray));

    // Probably would be better to move the state way way up higher, and hydrating/using context for all the information on the lower levels
    window.location.reload();
  }

  return (
    <div className={styles.cartProduct}>
      <Link href={`/${product.id}`}>
        <Image
          src={product.productPhoto}
          alt="product image"
          width="300"
          height="200"
        />
      </Link>
      <div className={styles.cartProductDetails}>
        <h3>{product.productName}</h3>
        <p>Origin: {product.productOriginCountry}</p>
        <p>Flavour: {product.productFlavour}</p>
        <p>{product.productPriceUSD} USD</p>
        <div onClick={() => removeFromCart(product.id)}>
          <Button text={"Remove from cart"} />
        </div>
      </div>
    </div>
  );
}
