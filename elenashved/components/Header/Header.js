import React, { useState } from "react";
import styles from "../../styles/Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ScrollLock from "react-scrolllock";

export default function Header() {
  const [burger, setBurger] = useState(false);
  const router = useRouter();
  const burgerClickHandler = () => {
    setBurger(!burger);
  };

  const closeBurger = () => {
    setBurger(false);
  };

  const backgroundClickHandler = (e) => {
    if (e.target.classList.contains(styles.burger__content_holder)) {
      setBurger(!burger);
    }
  };

  return (
    <>
      <ScrollLock isActive={burger} />
      <div className={styles.header__holder}>
        <div className={styles.header}>
          <section className={styles.container}>
            <div className={styles.leftside}>
              <div className={styles.logo}>Olena Shved</div>
              <ul className={styles.nav}>
                <li className={styles.nav__link}>
                  <Link href="/about">
                    <a
                      className={`${styles.nav__link_a} ${
                        router.pathname === "/about"
                          ? styles.nav__link_a__active
                          : ""
                      }`}
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li className={styles.nav__link}>
                  <Link href="/gallery">
                    <a
                      className={`${styles.nav__link_a} ${
                        router.pathname === "/gallery"
                          ? styles.nav__link_a__active
                          : ""
                      }`}
                    >
                      Gallery
                    </a>
                  </Link>
                </li>
                <li className={styles.nav__link}>
                  <Link href="/books">
                    <a
                      className={`${styles.nav__link_a} ${
                        router.pathname === "/books"
                          ? styles.nav__link_a__active
                          : ""
                      }`}
                    >
                      Books
                    </a>
                  </Link>
                </li>
                <li className={styles.nav__link}>
                  <Link href="/contact">
                    <a
                      className={`${styles.nav__link_a} ${
                        router.pathname === "/contact"
                          ? styles.nav__link_a__active
                          : ""
                      }`}
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.rightside}>
              <div className={styles.socials}>
                <a href="https://www.instagram.com/shved_artphoto/">
                  <Image
                    src={"/socials/instagram.png"}
                    width={25}
                    height={25}
                  />
                </a>
                <a href="https://www.instagram.com/shved_artphoto/">
                  <Image src={"/socials/facebook.png"} width={25} height={25} />
                </a>
                <a href="mailto:Lenashved@ukr.net">
                  <Image src={"/socials/email.png"} width={25} height={25} />
                </a>
              </div>
              <div className={styles.burger} onClick={burgerClickHandler}>
                <Image src="/socials/menu.png" width={22} height={22} />
              </div>
            </div>
            <section
              className={`${styles.burger__content_holder} ${
                burger ? styles.burger__content_holder_active : ""
              }`}
              onClick={backgroundClickHandler}
            ></section>
            <div
              className={`${styles.burger__content} ${
                burger ? styles.burger__content_active : ""
              }`}
            >
              <div className={styles.burger__header}>
                <div
                  className={`${styles.burger} ${styles.burger__open}`}
                  onClick={burgerClickHandler}
                >
                  <Image src="/socials/close.png" width={20} height={20} />
                </div>
              </div>
              <ul className={styles.burger__nav}>
                <li className={styles.nav__link}>
                  <Link href="/about">
                    <a
                      className={`${styles.nav__link_a} ${
                        styles.burger__link
                      } ${
                        router.pathname === "/about"
                          ? styles.nav__link_a__active
                          : ""
                      }`}
                      onClick={closeBurger}
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li className={styles.nav__link}>
                  <Link href="/gallery">
                    <a
                      className={`${styles.nav__link_a} ${
                        styles.burger__link
                      } ${
                        router.pathname === "/gallery"
                          ? styles.nav__link_a__active
                          : ""
                      }`}
                      onClick={closeBurger}
                    >
                      Gallery
                    </a>
                  </Link>
                </li>
                <li className={styles.nav__link}>
                  <Link href="/books">
                    <a
                      className={`${styles.nav__link_a} ${
                        styles.burger__link
                      } ${
                        router.pathname === "/books"
                          ? styles.nav__link_a__active
                          : ""
                      }`}
                      onClick={closeBurger}
                    >
                      Books
                    </a>
                  </Link>
                </li>
                <li className={styles.nav__link}>
                  <Link href="/contact">
                    <a
                      className={`${styles.nav__link_a} ${
                        styles.burger__link
                      } ${
                        router.pathname === "/contact"
                          ? styles.nav__link_a__active
                          : ""
                      }`}
                      onClick={closeBurger}
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className={styles.burger__gallery_nav}>
                <li className={styles.burger__gallery_link}>
                  <Link href="/gallery/behind-the-red-line">
                    <a
                      onClick={closeBurger}
                      className={`${styles.nav__link_a} ${styles.burger__gallery_link_a}`}
                    >
                      Behind The Red Line
                    </a>
                  </Link>
                </li>
                <li className={styles.burger__gallery_link}>
                  <Link href="/gallery/the-eidetics-of-burnout-syndrome">
                    <a
                      onClick={closeBurger}
                      className={`${styles.nav__link_a} ${styles.burger__gallery_link_a}`}
                    >
                      The Eidetics Of Burnout Syndrome
                    </a>
                  </Link>
                </li>
                <li className={styles.burger__gallery_link}>
                  <Link href="/gallery/city-patchwork">
                    <a
                      onClick={closeBurger}
                      className={`${styles.nav__link_a} ${styles.burger__gallery_link_a}`}
                    >
                      City Patchwork
                    </a>
                  </Link>
                </li>
                <li className={styles.burger__gallery_link}>
                  <Link href="/gallery/the-habitat">
                    <a
                      onClick={closeBurger}
                      className={`${styles.nav__link_a} ${styles.burger__gallery_link_a}`}
                    >
                      The Habitat
                    </a>
                  </Link>
                </li>
              </ul>
              <div className={`${styles.socials} ${styles.burger__contacts}`}>
                <a href="https://www.instagram.com/shved_artphoto/">
                  <Image
                    src={"/socials/instagram.png"}
                    width={25}
                    height={25}
                  />
                </a>
                <a href="https://www.instagram.com/shved_artphoto/">
                  <Image src={"/socials/facebook.png"} width={25} height={25} />
                </a>
                <a href="mailto:Lenashved@ukr.net">
                  <Image src={"/socials/email.png"} width={25} height={25} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
