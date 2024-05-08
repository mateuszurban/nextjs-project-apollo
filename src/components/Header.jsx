import styles from "./Header.module.css";
import Link from "next/link";
import STAR from "../assets/star.svg";
import CART from "../assets/cart.svg";
import PHONE from "../assets/phone.svg";
import COFFEE from "../assets/coffee.svg";
import Image from "next/image";

export function Header() {
  return (
    <ul className={styles.header}>
      <li>
        <Link href="/">
          <Image src={COFFEE} alt="logo" />
          <h2>apollo coffee</h2>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <Image src={PHONE} alt="contact" />
        </Link>
      </li>
      <li>
        <Link href="/favourites">
          <Image src={STAR} alt="favourites" />
        </Link>
      </li>
      <li>
        <Link href="/cart">
          <Image src={CART} alt="cart" />
        </Link>
      </li>
    </ul>
  );
}
