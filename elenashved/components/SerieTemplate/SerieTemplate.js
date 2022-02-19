import React, { useState } from "react";
import styles from "../../styles/SerieTemplate.module.scss";

export default function SerieTemplate({ images, text, title }) {
  const [currentImage, setCurrentImage] = useState(0);

  const imagesJSX = images.map((el, index) => (
    <div className={styles.image_holder}>
      <img
        key={index}
        className={styles.images_item}
        alt="picture"
        src={el}
        data-index={index}
        onClick={(e) => {
          setCurrentImage(e.target.getAttribute("data-index"));
        }}
      />
    </div>
  ));

  const textJSX = text.map((el, index) => (
    <p key={index} className={styles.paragraphs_item}>
      {el}
    </p>
  ));

  return (
    <section className={styles.content_holder}>
      <div className={styles.description}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.paragraphs}>{textJSX}</div>
      </div>
      <div className={styles.images}>
        <img
          className={styles.images_front}
          src={images[currentImage]}
          alt="front"
        />
        <div className={styles.images_list}>{imagesJSX}</div>
      </div>
    </section>
  );
}
