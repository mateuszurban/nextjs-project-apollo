import FilterMenu from "@/components/FilterMenu";
import ProductsList from "@/components/ProductsList";
import { PRODUCTS } from "@/constants/products";
import styles from "../../components/ProductsList.module.css";

export default function Workshops() {
  let productsWorkshops = PRODUCTS.filter(
    (product) => product.productCategoryName == "workshops"
  );

  return (
    <div className={styles.productsPage}>
      <FilterMenu currentPathProps={"workshops"} />
      <ProductsList products={productsWorkshops} />
    </div>
  );
}
