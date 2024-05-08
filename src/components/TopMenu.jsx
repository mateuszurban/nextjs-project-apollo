"use client";

import styles from "./TopMenu.module.css";
import Link from "next/link";
import { CATEGORIES } from "../constants/categories";

export function TopMenu() {
  return (
    <ul className={styles.topmenu}>
      {CATEGORIES.map((category) => {
        return (
          <Link key={category.path} href={category.path}>
            {category.categoryName}
          </Link>
        );
      })}
    </ul>
  );
}
