import Image from "next/image";
import styles from "../../styles/Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact__wrapper}>
      <h2 className={styles.contact__title}>Contact me</h2>
      <div className={`${styles.contact}`}>
        <img src="/socials/instagram.png" width={20} height={20} />
        <a
          href="https://www.instagram.com/shved_artphoto/"
          className={styles.contact__text}
        >
          @shved_artphoto
        </a>
      </div>
      <div className={`${styles.contact}`}>
        <img src="/socials/facebook.png" width={20} height={20} />
        <a
          href="https://www.instagram.com/shved_artphoto/"
          className={styles.contact__text}
        >
          @Shved_artphoto
        </a>
      </div>
      <div className={`${styles.contact}`}>
        <img src="/socials/email.png" width={20} height={20} />
        <a href="mailto:Lenashved@ukr.net" className={styles.contact__text}>
          Lenashved@ukr.net
        </a>
      </div>
    </section>
  );
}
