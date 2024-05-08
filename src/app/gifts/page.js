import FilterMenu from "@/components/FilterMenu";
import ProductsList from "@/components/ProductsList";
import { PRODUCTS } from "@/constants/products";
import styles from "../../components/ProductsList.module.css";

export default function Gifts() {
  let productsGifts = PRODUCTS.filter(
    (product) => product.productCategoryName == "gifts"
  );

  return (
    <div className={styles.productsPage}>
      <FilterMenu currentPathProps={"gifts"} />
      <ProductsList products={productsGifts} />
    </div>
  );
}
