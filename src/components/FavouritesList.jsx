import FavouriteProduct from "./FavouriteProduct";
import styles from "./FavouritesList.module.css";

export default function FavouritesList({ products }) {
  return (
    <div className={styles.favouritesList}>
      <h2>Favourites</h2>
      <ul>
        {products.map((product) => {
          return <FavouriteProduct key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
}
