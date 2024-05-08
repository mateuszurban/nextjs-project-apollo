import FilterMenu from "@/components/FilterMenu";
import ProductsList from "@/components/ProductsList";
import { PRODUCTS } from "@/constants/products";
import styles from "../../components/ProductsList.module.css";

export default function Equipment() {
  let productsEquipment = PRODUCTS.filter(
    (product) => product.productCategoryName == "equipment"
  );

  return (
    <div className={styles.productsPage}>
      <FilterMenu currentPathProps={"equipment"} />
      <ProductsList products={productsEquipment} />
    </div>
  );
}
