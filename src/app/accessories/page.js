import FilterMenu from "@/components/FilterMenu";
import ProductsList from "@/components/ProductsList";
import { PRODUCTS } from "@/constants/products";
import styles from "../../components/ProductsList.module.css";

export default function Accessories() {
  let productsAccessories = PRODUCTS.filter(
    (product) => product.productCategoryName == "accessories"
  );

  return (
    <div className={styles.productsPage}>
      <FilterMenu currentPathProps={"accessories"} />
      <ProductsList products={productsAccessories} />
    </div>
  );
}
