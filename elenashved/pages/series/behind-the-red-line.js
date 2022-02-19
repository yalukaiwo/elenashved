import React from "react";
import Head from "next/head";
import SerieTemplate from "../../components/SerieTemplate/SerieTemplate";

export default function BehindTheRedLine() {
  const images = [
    "/images/behind-the-red-line/1.jpg",
    "/images/behind-the-red-line/2.jpg",
    "/images/behind-the-red-line/3.jpg",
    "/images/behind-the-red-line/4.jpg",
    "/images/behind-the-red-line/5.jpg",
    "/images/behind-the-red-line/6.jpg",
    "/images/behind-the-red-line/7.jpg",
    "/images/behind-the-red-line/8.jpg",
    "/images/behind-the-red-line/9.jpg",
    "/images/behind-the-red-line/10.jpg",
    "/images/behind-the-red-line/11.jpg",
    "/images/behind-the-red-line/12.jpg",
    "/images/behind-the-red-line/13.jpg",
    "/images/behind-the-red-line/14.jpg",
    "/images/behind-the-red-line/15.jpg",
    "/images/behind-the-red-line/16.jpg",
    "/images/behind-the-red-line/17.jpg",
    "/images/behind-the-red-line/18.jpg",
    "/images/behind-the-red-line/19.jpg",
    "/images/behind-the-red-line/20.jpg",
  ];

  const text = [
    `My main field of activity for the last 20 years was
  medicine. So, the theme, I was always reflected on, is inner
  experience of person working in extremal medicine, where
  daily work is connected to human suffering, pain and death
  as well as risk and high responsibility. This topic had not
  been widely discussed until pandemia COVID -19 focused
  peoples' attention on medical problems.`,
    `This inspired me to create «Behind the Red Line»
  series, which is dedicated to the work in operating block,
  closed object, which entrance is marked by the Red Line.
  Anyone who crosses this line, whether he is a patient or a
  doctor, falls into the zone of inner anxiety, emotional and
  physical tension. Everything happening here resembles a
  theatrical scene, where all the characters perform allotted
  roles. My aim was to open the veil to the "operation
  theater" and convey the specific atmosphere of the place,
  where doctor and patient walk together along the fine line
  between health and illness, life and death.`,
    `All the pictures of the series have been taken directly
  during the surgical operations in 2018-2021 in clinics in
  Kiev (Ukraine), where I work as a surgeon.`,
  ];

  const title = "Behind The Red Line (2018-2021)";
  return (
    <>
      <Head>
        <title>Behind The Red Line</title>
      </Head>
      <SerieTemplate images={images} text={text} title={title} />
    </>
  );
}
