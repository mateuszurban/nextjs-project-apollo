import CartProduct from "./CartProduct";
import styles from "./CartItems.module.css";
import Button from "./Button";
import Link from "next/link";

export default function CartItems({ products }) {
  let shippingCost = 5;
  let totalSum = 0;
  products.forEach((product) => {
    totalSum += Number(product.productPriceUSD);
  });
  let grandTotalSum = shippingCost + totalSum;
  // IDEA: Add a free shipping evaluation here, with confirmation for user.

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartItems}>
        <h2>Cart items</h2>
        <ul>
          {products.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })}
        </ul>
      </div>
      <div className={styles.cartSummary}>
        <h2>Summary</h2>
        <div className={styles.cartSummaryRow}>
          <p>Total:</p>
          <p>{totalSum} USD</p>
        </div>
        <div className={styles.cartSummaryRow}>
          <p>Shipping: </p>
          <p>{shippingCost} USD</p>
        </div>
        <hr />
        <div className={styles.cartSummaryRow}>
          <h2>Grand total: </h2>
          <h2>{grandTotalSum} USD</h2>
        </div>
        <Link href={"/checkout"}>
          <Button text={"Checkout"} />
        </Link>
      </div>
    </div>
  );
}
