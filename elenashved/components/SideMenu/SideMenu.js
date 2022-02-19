import React from "react";
import styles from "../../styles/SideMenu.module.scss";
import Link from "next/link";

export default function SideMenu() {
  return (
    <div className={styles.sidemenu__holder}>
      <section className={styles.sidemenu}>
        <div className={styles.gallery__holder}>
          <ul className={styles.gallery_nav}>
            <li className={styles.gallery_link}>
              <Link href="/series/behind-the-red-line">
                <a className={`${styles.gallery__link_a}`}>
                  Behind The Red Line
                </a>
              </Link>
            </li>
            <li className={styles.gallery_link}>
              <Link href="/series/the-eidetics-of-burnout-syndrome">
                <a className={`${styles.gallery__link_a}`}>
                  The Eidetics Of Burnout Syndrome
                </a>
              </Link>
            </li>
            <li className={styles.gallery_link}>
              <Link href="/series/city-patchwork">
                <a className={`${styles.gallery__link_a}`}>City Patchwork</a>
              </Link>
            </li>
            <li className={styles.gallery_link}>
              <Link href="/series/the-habitat">
                <a className={`${styles.gallery__link_a}`}>The Habitat</a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
