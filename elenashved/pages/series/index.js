import Link from "next/link";
import styles from "../../styles/Series.module.scss";

export default function Publications() {
  return (
    <section className={styles.series__holder}>
      <div className={styles.series__wrapper}>
        <div className={styles.series__item}>
          <img
            className={styles.series__image}
            src="/images/brl/background.jpg"
            alt="background"
          />
          <div className={styles.series__side}>
            <div className={styles.series__side_header}>
              <h3 className={styles.series__item_title}>Behind The Red Line</h3>
            </div>
            <p className={styles.series__item_description}>
              My main field of activity for the last 20 years was medicine. So,
              the theme, I was always reflected on, is inner experience of
              person working in extremal medicine, where daily work is connected
              to human suffering, pain and death as well as risk and high
              responsibility.{" "}
              <span className={styles.dn_1035}>
                This topic had not been widely discussed until pandemia COVID-19
                focused peoples' attention on medical problems. This inspired me
                to create «Behind the Red Line» series, which is dedicated to
                the work in operating block, closed object, which entrance is
                marked by the Red Line.
              </span>{" "}
              <span className={styles.dn_1280}>
                Anyone who crosses this line, whether he is a patient or a
                doctor, falls into the zone of inner anxiety, emotional and
                physical tension. Everything happening here resembles a
                theatrical scene, where all the characters perform allotted
                roles.
              </span>
            </p>
            <Link href="/series/behind-the-red-line">
              <h4 className={styles.series__item_seemore}>See more &#8594;</h4>
            </Link>
          </div>
        </div>
        <div className={styles.series__item}>
          <img
            className={styles.series__image}
            src="/images/brl/background.jpg"
            alt="background"
          />
          <div className={styles.series__side}>
            <div className={styles.series__side_header}>
              <h3 className={styles.series__item_title}>
                The Eidetics Of Burnout Syndrome
              </h3>
            </div>
            <p className={styles.series__item_description}>
              My main field of activity for the last 20 years was medicine. So,
              the theme, I was always reflected on, is inner experience of
              person working in extremal medicine, where daily work is connected
              to human suffering, pain and death as well as risk and high
              responsibility.{" "}
              <span className={styles.dn_1035}>
                This topic had not been widely discussed until pandemia COVID-19
                focused peoples' attention on medical problems. This inspired me
                to create «Behind the Red Line» series, which is dedicated to
                the work in operating block, closed object, which entrance is
                marked by the Red Line.
              </span>{" "}
              <span className={styles.dn_1280}>
                Anyone who crosses this line, whether he is a patient or a
                doctor, falls into the zone of inner anxiety, emotional and
                physical tension. Everything happening here resembles a
                theatrical scene, where all the characters perform allotted
                roles.
              </span>
            </p>
            <Link href="/series/the-eidetics-of-burnout-syndrome">
              <h4 className={styles.series__item_seemore}>See more &#8594;</h4>
            </Link>
          </div>
        </div>
        <div className={styles.series__item}>
          <img
            className={styles.series__image}
            src="/images/brl/background.jpg"
            alt="background"
          />
          <div className={styles.series__side}>
            <div className={styles.series__side_header}>
              <h3 className={styles.series__item_title}>City Patchwork</h3>
            </div>
            <p className={styles.series__item_description}>
              My main field of activity for the last 20 years was medicine. So,
              the theme, I was always reflected on, is inner experience of
              person working in extremal medicine, where daily work is connected
              to human suffering, pain and death as well as risk and high
              responsibility.{" "}
              <span className={styles.dn_1035}>
                This topic had not been widely discussed until pandemia COVID-19
                focused peoples' attention on medical problems. This inspired me
                to create «Behind the Red Line» series, which is dedicated to
                the work in operating block, closed object, which entrance is
                marked by the Red Line.
              </span>{" "}
              <span className={styles.dn_1280}>
                Anyone who crosses this line, whether he is a patient or a
                doctor, falls into the zone of inner anxiety, emotional and
                physical tension. Everything happening here resembles a
                theatrical scene, where all the characters perform allotted
                roles.
              </span>
            </p>
            <Link href="/series/city-patchwork">
              <h4 className={styles.series__item_seemore}>See more &#8594;</h4>
            </Link>
          </div>
        </div>
        <div className={styles.series__item}>
          <img
            className={styles.series__image}
            src="/images/brl/background.jpg"
            alt="background"
          />
          <div className={styles.series__side}>
            <div className={styles.series__side_header}>
              <h3 className={styles.series__item_title}>The Habitat</h3>
            </div>
            <p className={styles.series__item_description}>
              My main field of activity for the last 20 years was medicine. So,
              the theme, I was always reflected on, is inner experience of
              person working in extremal medicine, where daily work is connected
              to human suffering, pain and death as well as risk and high
              responsibility.{" "}
              <span className={styles.dn_1035}>
                This topic had not been widely discussed until pandemia COVID-19
                focused peoples' attention on medical problems. This inspired me
                to create «Behind the Red Line» series, which is dedicated to
                the work in operating block, closed object, which entrance is
                marked by the Red Line.
              </span>{" "}
              <span className={styles.dn_1280}>
                Anyone who crosses this line, whether he is a patient or a
                doctor, falls into the zone of inner anxiety, emotional and
                physical tension. Everything happening here resembles a
                theatrical scene, where all the characters perform allotted
                roles.
              </span>
            </p>
            <Link href="/series/the-habitat">
              <h4 className={styles.series__item_seemore}>See more &#8594;</h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
