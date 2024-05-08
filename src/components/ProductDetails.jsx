import styles from "./ProductDetails.module.css";
import ProductPhotos from "./ProductPhotos";
import ProductInfo from "./ProductInfo";
import { PRODUCTS } from "@/constants/products";
import { redirect } from "next/navigation";

export default function ProductDetails({ productId }) {
  // In an app with a backend, this would be an API call.
  // Here, we find proper product in an array, consisting of all the products data, by using unique id.
  let product = PRODUCTS.find(
    (databaseProduct) => databaseProduct.id == productId
  );

  // Redirects to main page, if product details were not found in database.
  // Thanks to that, you don't have to check every dynamic route for proper calls, just make sure the product is there.
  if (!product) {
    redirect("/");
  }

  return (
    <div className={styles.productDetails}>
      <ProductPhotos productPhoto={product.productPhoto} />
      <ProductInfo product={product} />
    </div>
  );
}
