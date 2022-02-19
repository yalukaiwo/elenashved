import styles from "../../styles/About.module.scss";
import Head from "next/head";

export default function About() {
  return (
    <div className={styles.global__wrapper}>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.about__wrapper}>
        <div className={styles.image__holder}>
          <img
            className={styles.main__image}
            src={"/images/background_mpg.jpg"}
            alt="mpg"
          />
        </div>
        <div className={styles.paragraph__holder}>
          <h3 className={styles.paragraph__heading}>About</h3>
          <p className={styles.paragraph}>
            Olena Shved (b.1975, Kyiv, Ukraine) is an Ukrainian photographer,
            based in Kiev. Her first profession is vascular surgery. The
            influence of 20 years experience in medicine caused her reflection
            on the themes of pain, fragility of human life, humanitarian aspects
            of illness, the identity of doctors in modern society. Such a
            dialectic question, as the existence of demarcation line between the
            two opposites: life and death, health and illness, doctor and
            patient, normal and abnormal is also the research topic, disturbing
            her. Chronic emotional stress from prolonged contact with human
            suffering pushed her to go deep in photography several years ago and
            explore all these issues with the help of art instruments. This
            experience became a therapy personally for her to overcome
            posttraumatic and medical burnout syndrome.
          </p>
        </div>
      </div>
      <div className={styles.info__wrapper}>
        <h3 className={styles.paragraph__heading}>Education</h3>
        <ul className={styles.info__list}>
          <li className={styles.info__list__item}>
            Kyiv School of Photography (2018-2021)
          </li>
          <li className={styles.info__list__item}>
            Chekachkov Academy: «Modern and Conceptual Photography» (2020-2021)
          </li>
          <li className={styles.info__list__item}>MYTH Academy (2020-2021)</li>
        </ul>
      </div>
      <div className={styles.info__wrapper}>
        <h3 className={styles.paragraph__heading}>Group Exhibitions</h3>
        <ul className={styles.info__list}>
          <li className={styles.info__list__item}>
            «New Generation» NU ART Gallery - Kyiv. Ukraine (2020)
          </li>
        </ul>
      </div>
      <div className={styles.info__wrapper}>
        <h3 className={styles.paragraph__heading}>Art Fairs</h3>
        <ul className={styles.info__list}>
          <li className={styles.info__list__item}>
            Photo Kyiv Fair - Kyiv, Ukraine (2020)
          </li>
        </ul>
      </div>
      <div className={styles.info__wrapper}>
        <h3 className={styles.paragraph__heading}>Awards</h3>
        <ul className={styles.info__list}>
          <li className={styles.info__list__item}>
            Silver Prize in Paris Photo Prize 2020{" "}
            <span className={styles.info__list__item__bold}>
              («Behind the Red Line»)
            </span>
          </li>
          <li className={styles.info__list__item}>
            Silver Prize in Tokyo International Photo Awards 2020{" "}
            <span className={styles.info__list__item__bold}>
              («Behind the Red Line»)
            </span>
          </li>
          <li className={styles.info__list__item}>
            Honorable Mention in International Photography Awards 2020{" "}
            <span className={styles.info__list__item__bold}>
              («Behind the Red Line»)
            </span>
          </li>
          <li className={styles.info__list__item}>
            Honorable Mention in Neutral Density Photography Awards 2020{" "}
            <span className={styles.info__list__item__bold}>
              («Behind the Red Line»)
            </span>
          </li>
          <li className={styles.info__list__item}>
            Honorable Mention in Tokyo International Photo Awards 2020{" "}
            <span className={styles.info__list__item__bold}>
              («Behind the Red Line»)
            </span>
          </li>
          <li className={styles.info__list__item}>
            Honorable Mention in Annual Photography Awards 2020{" "}
            <span className={styles.info__list__item__bold}>
              («City Patchwork»)
            </span>
          </li>
          <li className={styles.info__list__item}>
            Finalist of Open Call Female Ukrainian photographer in Odessa Photo
            Days Festival 2021{" "}
            <span className={styles.info__list__item__bold}>
              («Behind the Red Line»)
            </span>
          </li>
          <li className={styles.info__list__item}>
            Shortlist in Kolga Tbilisi Photo Awards 2021{" "}
            <span className={styles.info__list__item__bold}>
              («Behind the Red Line»)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
