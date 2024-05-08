import Button from "./Button";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero({
  heroImage,
  heroCTAText,
  heroLinkURL,
  heroButtonText,
}) {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <h1>{heroCTAText}</h1>

      <Link href={heroLinkURL}>
        <Button text={heroButtonText} />
      </Link>
    </div>
  );
}
