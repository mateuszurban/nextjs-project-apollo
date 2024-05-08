import styles from "./Footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerPanel}>
          <Link href="/about">about</Link>
          <Link href="/mission">mission</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className={styles.footerPanel}>
          <Link href="/contact">contact</Link>
          <Link href="/credits">credits</Link>
        </div>
      </div>
    </>
  );
}
