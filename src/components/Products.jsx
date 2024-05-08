import Button from "./Button";
import styles from "./Products.module.css";
import Product from "./Product";
import Link from "next/link";

export default function Products({
  products,
  headerText,
  buttonVisible,
  productsVisible,
}) {
  return (
    <>
      <div className={styles.featured}>
        <h3>{headerText}</h3>
        <ul>
          {productsVisible === 8 ? (
            <>
              {products.map((product) => {
                return <Product key={product.id} product={product} />;
              })}{" "}
            </>
          ) : (
            <>
              {products.slice(0, 4).map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </>
          )}
        </ul>
        {buttonVisible && (
          <Link href="/coffee">
            <Button text={"Check more products"} />
          </Link>
        )}
      </div>
    </>
  );
}
