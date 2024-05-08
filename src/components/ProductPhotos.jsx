import styles from "./ProductPhotos.module.css";
import Image from "next/image";

export default function ProductPhotos({ productPhoto }) {
  return (
    <>
      <Image
        className={styles.productPhoto}
        src={productPhoto}
        alt={"product photo"}
        height="200"
        width="300"
      />
    </>
  );
}
