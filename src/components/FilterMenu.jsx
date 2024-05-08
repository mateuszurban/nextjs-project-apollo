import styles from "../components/FilterMenu.module.css";
import Link from "next/link";
import { CATEGORIES } from "../constants/categories";

// currentPathProps serves as a temporary workaround for nextjs problems encountered earlier. Using usePathname generated hundred of error messages in browser's console, related to preloading of CSS modules.
// How it works: earch parent component "introduces" itself to this repeated FilterMenu component, via props, so side menu can filter anything at all.

// Error described here:
// https://github.com/vercel/next.js/discussions/49607?sort=top#discussioncomment-5943994

// Conclusion:
// Probably would be easier to just stick to using react router here, instead of this manual workaround. Amount of problems generated was far greater (and cost more hours) than convenience of next's link component.
// Alternative solution to try: https://stackoverflow.com/questions/65373834/link-not-active-in-next-js-even-when-i-am-on-the-page

export default function FilterMenu({ currentPathProps }) {
  return (
    <div className={styles.filterMenu}>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path} className={styles.filterMenuCategory}>
              <Link href={category.path}>{category.categoryName}</Link>

              {currentPathProps == category.path && (
                <ul>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li
                        key={subcategory.path}
                        className={styles.filterMenuSubcategory}
                      >
                        {subcategory.categoryName}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
