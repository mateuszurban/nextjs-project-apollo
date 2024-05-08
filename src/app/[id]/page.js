import FilterMenu from "@/components/FilterMenu";
import styles from "../../components/ProductsList.module.css";
import ProductDetails from "@/components/ProductDetails";

export default function dynamicRoute({ params }) {
  return (
    <div className={styles.productsPage}>
      <FilterMenu currentPathProps={"coffee"} />
      <ProductDetails productId={params.id} />
    </div>
  );
}
