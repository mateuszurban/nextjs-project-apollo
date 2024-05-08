import styles from "../components/ProductsList.module.css";
import Products from "./Products";

export default function ProductsList({ products }) {
  return (
    <div className={styles.productsList}>
      <Products
        products={products}
        headerText={""}
        buttonVisible={false}
        productsVisible={8}
      />
    </div>
  );
}
