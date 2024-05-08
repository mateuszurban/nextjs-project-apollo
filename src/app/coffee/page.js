import FilterMenu from "@/components/FilterMenu";
import ProductsList from "@/components/ProductsList";
import styles from "../../components/ProductsList.module.css";
import { PRODUCTS } from "@/constants/products";

export default function Coffee() {
  let productsCoffee = PRODUCTS.filter(
    (product) => product.productCategoryName == "coffee"
  );

  return (
    <div className={styles.productsPage}>
      <FilterMenu currentPathProps={"coffee"} />
      <ProductsList products={productsCoffee} />
    </div>
  );
}
